import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-neutral-50/80 backdrop-blur-md border-b border-neutral-200 shadow-sm dark:bg-zinc-900/70 dark:border-zinc-700">
      <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-3 items-center">
        
        
        <nav className="flex space-x-6 text-sm font-medium justify-start">
          <a href="#home" className="text-neutral-800 dark:text-neutral-100 hover:underline underline-offset-4">
            Home
          </a>
          <a href="#collabs" className="text-neutral-800 dark:text-neutral-100 hover:underline underline-offset-4">
            Collabs
          </a>
          <a href="#gallery" className="text-neutral-800 dark:text-neutral-100 hover:underline underline-offset-4">
            Gallery
          </a>
        </nav>

        
        <div className="flex justify-center">
          <h1 className="text-2xl font-serif tracking-tight text-neutral-900 dark:text-neutral-100">
            Ågane
          </h1>
        </div>

      
        <nav className="flex space-x-6 text-sm font-medium justify-end">
          <a href="#sharpening" className="text-neutral-800 dark:text-neutral-100 hover:underline underline-offset-4">
            Sharpening
          </a>
          <a href="#about" className="text-neutral-800 dark:text-neutral-100 hover:underline underline-offset-4">
            About
          </a>
          <a href="#contact" className="rounded-full px-4 py-1 border border-neutral-800 text-neutral-900 dark:border-neutral-100 dark:text-neutral-100 hover:bg-neutral-800 hover:text-white dark:hover:bg-neutral-100 dark:hover:text-zinc-900 transition">
            Contact
          </a>
        </nav>

      </div>
    </header>
  );
}
