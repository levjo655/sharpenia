import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { collabs, Collab } from "../data/collabs";
import * as FaIcons from "react-icons/fa";

export default function CollabsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copySuccess, setCopySuccess] = useState<string>("");

  const getShareLink = (collab: Collab) => {
    return collab.link || `${window.location.origin}/collabs/${collab.id}`;
  };

  const getShareUrls = (collab: Collab) => {
    const shareLink = getShareLink(collab);
    const encodedName = encodeURIComponent(collab.name);
    const encodedLink = encodeURIComponent(shareLink);
    const text = encodeURIComponent(`Check out this knife collaboration: ${collab.name}`);
    return {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedLink}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodedLink}&text=${text}`,
      whatsapp: `https://api.whatsapp.com/send?text=${text}%20${encodedLink}`,
      reddit: `https://www.reddit.com/submit?url=${encodedLink}&title=${encodedName}`,
    };
  };

  const copyToClipboard = (collab: Collab) => {
    const text = getShareLink(collab);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopySuccess("Copied!");
        setTimeout(() => setCopySuccess(""), 2000);
      });
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.top = "0";
      textArea.style.left = "0";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
        setCopySuccess("Copied!");
        setTimeout(() => setCopySuccess(""), 2000);
      } catch {
        setCopySuccess("Failed to copy");
      }
      document.body.removeChild(textArea);
    }
  };

  const openModal = (images: string[]) => {
    setModalImages(images);
    setCurrentIndex(0);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImages([]);
    setCurrentIndex(0);
    setCopySuccess("");
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
          {collabs.map((collab) => {
            const shareUrls = getShareUrls(collab);
            return (
              <div
                key={collab.id}
                className="bg-white border border-[#eae7e2] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer"
                onClick={() => openModal(collab.images)}
              >
                <img
                  src={collab.thumbnail || collab.images[0]}
                  alt={collab.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-serif text-lg mb-1">{collab.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{collab.description}</p>
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

                  <div
                    className="flex gap-3 mt-3 items-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="text-sm text-gray-500">Share:</span>
                    <a
                      href={shareUrls.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-700"
                    >
                      <FaIcons.FaFacebookF size={20} />
                    </a>
                    <a
                      href={shareUrls.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-sky-500"
                    >
                      <FaIcons.FaTwitter size={20} />
                    </a>
                    <a
                      href={shareUrls.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-green-600"
                    >
                      <FaIcons.FaWhatsapp size={20} />
                    </a>
                    <a
                      href={shareUrls.reddit}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-orange-600"
                    >
                      <FaIcons.FaRedditAlien size={20} />
                    </a>
                    <button
                      onClick={() => copyToClipboard(collab)}
                      className="text-gray-500 hover:text-gray-900 text-sm underline"
                    >
                      Share Link
                    </button>
                    {copySuccess && (
                      <span className="text-green-600 text-xs ml-1">{copySuccess}</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>

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
