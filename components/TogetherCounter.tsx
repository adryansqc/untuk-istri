"use client";

import { useState, useEffect } from "react";

type Props = {
  /** Tanggal mulai bersama, format "YYYY-MM-DD" atau "YYYY-MM-DDTHH:mm:ss" */
  startDate: string;
};

type Duration = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function calcDuration(startDate: string): Duration | null {
  const start = new Date(startDate).getTime();
  const now = Date.now();
  const diff = now - start;

  if (diff < 0) return null; // tanggal di masa depan

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

export default function TogetherCounter({ startDate }: Props) {
  const [duration, setDuration] = useState<Duration | null>(null);

  useEffect(() => {
    // Hitung pertama kali
    setDuration(calcDuration(startDate));

    // Update tiap detik
    const interval = setInterval(() => {
      setDuration(calcDuration(startDate));
    }, 1000);

    // Cleanup saat komponen unmount
    return () => clearInterval(interval);
  }, [startDate]);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section className="bloom-section flex flex-col items-center text-center">
      <div className="bloom-flower text-xl tracking-[0.5em] mb-8">✿</div>

      <p className="text-[#8A7B72] text-lg mb-2">
        Jumlah waktu yang telah kita lalui setelah menikah
      </p>

      <p className="text-[#8A7B72] text-sm mb-8">dan terus bertambah setiap detik 💕</p>

      {/* Grid 4 kotak */}
      <div className="grid grid-cols-4 gap-3 md:gap-5 max-w-lg w-full">
        <TimeBox value={duration?.days ?? 0} label="Hari" big />
        <TimeBox value={duration ? pad(duration.hours) : "00"} label="Jam" />
        <TimeBox value={duration ? pad(duration.minutes) : "00"} label="Menit" />
        <TimeBox value={duration ? pad(duration.seconds) : "00"} label="Detik" />
      </div>

      <div className="bloom-flower text-xl tracking-[0.5em] mt-10">✿</div>
    </section>
  );
}

function TimeBox({
  value,
  label,
  big = false,
}: {
  value: number | string;
  label: string;
  big?: boolean;
}) {
  return (
    <div className="flex flex-col items-center bg-[#FFFBF6] border border-[#E8B4B8]/40 rounded-xl py-3 px-2 shadow-sm">
      <span
        className={`font-script text-[#B5838D] leading-none ${
          big ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"
        }`}
      >
        {value}
      </span>
      <span className="text-[10px] md:text-xs tracking-widest uppercase text-[#8A7B72] mt-1">
        {label}
      </span>
    </div>
  );
}