"use client";

import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

const HPL = "2027-02-15"; // perkiraan HPL Dedek Lila

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} | null;

function calcCountdown(targetDate: string): Countdown {
  const target = new Date(targetDate).getTime();
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) return null; // sudah lahir / lewat HPL

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

export default function FromBaby() {
  const [opened, setOpened] = useState(false);
  const [hearts, setHearts] = useState<number[]>([]);
  const [countdown, setCountdown] = useState<Countdown>(null);

  // Countdown HPL — update tiap detik (hanya saat kartu terbuka)
  useEffect(() => {
    if (!opened) return;

    setCountdown(calcCountdown(HPL));
    const interval = setInterval(() => {
      setCountdown(calcCountdown(HPL));
    }, 1000);

    return () => clearInterval(interval);
  }, [opened]);

  const handleOpen = () => {
    setOpened(true);

    // Confetti bentuk hati 🤍
    const heart = confetti.shapeFromText({ text: "🤍", scalar: 2 });
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.6 },
      shapes: [heart],
      scalar: 2,
    });

    // Hati melayang (5 hati)
    const newHearts = Array.from({ length: 5 }, (_, i) => Date.now() + i);
    setHearts(newHearts);
    setTimeout(() => setHearts([]), 2000);
  };

  const pad = (n: number) => String(n).padStart(2, "0");

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
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-[#FFF0E0] rounded-t-xl" />
              <div className="absolute top-1/2 left-0 w-full h-px bg-[#F0C987]/40" />
            </div>
            <span className="relative z-10 text-3xl">🤍</span>
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
              Dedek di sini sehat, doain tetap sehat ya Ibu. Dedek sering mendengar
              suara Ibu, suara Ayah, dan detak jantung Ibu. Itu suara paling tenang
              yang pernah dedek dengar. Dedek tidak sabar mau ketemu Ibu.
            </p>

            {/* ===== COUNTDOWN HPL ===== */}
            <div className="my-6 rounded-xl bg-[#FFF0E0] border border-[#F0C987]/40 py-4 px-3">
              <p className="text-center text-[#B0A29A] text-xs tracking-widest uppercase mb-3">
                Perkiraan Dedek ketemu ibu
              </p>

              {countdown ? (
                <>
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div>
                      <p className="font-script text-2xl md:text-3xl text-[#C9A96E] leading-none">
                        {countdown.days}
                      </p>
                      <p className="text-[9px] md:text-[10px] tracking-widest uppercase text-[#B0A29A] mt-1">
                        Hari
                      </p>
                    </div>
                    <div>
                      <p className="font-script text-2xl md:text-3xl text-[#C9A96E] leading-none">
                        {pad(countdown.hours)}
                      </p>
                      <p className="text-[9px] md:text-[10px] tracking-widest uppercase text-[#B0A29A] mt-1">
                        Jam
                      </p>
                    </div>
                    <div>
                      <p className="font-script text-2xl md:text-3xl text-[#C9A96E] leading-none">
                        {pad(countdown.minutes)}
                      </p>
                      <p className="text-[9px] md:text-[10px] tracking-widest uppercase text-[#B0A29A] mt-1">
                        Menit
                      </p>
                    </div>
                    <div>
                      <p className="font-script text-2xl md:text-3xl text-[#C9A96E] leading-none">
                        {pad(countdown.seconds)}
                      </p>
                      <p className="text-[9px] md:text-[10px] tracking-widest uppercase text-[#B0A29A] mt-1">
                        Detik
                      </p>
                    </div>
                  </div>
                  <p className="text-center text-[#B0A29A] text-[11px] mt-3">
                    15 Februari 2027 ·  🤍
                  </p>
                </>
              ) : (
                <p className="text-center font-script text-2xl text-[#C9A96E]">
                  Dedek sudah lahir 🤍
                </p>
              )}
            </div>

            <p className="text-[#6B5E55] leading-relaxed mb-6 text-[15px] md:text-base">
              Ibu, selamat ulang tahun ya. Doakan dedek terus, ya. Dedek juga selalu
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