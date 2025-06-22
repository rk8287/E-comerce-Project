import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { MdShoppingCart } from "react-icons/md";

const Header = ({itemCount = 2}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0F172A] shadow-lg shadow-green-500/50 fixed top-0 left-0 w-full z-50">

      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Title */}
        <Link 
          to="/" 
          className="text-2xl sm:text-3xl font-extrabold text-green-400 tracking-tight">
          🛒 ShoppyGlobe
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-7 text-base font-semibold">
          <Link 
            to="/" 
            className="text-gray-300 hover:text-[#88BDF2] transition">
            Home
          </Link>
           <Link 
      to="/cart"
      className="relative text-gray-300 hover:text-[#88BDF2] transition duration-300 ease-in-out"
    >
      <MdShoppingCart size={28} />

      {/* Badge for cart item count */}
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full shadow-sm">
          {itemCount}
        </span>
      )}
    </Link>
          <Link 
            to="/login" 
            className="bg-white text-[#1E1E1E] hover:text-[#88BDF2] transition py-1 px-4 rounded-md">
            Login
          </Link>
        </div>

        {/* Hamburger icon for small screens */}
        <button
          aria-label="Toggle Menu"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none">
          {isOpen ? <X className="w-6 h-6 text-[#88BDF2]" /> : <Menu className="w-6 h-6 text-[#88BDF2]" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-base font-semibold">
          <Link 
            to="/" 
            className="block text-gray-300 hover:text-[#88BDF2]" 
            onClick={() => setIsOpen(false)}>Home</Link>
          <Link 
            to="/books/All" 
            className="block text-gray-300 hover:text-[#88BDF2]" 
            onClick={() => setIsOpen(false)}>Cart</Link>
          <Link 
            to="/add" 
            className="block text-gray-300 hover:text-[#88BDF2]" 
            onClick={() => setIsOpen(false)}>Login</Link>
        </div>
      )}

    </nav>
  )
}

export default Header;
