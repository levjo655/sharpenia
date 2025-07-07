import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";



export default function Home() {
  return (
    <div className="min-h-dvh w-full flex flex-col bg-[#fdfaf6] text-[#2f2e2c]">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center py-20">
        <h2 className="text-4xl font-serif mb-4">Welcome to Ågane</h2>
        <p className="text-lg max-w-xl text-center">
          Precision sharpening on Japanese natural stones. Handled with care, shaped with tradition.
        </p>
        <a
            href="#gallery"
            className="inline-block border border-[#2f2e2c] px-6 py-2 text-sm tracking-wide hover:bg-[#2f2e2c] hover:text-white transition"
          >
            View Gallery
          </a>

      
        {/* Collaborations Section */}
        <section className="py-16 px-6">
          <h2 className="text-2xl text-center mb-8 font-serif">
            Featured Collaborations
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Example Card */}
            <div className="border border-[#e8e5df] rounded-lg overflow-hidden shadow-sm bg-white">
              <img src="/images/smith1.jpg" alt="Knife from X" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-serif mb-2">Smith Name</h3>
                <p className="text-sm">Hand-forged in Kyoto. Polished at Ågane.</p>
              </div>
            </div>
          </div>
          
        </section>
        

        {/* Contact Section */}
        <section id="contact" className="bg-white py-20 px-6 text-center">
          <h2 className="text-2xl font-serif mb-4">Work With Ågane</h2>
          <p className="mb-6">Want your blade finished on natural stones? Let’s talk.</p>
          <a
            href="mailto:your@email.com"
            className="inline-block border border-[#2f2e2c] px-6 py-2 text-sm hover:bg-[#2f2e2c] hover:text-white transition"
          >
            Contact Me
          </a>
        </section>
      </main>

      
      <Footer />
    </div>
  );
}
