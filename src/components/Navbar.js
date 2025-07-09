import { ShoppingCart, UserCircle } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="bg-white border-b px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold">Whatbytes</div>

      <div className="w-full max-w-md mx-6">
        <input
          type="text"
          placeholder="Search for products"
          className="w-full border rounded-full px-4 py-2 bg-gray-100 text-sm outline-none"
        />
      </div>

      <div className="flex gap-4 items-center">
        <div className="relative">
          <ShoppingCart className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">2</span>
        </div>
        <UserCircle className="w-7 h-7" />
      </div>
    </header>
  );
}
