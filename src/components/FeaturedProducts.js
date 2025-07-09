'use client';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

export default function FeaturedProducts({ filters }) {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/?limit=6')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setAllProducts(data);
      });
  }, []);

  useEffect(() => {
    const filtered = allProducts.filter(p => {
      const matchCategory = filters.categories.length === 0 || filters.categories.includes(p.category);
      const matchBrand = !filters.brand || (p.brand || 'Unknown') === filters.brand;
      const matchPrice = p.price >= filters.price.min && p.price <= filters.price.max;
      return matchCategory && matchBrand && matchPrice;
    });

    setProducts(filtered);
  }, [filters, allProducts]);

  if (!products.length) return <p>Please wait. Products coming!!!.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
