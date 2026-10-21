"use client";

import { useEffect, useState } from "react";

type Petal = {
  left: number;      // posisi horizontal (%)
  delay: number;     // delay mulai (detik)
  duration: number;  // durasi jatuh (detik)
  size: number;      // ukuran font (px)
  opacity: number;   // transparansi
};

export default function Petals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const count = 12;
    const generated = Array.from({ length: count }, () => ({
      left: Math.random() * 100,
      delay: Math.random() * 12,
      duration: 10 + Math.random() * 10,
      size: 18 + Math.random() * 18,   // ← 18–36 px (lebih besar)
      opacity: 0.3 + Math.random() * 0.35, // ← sedikit lebih lembut
    }));
    setPetals(generated);
  }, []);

  if (petals.length === 0) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[5] overflow-hidden"
      aria-hidden="true"
    >
      {petals.map((p, i) => (
        <span
          key={i}
          className="petal bloom-flower"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            opacity: p.opacity,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        >
          ✿
        </span>
      ))}
    </div>
  );
}