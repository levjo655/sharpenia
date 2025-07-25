import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { collabs } from "../data/collabs";

export default function CollabsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (images: string[]) => {
    setModalImages(images);
    setCurrentIndex(0);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImages([]);
    setCurrentIndex(0);
  };

  return (
    <div className="min-h-dvh flex flex-col bg-[#fdfaf6] text-[#2f2e2c]">
      <Header />

      <main className="flex-grow">
        <section className="text-center py-16 px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl font-serif mb-4">All Collaborations</h1>
          <p className="text-lg text-gray-600">
            A collection of blades sharpened at Ågane in partnership with some
            of the finest makers in the world.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 pb-16">
          {collabs.map((collab) => (
            <div
              key={collab.id}
              className="bg-white border border-[#eae7e2] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer"
              onClick={() => openModal(collab.images)}
            >
              <img
                src={collab.images[0]}
                alt={collab.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-serif text-lg mb-1">{collab.name}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {collab.description}
                </p>
                {collab.instagram && collab.link && (
                  <a
                    href={collab.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {collab.instagram}
                  </a>
                )}
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="text-sm text-gray-500 float-right hover:text-black mb-2"
              onClick={closeModal}
            >
              ✕ Close
            </button>

            {modalImages.length > 0 && (
              <div className="relative">
                <img
                  src={modalImages[currentIndex]}
                  alt="Zoomed knife view"
                  className="w-full h-auto rounded"
                />

                {currentIndex > 0 && (
                  <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 px-3 py-1 rounded-r hover:bg-opacity-100"
                    onClick={() => setCurrentIndex((prev) => prev - 1)}
                  >
                    ◀
                  </button>
                )}

                {currentIndex < modalImages.length - 1 && (
                  <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 px-3 py-1 rounded-l hover:bg-opacity-100"
                    onClick={() => setCurrentIndex((prev) => prev + 1)}
                  >
                    ▶
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
