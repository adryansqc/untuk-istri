"use client";

import { useState, useEffect } from "react";

const photos = Array.from({ length: 34 }, (_, i) => ({
  src: `/photos/${i + 1}.jpeg`,
  caption: `Momen ${i + 1}`,
}));

export default function Gallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Kunci scroll saat modal/lightbox terbuka
  useEffect(() => {
    if (modalOpen || lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen, lightboxIndex]);

  // Navigasi keyboard di lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft")
        setLightboxIndex((lightboxIndex - 1 + photos.length) % photos.length);
      if (e.key === "ArrowRight")
        setLightboxIndex((lightboxIndex + 1) % photos.length);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex]);

  // 6 foto pertama untuk mosaic
  const mosaicPhotos = photos.slice(0, 6);

  return (
    <section className="bloom-section">
      <h2 className="font-script text-4xl md:text-5xl text-center text-[#B5838D] mb-4">
        Kenangan
      </h2>
      <p className="text-center text-[#8A7B72] text-sm mb-12">
        34 momen yang kita lalui bersama
      </p>

      {/* ===== MOSAIC 6 FOTO ===== */}
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[140px] md:auto-rows-[170px]">
        {mosaicPhotos.map((photo, i) => {
          // Pola:
          // i === 0 -> besar (2x2)
          // i === 5 -> lebar penuh (2 kolom di HP, 3 kolom di desktop)
          // lainnya -> kecil (1x1)
          let spanClass = "col-span-1 row-span-1";
          if (i === 0) spanClass = "col-span-2 row-span-2";
          if (i === 5) spanClass = "col-span-2 md:col-span-3";

          return (
            <button
              key={photo.src}
              onClick={() => {
                setModalOpen(true);
                setLightboxIndex(i);
              }}
              className={`group relative bg-white p-2 pb-6 shadow-md rounded-sm transition-transform duration-300 hover:scale-105 hover:z-10 overflow-hidden ${spanClass} ${
                i % 2 === 0 ? "-rotate-1" : "rotate-1"
              }`}
              aria-label={`Buka ${photo.caption}`}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <p className="font-script text-xs md:text-sm text-center text-[#8A7B72] mt-1 truncate">
                {photo.caption}
              </p>
            </button>
          );
        })}
      </div>

      {/* Tombol lihat semua */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => setModalOpen(true)}
          className="px-8 py-3 rounded-full bg-[#E8B4B8] text-white font-medium shadow-md hover:bg-[#DCA0A4] transition-colors"
        >
          Lihat semua 34 kenangan →
        </button>
      </div>

      {/* ===== MODAL GRID SEMUA FOTO ===== */}
      {modalOpen && lightboxIndex === null && (
        <div className="fixed inset-0 z-[70] bg-[#FDF6F0]/95 backdrop-blur-sm overflow-y-auto animate-[fadeIn_0.3s_ease]">
          <div className="max-w-5xl mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-6 sticky top-0 bg-[#FDF6F0]/90 backdrop-blur-sm py-2 z-10">
              <h3 className="font-script text-3xl text-[#B5838D]">
                Semua Kenangan
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="text-[#8A7B72] text-3xl w-10 h-10 rounded-full hover:bg-[#E8B4B8]/20 flex items-center justify-center"
                aria-label="Tutup"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {photos.map((photo, i) => (
                <button
                  key={photo.src}
                  onClick={() => setLightboxIndex(i)}
                  className={`group bg-white p-2 pb-5 shadow-md rounded-sm transition-transform duration-300 hover:scale-105 ${
                    i % 4 === 0
                      ? "-rotate-2"
                      : i % 4 === 1
                      ? "rotate-1"
                      : i % 4 === 2
                      ? "-rotate-1"
                      : "rotate-2"
                  }`}
                  aria-label={`Buka ${photo.caption}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    loading="lazy"
                    className="w-full aspect-square object-cover"
                  />
                  <p className="font-script text-xs md:text-sm text-center text-[#8A7B72] mt-2 truncate">
                    {photo.caption}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ===== LIGHTBOX FOTO BESAR ===== */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[80] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease]"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 text-white text-3xl w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
            aria-label="Tutup"
          >
            ×
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                (lightboxIndex - 1 + photos.length) % photos.length
              );
            }}
            className="absolute left-2 md:left-6 text-white text-4xl w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
            aria-label="Sebelumnya"
          >
            ‹
          </button>

          <img
            src={photos[lightboxIndex].src}
            alt={photos[lightboxIndex].caption}
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % photos.length);
            }}
            className="absolute right-2 md:right-6 text-white text-4xl w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
            aria-label="Berikutnya"
          >
            ›
          </button>

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-script text-xl text-white text-center px-4">
            {photos[lightboxIndex].caption}
          </p>
        </div>
      )}
    </section>
  );
}