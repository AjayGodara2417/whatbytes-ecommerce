import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#003366] text-white px-6 py-8 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Filters Column */}
        <div>
          <h4 className="font-semibold text-lg mb-2">Filters</h4>
          <ul className="text-sm space-y-1">
            <li><a href="#">All</a></li>
            <li><a href="#">Electronics</a></li>
          </ul>
          <p className="mt-4 text-xs text-gray-300">© 2024 American</p>
        </div>

        {/* About Us Column */}
        <div>
          <h4 className="font-semibold text-lg mb-2">About Us</h4>
          <ul className="text-sm space-y-1">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Follow Us Column */}
        <div>
          <h4 className="font-semibold text-lg mb-2">Follow Us</h4>
          <div className="flex items-center gap-4 mt-2">
            <a href="#"><Facebook size={18} /></a>
            <a href="#"><Twitter size={18} /></a>
            <a href="#"><Instagram size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
