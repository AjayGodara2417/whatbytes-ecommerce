'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import FeaturedProducts from '@/components/FeaturedProducts';

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
          <Sidebar filters={filters} setFilters={setFilters} allProducts={[]} />
        </aside>

        <section className="flex-1">
          <h1 className='mb-4 font-bold text-2xl'>Featured Products</h1>
          <FeaturedProducts filters={filters} />
          
          
        </section>
      </main>
      <Footer />
    </div>
  );
}
