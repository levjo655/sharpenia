import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (modalOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalOpen]);

  return (
    <div className="min-h-dvh w-full flex flex-col bg-[#fdfaf6] text-[#2f2e2c]">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center py-20">
        <h2 className="text-4xl font-serif mb-4">Welcome to Ågane</h2>
        <p className="text-lg max-w-xl text-center">
          High end Sharpening with japanese natural stones!
        </p>
        <a
          href="#gallery"
          className="inline-block border border-[#2f2e2c] px-6 py-2 text-sm tracking-wide hover:bg-[#2f2e2c] hover:text-white transition"
        >
          View Gallery
        </a>
        {/* Intro Section */}
        <section className="py-16 px-6 text-center max-w-3xl mx-auto">
  <h2 className="text-3xl font-serif mb-8">Hello!</h2>
  <div className="text-lg leading-relaxed text-justify space-y-6">
    <p>
      My name is Levjo Cbuku, and I’m the sharpener behind Ågane. What began as an innocent chef knife purchase quickly turned into a full-blown obsession.
    </p>

    <p>
      I still remember the first time I used that Japanese knife — I was mesmerized. The precision, the feel, the edge… and just like that, I realized how far off my old knives had been.
    </p>

    <p>
      Of course, a sharp knife doesn’t stay sharp forever — and that’s when I discovered whetstones. I started practicing on cheap knives, offering free sharpening to friends, and slowly honing my craft.
    </p>

    <p>
      Years later, after relentless trial, passion, and dedication, Ågane was born.
    </p>

    <p>
      Today, Ågane is all about combining traditional sharpening techniques with meaningful collaborations. I work closely with world-renowned blacksmiths to bring out the true soul of each blade — making home cooks, chefs, and knife lovers as happy as I was with that very first cut.
    </p>
  </div>
</section>


        {/* Collaborations Section */}
        <section className="py-16 px-6" id="gallery">
          <h2 className="text-2xl text-center mb-8 font-serif">
            Featured Collaborations
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div
              className="border border-[#e8e5df] rounded-lg overflow-hidden shadow-sm bg-white cursor-pointer"
              onClick={() => openModal("/images/covre_suji.jpeg")}
            >
              <img
                src="/images/covre_suji.jpeg"
                alt="Knife from Eduardo Covre"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-serif mb-2">
                  Eduardo Covre x Ågane
                </h3>
                <p className="text-sm mb-1">
                  Hand-forged in Brazil. Polished at Ågane.
                </p>
                <a
                  href="https://www.instagram.com/covre_knives"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline"
                >
                  @covre_knives
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="border border-[#e8e5df] rounded-lg overflow-hidden shadow-sm bg-white cursor-pointer"
              onClick={() => openModal("/images/Ludvig_gyuto.jpeg")}
            >
              <img
                src="/images/Ludvig_gyuto.jpeg"
                alt="Knife from Ludvig Germain Auclair"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-serif mb-2">
                  Ludvig Germain Auclair x Ågane
                </h3>
                <p className="text-sm mb-1">
                  Suminagashi goodness on full stone polish.
                </p>
                <a
                  href="https://www.instagram.com/ludvigcoutelier"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline"
                >
                  @ludvigknives
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="border border-[#e8e5df] rounded-lg overflow-hidden shadow-sm bg-white cursor-pointer"
              onClick={() => openModal("/images/Krichbaum.jpeg")}
            >
              <img
                src="/images/Krichbaum.jpeg"
                alt="Knife from Simon Krichbaum"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-serif mb-2">
                  Simon Krichbaum x Ågane
                </h3>
                <p className="text-sm mb-1">Austria's finest!</p>
                <a
                  href="https://www.instagram.com/krichbaumknives"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline"
                >
                  @simonkrichbaum
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="text-sm text-gray-500 float-right hover:text-black mb-2"
              onClick={closeModal}
            >
              ✕ Close
            </button>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Zoomed knife view"
                className="w-full h-auto rounded"
              />
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
