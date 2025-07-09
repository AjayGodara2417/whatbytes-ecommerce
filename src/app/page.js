"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import FeaturedProducts from "@/components/FeaturedProducts";
import Link from "next/link";

export default function Home() {
  const [filters, setFilters] = useState({
    categories: [],
    brand: "",
    price: { min: 0, max: 500 },
    search: "",
  });

  const handleSearch = (searchTerm) => {
    setFilters((prev) => ({ ...prev, search: searchTerm }));
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar onSearch={handleSearch} />

      <main className="flex flex-1 px-6 mt-6">
        <aside className="w-64 hidden lg:block pr-6">
          <Sidebar filters={filters} setFilters={setFilters} allProducts={[]} />
        </aside>

        <section className="flex-1">
          <div className="flex flex-wrap gap-2 mb-6">
            <Link
              href={"/product"}
              className="bg-gray-200 text-sm px-4 py-1 rounded-full cursor-pointer hover:bg-gray-300"
            >
              All Products
            </Link>
            <Link
              href={"/cart"}
              className="bg-gray-200 text-sm px-4 py-1 rounded-full cursor-pointer hover:bg-gray-300"
            >
              Cart
            </Link>
          </div>
          
          <h1 className="mb-4 font-bold text-2xl">Featured Products</h1>
          <FeaturedProducts filters={filters} />
        </section>
      </main>

      <Footer />
    </div>
  );
}
