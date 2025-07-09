'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
// import FeaturedProducts from '@/components/FeaturedProducts';
import AllProducts from '@/components/AllProducts';

export default function Home() {
  const [filters, setFilters] = useState({
      categories: [],
      brand: '',
      price: {
        min: 0,
        max: 500,
      },
    });
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex flex-1 px-6 mt-6">
        <aside className="w-64 hidden lg:block pr-6">
          <Sidebar filters={filters} setFilters={setFilters} allProducts={[]}  />
        </aside>

        <section className="flex-1">
          <div className="flex flex-wrap gap-2 mb-6">
            {['jewelery', 'electronics', "women's clothing", "men's clothing", 'Sports & Outdoors'].map(cat => (
              <span
                key={cat}
                className="bg-gray-200 text-sm px-4 py-1 rounded-full cursor-pointer hover:bg-gray-300"
              >
                {cat}
              </span>
            ))}
          </div>

          <AllProducts filters={filters} />
        </section>
      </main>

      <Footer />
    </div>
  );
}
