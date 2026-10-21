"use client";

import { useState } from "react";

type Props = {
  onOpen: (withMusic: boolean) => void;
};

export default function LockScreen({ onOpen }: Props) {
  const [opening, setOpening] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleEnvelopeClick = () => {
    setOpening(true);
    setTimeout(() => setShowModal(true), 600);
  };

  const handleChoice = (withMusic: boolean) => {
    setShowModal(false);
    onOpen(withMusic);
  };

  return (
    <>
      {/* ===== LAYAR AMPLOP (bisa fade out) ===== */}
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FDF6F0] transition-opacity duration-700 ${
          opening ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="bloom-flower text-3xl mb-8 animate-pulse">✿ ✿ ✿</div>

        <button
          onClick={handleEnvelopeClick}
          className="group relative w-56 h-40 rounded-lg bg-[#E8B4B8] shadow-xl transition-transform duration-300 hover:scale-105 active:scale-95"
          aria-label="Buka kejutan"
        >
          <div className="absolute inset-x-0 top-0 h-0 border-l-[112px] border-r-[112px] border-t-[80px] border-l-transparent border-r-transparent border-t-[#DCA0A4] rounded-t-lg origin-top transition-transform duration-700 group-hover:rotate-x-180" />
          <span className="absolute inset-0 flex items-center justify-center text-3xl">💌</span>
        </button>

        <p className="font-script text-2xl text-[#C9A96E] mt-8">Untuk cintaku...</p>
        <p className="text-sm text-[#8A7B72] mt-2 tracking-wide">
          klik untuk membuka
        </p>

        <div className="bloom-flower text-3xl mt-8">✿ ✿ ✿</div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#4A3F3A]/30 backdrop-blur-sm animate-[fadeIn_0.4s_ease]">
          <div className="bg-[#FFFBF6] rounded-2xl shadow-2xl p-8 md:p-10 max-w-sm w-[85%] text-center">
            <div className="text-4xl mb-4">🎵</div>
            <h2 className="font-script text-3xl text-[#B5838D] mb-2">
              Mau ditemani musik?
            </h2>
            <p className="text-sm text-[#8A7B72] mb-8">
              Ada lagu spesial untukmu
            </p>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => handleChoice(true)}
                className="w-full py-3 rounded-full bg-[#E8B4B8] text-white font-medium shadow-md hover:bg-[#DCA0A4] transition-colors"
              >
                Ya, putar musik ♪
              </button>
              <button
                onClick={() => handleChoice(false)}
                className="w-full py-3 rounded-full border border-[#E8B4B8]/60 text-[#8A7B72] text-sm hover:bg-[#E8B4B8]/10 transition-colors"
              >
                Tidak, tanpa musik
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}