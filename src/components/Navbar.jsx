import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // For icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 w-full shadow-lg">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-lg">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/projects" className="hover:text-gray-400">Projects</Link>
          <Link to="/about" className="hover:text-gray-400">About</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col items-center bg-gray-800 p-4 space-y-4 rounded-lg w-full">
          <Link to="/" className="w-full text-center py-2 hover:bg-gray-700 rounded">Home</Link>
          <Link to="/projects" className="w-full text-center py-2 hover:bg-gray-700 rounded">Projects</Link>
          <Link to="/about" className="w-full text-center py-2 hover:bg-gray-700 rounded">About</Link>
          <Link to="/contact" className="w-full text-center py-2 hover:bg-gray-700 rounded">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
