'use client';
import { useEffect, useState } from 'react';

export default function Sidebar({ filters, setFilters, allProducts }) {
  const categories = ['jewelery', 'electronics', "women's clothing", "men's clothing", 'Sports & Outdoors'];
  const brands = [...new Set(allProducts.map(p => p.brand || 'Unknown'))];

  const handleCategoryChange = (category) => {
    setFilters(prev => {
      const selected = prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category];
      return { ...prev, categories: selected };
    });
  };

  const handleBrandChange = (e) => {
    setFilters(prev => ({ ...prev, brand: e.target.value }));
  };

  const handlePriceChange = (e, type) => {
    const value = parseInt(e.target.value);
    setFilters(prev => ({
      ...prev,
      price: {
        ...prev.price,
        [type]: value,
      }
    }));
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-semibold mb-2">Categories</h3>
        {categories.map(category => (
          <div key={category} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters.categories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
            <label>{category}</label>
          </div>
        ))}
      </div>

      <div>
        <h3 className="font-semibold mb-2">Price Range</h3>
        <div className="flex items-center gap-2">
          <input
            type="range"
            min="0"
            max="500"
            value={filters.price.min}
            onChange={(e) => handlePriceChange(e, 'min')}
          />
          <span>${filters.price.min}</span>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Brand</h3>
        <select value={filters.brand} onChange={handleBrandChange} className="w-full border px-2 py-1 rounded">
          <option value="">Select Brand</option>
          {brands.map(brand => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
