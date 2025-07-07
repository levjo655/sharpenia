import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#fdfaf6] border-t border-[#e8e5df] text-[#2f2e2c] py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center text-sm font-serif">
        {/* Left Links */}
        <div className="flex justify-start space-x-6">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#collabs" className="hover:underline">Collabs</a>
        </div>

        {/* Center Branding */}
        <div className="flex justify-center text-base tracking-wide">
          Ågane
        </div>

        {/* Right Links */}
        <div className="flex justify-end space-x-6">
          <a href="#gallery" className="hover:underline">Gallery</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>

      {/* Rights reserved text */}
      <div className="mt-4 text-center text-xs text-[#6e6b67] font-serif">
        © {new Date().getFullYear()} Ågane. All rights reserved.
      </div>
    </footer>
  );
}
