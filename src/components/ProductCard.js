'use client';
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const router = useRouter();
  const { addToCart } = useCart();

  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col justify-between">
      {/* Product Image */}
      <div
        className="cursor-pointer mb-4"
        onClick={() => router.push(`/product/${product.id}`)}
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-40 object-contain"
        />
      </div>

      {/* Title and Price */}
      <h3 className="text-md font-semibold mb-1 line-clamp-1">
        {product.title}
      </h3>
      <p className="text-sm font-bold mb-3">${product.price}</p>

      {/* Add to Cart Button */}
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 text-sm rounded-md transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
