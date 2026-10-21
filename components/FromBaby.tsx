"use client";

import { useState } from "react";
import confetti from "canvas-confetti";

export default function FromBaby() {
  const [opened, setOpened] = useState(false);
  const [hearts, setHearts] = useState<number[]>([]);

  const handleOpen = () => {
    setOpened(true);

    // Confetti lembut: putih, cream, gold pucat
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#FFFFFF", "#FFF8F0", "#F0C987", "#FFE4E1"],
      scalar: 0.8, // partikel lebih kecil (lembut)
    });

    // Hati melayang (3-5 hati)
    const newHearts = Array.from({ length: 5 }, (_, i) => Date.now() + i);
    setHearts(newHearts);
    setTimeout(() => setHearts([]), 2000);
  };

  return (
    <section className="bloom-section flex flex-col items-center">
      <div className="bloom-flower text-xl tracking-[0.5em] mb-8">✿</div>

      <h2 className="font-script text-3xl md:text-4xl text-[#C9A96E] mb-2 text-center">
        Dari Dedek Lila
      </h2>
      <p className="text-center text-[#B0A29A] text-xs tracking-widest uppercase mb-8">
        23 minggu 2 hari · dalam kandungan Ibu
      </p>

      {!opened ? (
        /* ===== KARTU TERTUTUP (amplop kecil) ===== */
        <button
          onClick={handleOpen}
          className="group flex flex-col items-center transition-transform duration-300 hover:scale-105 active:scale-95"
          aria-label="Buka pesan dari Dedek Lila"
        >
          <div className="relative w-40 h-28 rounded-xl bg-[#FFF8F0] border border-[#F0C987]/60 shadow-lg flex items-center justify-center">
            {/* Lipatan kartu (garis diagonal) */}
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-[#FFF0E0] rounded-t-xl" />
              <div className="absolute top-1/2 left-0 w-full h-px bg-[#F0C987]/40" />
            </div>
            <span className="relative z-10 text-3xl">🤍</span>
            {/* Hati kecil melayang saat hover */}
            <span className="absolute -top-2 -right-2 text-[#F0C987] text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              ♡
            </span>
          </div>
          <p className="mt-4 text-sm text-[#B0A29A] tracking-wide">
            klik untuk buka pesan dari Dedek
          </p>
        </button>
      ) : (
        /* ===== KARTU TERBUKA ===== */
        <div className="relative">
          {/* Hati melayang */}
          {hearts.map((id, i) => (
            <span
              key={id}
              className="absolute left-1/2 text-[#F0C987] text-xl pointer-events-none"
              style={{
                animation: `babyHeartFloat 1.8s ease-out ${i * 0.15}s forwards`,
                left: `${50 + (i - 2) * 8}%`,
              }}
            >
              🤍
            </span>
          ))}

          <div
            className="max-w-md w-full bg-[#FFF8F0] border border-[#F0C987]/50 rounded-2xl shadow-sm p-8 md:p-10 relative"
            style={{ animation: "babyCardOpen 0.7s ease-out forwards" }}
          >
            <span className="absolute top-4 right-5 text-[#F0C987] text-lg">
              🤍
            </span>

            <p className="font-script text-2xl text-[#C9A96E] mb-5">Ibu...</p>

            <p className="text-[#6B5E55] leading-relaxed mb-4 text-[15px] md:text-base">
              Dedek belum bisa bicara, tapi dedek sayang Ibu. Terima kasih sudah
              menjaga dedek di dalam perut Ibu, sudah makan dengan baik, sudah
              istirahat dengan cukup, dan sudah selalu mengelus dedek setiap hari.
            </p>

            <p className="text-[#6B5E55] leading-relaxed mb-4 text-[15px] md:text-base">
              dedek di sini sehat doain tetap sehat ya ibu, Ibu. dedek sering mendengar suara Ibu, suara Ayah,
              dan detak jantung Ibu. Itu suara paling tenang yang pernah dedek
              dengar. dedek tidak sabar mau ketemu Ibu.
            </p>

            <p className="text-[#6B5E55] leading-relaxed mb-6 text-[15px] md:text-base">
              Ibu, selamat ulang tahun ya. Doakan dedek terus, ya. dedek juga selalu
              mendoakan Ibu dari sini. 🤍
            </p>

            <p className="font-script text-xl text-[#C9A96E] text-right">
              — Dedek Lila
            </p>
          </div>
        </div>
      )}

      <div className="bloom-flower text-xl tracking-[0.5em] mt-10">✿</div>
    </section>
  );
}