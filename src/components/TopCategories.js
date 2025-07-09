'use client'

import Image from "next/image";

const categories = [
  { name: "Smartphones", desc: "Latest models, advanced features", img: "/images/smartphone.jpg" },
  { name: "Fashion Accessories", desc: "Stylish, trendy accessories", img: "/images/fashion.jpg" },
  { name: "Home Appliances", desc: "Efficient, energy-saving appliances", img: "/images/home.jpg" },
  { name: "Literature", desc: "Classic and contemporary works", img: "/images/books.jpg" },
  { name: "Fitness Equipment", desc: "High-quality, durable equipment", img: "/images/fitness.jpg" },
];

export default function TopCategories() {
  return (
    <div className="mt-10">
      <h2 className="text-lg font-semibold mb-4">Top Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden border">
            <Image src={cat.img} alt={cat.name} className="w-full h-40 object-cover"
          width={100}
          height={100} />
            <div className="p-4">
              <h3 className="font-semibold">{cat.name}</h3>
              <p className="text-sm text-gray-500">{cat.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
