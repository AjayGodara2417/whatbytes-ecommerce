export default function Sidebar() {
  return (
    <div className="space-y-8 text-sm">
      {/* Categories */}
      <div>
        <h3 className="font-semibold mb-2">Categories</h3>
        <ul className="space-y-1">
          {["Electronics", "Clothing", "Home & Kitchen", "Books", "Sports & Outdoors"].map((cat) => (
            <li key={cat}>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-black" />
                {cat}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold mb-2">Price Range</h3>
        <label className="block text-gray-500 mb-1">Price</label>
        <input type="range" min="20" max="200" className="w-full" />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>$20</span>
          <span>$200</span>
        </div>
      </div>

      {/* Brand Filter */}
      <div>
        <h3 className="font-semibold mb-2">Brand (Optional)</h3>
        <select className="w-full border px-2 py-1 rounded text-sm">
          <option>Select Brand</option>
        </select>
      </div>
    </div>
  );
}
