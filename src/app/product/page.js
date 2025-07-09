import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import FeaturedProducts from '@/components/FeaturedProducts';
import AllProducts from '@/components/AllProducts';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex flex-1 px-6 mt-6">
        <aside className="w-64 hidden lg:block pr-6">
          <Sidebar />
        </aside>

        <section className="flex-1">
          <div className="flex flex-wrap gap-2 mb-6">
            {["Electronics", "Clothing", "Home & Kitchen", "Books", "Sports & Outdoors"].map(cat => (
              <span
                key={cat}
                className="bg-gray-200 text-sm px-4 py-1 rounded-full cursor-pointer hover:bg-gray-300"
              >
                {cat}
              </span>
            ))}
          </div>

          <AllProducts />
        </section>
      </main>

      <Footer />
    </div>
  );
}
