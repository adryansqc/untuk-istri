"use client";

import { useState, useEffect } from "react";

export default function Closing() {
  const [year, setYear] = useState<string>("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <section className="bloom-section flex flex-col items-center text-center">
      <div className="bloom-flower text-3xl mb-8">✿ ✿ ✿</div>
      <p className="font-script text-3xl md:text-4xl text-[#B5838D] max-w-lg leading-snug">
        Mas Sayang sama adek, dedek lila, hari ini, esok, dan selamanya.
      </p>
      <p className="mt-8 text-[#8A7B72] tracking-wide">
        — Dari, <span className="font-script text-xl">Suami adek</span>
      </p>
      <div className="bloom-flower text-3xl mt-10 mb-4">✿ ✿ ✿</div>
      <p className="text-xs text-[#B0A29A] tracking-widest uppercase">
        Dengan cinta, {year}
      </p>
    </section>
  );
}