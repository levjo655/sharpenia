import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { collabs } from "../data/collabs";
import { FaFacebookF, FaTwitter, FaWhatsapp, FaReddit } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
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

  const copyToClipboard = (text: string) => {
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      alert("Link copied to clipboard!");
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight" && currentIndex < modalImages.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      }
      if (e.key === "ArrowLeft" && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      }
    };

    if (modalOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalOpen, currentIndex, modalImages.length]);

  const handleShare = (collabName: string, link: string) => {
    const encoded = encodeURIComponent(`${collabName} – ${link}`);
    return {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${link}`,
      twitter: `https://twitter.com/intent/tweet?url=${link}&text=Check out this knife: ${collabName}`,
      whatsapp: `https://api.whatsapp.com/send?text=${encoded}`,
      reddit: `https://www.reddit.com/submit?url=${link}&title=${collabName}`,
    };
  };

  return (
    <div className="min-h-dvh w-full flex flex-col bg-[#fdfaf6] text-[#2f2e2c] font-serif">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center py-20">
        <h2 className="text-4xl font-serif mb-4">Welcome to Ågane</h2>
        <p className="text-lg max-w-xl text-center">
          Free hand Sharpening with japanese natural stones!
        </p>
        <a
          href="#gallery"
          className="inline-block border border-[#2f2e2c] px-6 py-2 text-sm tracking-wide hover:bg-[#2f2e2c] hover:text-white transition mt-4"
        >
          View Gallery
        </a>

        {/* Intro Section */}
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif mb-8 text-center">Hello!</h2>

          <div className="flex flex-col md:flex-row gap-10 items-stretch">
            {/* IMAGE */}
            <div className="flex-shrink-0 w-full md:w-1/3">
              <img
                src="/images/agane_main_pic.jpg"
                alt="Ågane sharpening"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>

            {/* TEXT */}
            <div className="w-full md:w-1/2 text-base leading-relaxed text-justify space-y-4 flex flex-col justify-center">
              <p>
                My name is Levjo Cibuku, and I’m the sharpener behind Ågane.
                What began as an innocent chef knife purchase quickly turned
                into a full-blown obsession.
              </p>
              <p>
                I still remember the first time I used that Japanese knife — I
                was mesmerized. The precision, the feel, the edge… and just like
                that, I realized how far off my old knives had been.
              </p>
              <p>
                Of course, a sharp knife doesn’t stay sharp forever — and that’s
                when I discovered whetstones. I started practicing on cheap
                knives, offering free sharpening to friends, and slowly honing
                my craft.
              </p>
              <p>
                Years later, after relentless trial, passion, and dedication,
                Ågane was born.
              </p>
              <p>
                Today, Ågane is all about combining traditional sharpening
                techniques with meaningful collaborations. I work closely with
                world-renowned blacksmiths to bring out the true soul of each
                blade — making home cooks, chefs, and knife lovers as happy as I
                was with that very first cut.
              </p>
            </div>
          </div>
        </section>

        {/* Collaborations Section */}
        <section className="py-16 px-6" id="gallery">
          <h2 className="text-2xl text-center mb-8 font-serif">
            Featured Collaborations
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {collabs.slice(0, 3).map((collab) => {
              const shareUrls = handleShare(collab.name, collab.link || "");

              return (
                <div
                  key={collab.id}
                  className="border border-[#e8e5df] rounded-lg overflow-hidden shadow-sm bg-white cursor-pointer relative"
                  onClick={() => openModal(collab.images)}
                >
                  <img
                    src={collab.images[0]}
                    alt={`Knife from ${collab.name}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-serif mb-2">{collab.name}</h3>
                    <p className="text-sm mb-2">{collab.description}</p>
                    <a
                      href={collab.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-sm text-blue-600 hover:underline"
                    >
                      {collab.instagram}
                    </a>

                    {/* Share Links with Icons */}
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
                        <FaFacebookF size={20} />
                      </a>
                      <a
                        href={shareUrls.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-sky-500"
                      >
                        <FaTwitter size={20} />
                      </a>
                      <a
                        href={shareUrls.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-green-600"
                      >
                        <FaWhatsapp size={20} />
                      </a>
                      <a
                        href={shareUrls.reddit}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-orange-600"
                      >
                        <FaReddit size={20} />
                      </a>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          copyToClipboard(collab.link || "");
                        }}
                        className="text-sm text-gray-500 hover:text-gray-900 underline"
                        aria-label="Copy collaboration link"
                      >
                        Share Link
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 px-6 bg-[#f7f4ef]">
          <h2 className="text-2xl text-center mb-10 font-serif">
            Sharpening Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Edge Sharpening */}
            <div className="bg-white border border-[#e8e5df] rounded-lg overflow-hidden shadow-sm">
              <img
                src="images/edge_sharpening.jpeg"
                alt="Edge sharpening example"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-serif mb-2">Edge Sharpening</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Precision hand sharpening on Japanese whetstones for a
                  razor-sharp, long-lasting edge.
                </p>
                <Link
                  to="/sharpening"
                  className="text-sm font-semibold text-blue-600 hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Bevel Polishing */}
            <div className="bg-white border border-[#e8e5df] rounded-lg overflow-hidden shadow-sm">
              <img
                src="images/bevel_sharpening.jpg"
                alt="Bevel polishing example"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-serif mb-2">Bevel Polishing</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Complete stone-shaped bevel geometry for performance, beauty,
                  and easy upkeep.
                </p>
                <Link
                  to="/sharpening"
                  className="text-sm font-semibold text-blue-600 hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Full Stone Polishing */}
            <div className="bg-white border border-[#e8e5df] rounded-lg overflow-hidden shadow-sm">
              <img
                src="images/full_stone_sharpening.jpg"
                alt="Full stone polish example"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-serif mb-2">
                  Full Stone Polishing
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  The ultimate finish — full blade restoration with the finest
                  Japanese natural stones.
                </p>
                <Link
                  to="/sharpening.html"
                  className="text-sm font-semibold text-blue-600 hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-6 text-center" id="contact">
          <h2 className="text-2xl font-serif mb-6">Get in Touch</h2>
          <p className="text-lg mb-2">
            📧 Email:{" "}
            <a href="mailto:info@agane.se" className="underline">
              info@agane.se
            </a>
          </p>
          <p className="text-lg">
            📞 Phone:{" "}
            <a href="tel:+46708485534" className="underline">
              +46 70 848 5534
            </a>
          </p>
          <p className="text-lg">
            📷 Instagram:{" "}
            <a
              href="https://www.instagram.com/agane.knives?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-pink-600 hover:text-pink-800"
            >
              @agane.knives
            </a>
          </p>
        </section>
      </main>

      {/* Modal with Carousel */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Absolute Close Button */}
            <button
              className="absolute top-2 right-2 text-lg text-gray-600 hover:text-black z-10"
              onClick={closeModal}
            >
              ✕
            </button>

            {modalImages.length > 0 && (
              <div className="relative flex items-center justify-center">
                <img
                  src={modalImages[currentIndex]}
                  alt="Zoomed knife view"
                  className="max-h-[80vh] max-w-full object-contain mx-auto rounded"
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
