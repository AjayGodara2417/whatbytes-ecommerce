'use client';
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function Navbar({ onSearch }) {
  const { cartItems } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <header className="bg-blue-800 text-white px-6 py-4 flex items-center justify-between">
      <div className="text-2xl font-bold">Logo</div>

      <input
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-1/2 px-4 py-2 rounded bg-white text-black focus:outline-none"
      />

      <div className="flex gap-3">
        <div
        className="relative flex items-center cursor-pointer"
        onClick={() => router.push("/cart")}
      >
        <ShoppingCart className="h-6 w-6" />
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-xs text-white w-5 h-5 rounded-full flex items-center justify-center">
            {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
          </span>
        )}
      </div>
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
      
    </header>
  );
}
