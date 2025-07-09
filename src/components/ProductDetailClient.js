'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

export default function ProductDetailClient({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const increase = () => setQuantity(q => q + 1);
  const decrease = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  const handleAdd = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Image Section */}
      <div className="bg-white border rounded-lg p-4 flex justify-center items-center">
        <Image
          src={product.image}
          alt={product.title}
          className="object-contain h-80"
          width={100}
          height={100}
        />
      </div>

      {/* Details Section */}
      <div>
        <h1 className="text-2xl font-semibold mb-2">{product.title}</h1>
        <p className="text-lg text-gray-800 font-bold mb-4">${product.price}</p>
        <p className="text-sm text-gray-600 mb-6">{product.description}</p>
        <p className="text-sm text-gray-500 mb-4">
          <span className="font-medium text-gray-700">Category:</span> {product.category}
        </p>

        {/* Quantity Selector */}
        <div className="flex items-center gap-3 mb-4">
          <button onClick={decrease} className="bg-gray-200 px-3 py-1 rounded text-lg">-</button>
          <span>{quantity}</span>
          <button onClick={increase} className="bg-gray-200 px-3 py-1 rounded text-lg">+</button>
        </div>

        {/* Add to Cart */}
        <button className="bg-black text-white px-6 py-2 rounded" onClick={handleAdd}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
