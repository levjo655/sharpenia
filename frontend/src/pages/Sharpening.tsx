import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Sharpening() {
  return (
    <div className="min-h-dvh flex flex-col bg-[#fdfaf6] text-[#2f2e2c]">
      <Header />

      <main className="flex-grow px-6 py-16 max-w-4xl mx-auto font-serif">
        <h1 className="text-4xl mb-4 text-center">Sharpening Services</h1>
        <p className="text-lg mb-8 text-center text-gray-600">
          All knives are sharpened by hand on japanese  synthetic whetstones and finished on japanse natural stones for an exeptional long lasting edge.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl mb-4">Sharpening Pricing</h2>
          <ul className="space-y-2 text-gray-800">
            <li>
              • <strong>10 SEK - 1 € / cm /</strong> — Standard hand sharpening
            </li>
            <li className="text-sm text-gray-600">
              (Measured from heel to tip of edge)
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl mb-4">Bevel Polishing</h2>
          <ul className="space-y-2 text-gray-800">
            <li>
              • <strong>Petty knives (up to 18 cm):</strong> 1750 SEK / 175 €
            </li>
            <li>
              • <strong>Chef knives (19–26 cm):</strong> 2250 SEK / 225 €
            </li>
            <li>
              • <strong>Slicers (27–36 cm):</strong> 2500 SEK / 250 €
            </li>
          </ul>
          <p className="text-sm mt-2 text-gray-600">
            Bevel polishing means a complete stone shaped bevel geometry with the full range of my whetstones. Apart from looking extremely pretty stone shaped geometry offers a keen edge and easy maintanance over the years. Knifes are finished on the finest japanese natural stones. 
          </p>
        </section>

        <section>
          <h2 className="text-2xl mb-4"> * Important * </h2>
          <ul className="space-y-2 text-gray-800">
            <li>• for bevel polishing or full stone polishing the price will be set upon close evaluation as it's hard to fully inspect the knife from the distance.</li>
            <li>• the costumer pays for the shiping back and forth.</li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
