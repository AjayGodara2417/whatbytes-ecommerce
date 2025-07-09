import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="bg-white rounded-lg border p-4 hover:shadow transition cursor-pointer">
        <img src={product.image} alt={product.title} className="w-full h-40 object-contain mb-3" />
        <h3 className="font-semibold text-sm">{product.title}</h3>
        <p className="text-xs text-gray-500 mb-2 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-lg font-bold">${product.price}</span>
          <button className="bg-black text-white text-xs px-3 py-1 rounded">Add to Cart</button>
        </div>
      </div>
    </Link>
  );
}
