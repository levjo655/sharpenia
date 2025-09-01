import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const regex =
        /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      setIsMobile(regex.test(navigator.userAgent));
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <footer className="bg-[#fdfaf6] border-t border-[#e8e5df] text-[#2f2e2c] py-8 px-6">
      <div className="max-w-7xl mx-auto font-serif">
        {isMobile ? (
          <>
            {/* Mobile Layout */}
            <div className="flex flex-col items-center gap-2 mb-4 text-sm">
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/collabs" className="hover:underline">Collabs</Link>
              {/* <Link to="/gallery" className="hover:underline">Gallery</Link> */}
              <Link to="/sharpening" className="hover:underline">Sharpening</Link>
              {/* <Link to="/about" className="hover:underline">About</Link> */}
              <Link
                to="/contact"
                className="rounded-full border border-[#2f2e2c] px-4 py-1 hover:bg-[#2f2e2c] hover:text-white transition"
              >
                Contact
              </Link>
            </div>
            <div className="text-center text-xs text-[#6e6b67]">
              © {new Date().getFullYear()} Ågane. All rights reserved.
            </div>
          </>
        ) : (
          <>
            {/* Desktop Layout */}
            <div className="grid grid-cols-3 items-center text-sm">
              <div className="flex justify-start space-x-6">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/collabs" className="hover:underline">Collabs</Link>
              </div>

              <div className="flex justify-center text-base tracking-wide">
                Ågane
              </div>

              <div className="flex justify-end space-x-6">
                {/* <Link to="/gallery" className="hover:underline">Gallery</Link> */}
                <Link to="/sharpening" className="hover:underline">Sharpening</Link>
                {/* <Link to="/about" className="hover:underline">About</Link> */}
                <Link
                  to="/contact"
                  className="rounded-full border border-[#2f2e2c] px-4 py-1 hover:bg-[#2f2e2c] hover:text-white transition"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="mt-4 text-center text-xs text-[#6e6b67]">
              © {new Date().getFullYear()} Ågane. All rights reserved.
            </div>
          </>
        )}
      </div>
    </footer>
  );
}
