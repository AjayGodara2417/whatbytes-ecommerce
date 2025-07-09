"use client";
import { useEffect } from "react";

export default function Sidebar({ filters, setFilters, allProducts }) {
  const categories = [
    "jewelery",
    "electronics",
    "women's clothing",
    "men's clothing",
    "Sports & Outdoors",
  ];
  const brands = [...new Set(allProducts.map((p) => p.brand || "Unknown"))];

  const handleCategoryChange = (category) => {
    setFilters((prev) => ({
      ...prev,
      categories: category === "All" ? [] : [category],
    }));
  };

  return (
    <aside className="space-y-6 w-full max-w-xs">
      {/* Blue Box Filters */}
      <div className="bg-blue-800 text-white p-4 rounded-xl">
        <h2 className="font-bold text-lg mb-4">Filters</h2>

        {/* Category Radio Buttons */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">Category</h3>
          {categories.map((category) => (
            <div key={category} className="flex items-center gap-2 mb-1">
              <input
                type="radio"
                name="category"
                checked={
                  category === "All"
                    ? filters.categories.length === 0
                    : filters.categories.includes(category)
                }
                onChange={() => handleCategoryChange(category)}
              />
              <label className="text-sm">{category}</label>
            </div>
          ))}
        </div>

        {/* Price Range Slider */}
        <div className="mb-2">
          <h3 className="text-sm font-medium mb-2">Price</h3>
          <input
            type="range"
            min="0"
            max="1000"
            value={filters.price.max}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                price: { ...prev.price, max: parseInt(e.target.value) },
              }))
            }
            className="w-full"
          />
          <div className="flex justify-between text-xs mt-1">
            <span>0</span>
            <span>{filters.price.max}</span>
          </div>
        </div>
      </div>

      {/* White Box Brand Filter */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="text-black font-semibold mb-2">Cacyroy</h3>

        {categories.map((category) => (
          <div key={category} className="flex items-center gap-2 mb-1">
            <input
              type="radio"
              name="brand-category"
              checked={
                category === "All"
                  ? filters.categories.length === 0
                  : filters.categories.includes(category)
              }
              onChange={() => handleCategoryChange(category)}
            />
            <label className="text-sm">{category}</label>
          </div>
        ))}

        <div className="mt-4">
          <h3 className="text-sm font-medium mb-2">Price</h3>
          <input
            type="number"
            value={filters.price.max}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                price: { ...prev.price, max: parseInt(e.target.value) || 0 },
              }))
            }
            className="w-full px-2 py-1 border rounded text-sm"
          />
        </div>
      </div>

      {/* Clear Filters */}
      <button
        onClick={() =>
          setFilters({
            categories: [],
            brand: "",
            price: { min: 0, max: 1000 },
            search: "",
          })
        }
        className="text-sm text-red-500 underline mt-2"
      >
        Clear Filters
      </button>
    </aside>
  );
}
