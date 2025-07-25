import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#fdfaf6]/90 backdrop-blur-md border-b border-[#e8e5df] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-3 items-center font-serif">

    
        <nav className="flex space-x-6 text-sm font-medium justify-start">
          <Link to="/" className="text-[#2f2e2c] hover:underline underline-offset-4">
            Home
          </Link>
          <Link to="/collabs" className="text-[#2f2e2c] hover:underline underline-offset-4">
            Collabs
          </Link>
          <Link to="/gallery" className="text-[#2f2e2c] hover:underline underline-offset-4">
            Gallery
          </Link>
        </nav>

       
        <div className="flex justify-center">
          <h1 className="text-3xl tracking-tight text-[#1a1a1a] font-serif">
            ÅGANE
          </h1>
        </div>

     
        <nav className="flex space-x-6 text-sm font-medium justify-end">
          <Link to="/sharpening" className="text-[#2f2e2c] hover:underline underline-offset-4">
            Sharpening
          </Link>
          <Link to="/about" className="text-[#2f2e2c] hover:underline underline-offset-4">
            About
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-[#2f2e2c] text-[#2f2e2c] px-4 py-1 hover:bg-[#2f2e2c] hover:text-white transition"
          >
            Contact
          </Link>
        </nav>

      </div>
    </header>
  );
}
