import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#fdfaf6]/90 backdrop-blur-md border-b border-[#e8e5df] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-3 items-center font-serif">
        
        {/* Left nav */}
        <nav className="flex space-x-6 text-sm font-medium justify-start">
          <a href="#home" className="text-[#2f2e2c] hover:underline underline-offset-4">
            Home
          </a>
          <a href="#collabs" className="text-[#2f2e2c] hover:underline underline-offset-4">
            Collabs
          </a>
          <a href="#gallery" className="text-[#2f2e2c] hover:underline underline-offset-4">
            Gallery
          </a>
        </nav>

        {/* Center title */}
        <div className="flex justify-center">
          <h1 className="text-3xl tracking-tight text-[#1a1a1a] font-serif">
            ÅGANE
          </h1>
        </div>

        {/* Right nav */}
        <nav className="flex space-x-6 text-sm font-medium justify-end">
          <a href="#sharpening" className="text-[#2f2e2c] hover:underline underline-offset-4">
            Sharpening
          </a>
          <a href="#about" className="text-[#2f2e2c] hover:underline underline-offset-4">
            About
          </a>
          <a
            href="#contact"
            className="rounded-full border border-[#2f2e2c] text-[#2f2e2c] px-4 py-1 hover:bg-[#2f2e2c] hover:text-white transition"
          >
            Contact
          </a>
        </nav>

      </div>
    </header>
  );
}
