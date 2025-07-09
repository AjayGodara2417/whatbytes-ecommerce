import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductDetailClient from "@/components/ProductDetailClient";

export async function generateStaticParams() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductDetail({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await res.json();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-6 py-10">
        <ProductDetailClient product={product} />
      </main>
      <Footer />
    </div>
  );
}
