"use client";

import { marqueeItems } from "@/data";

export default function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <div
      className="border-b-4 border-black overflow-hidden"
      style={{ background: "#fff8e7", padding: "20px 0" }}
    >
      <div
        className="overflow-hidden border-y-4 border-black"
        style={{ background: "#FFE135", transform: "rotate(-1.5deg)", margin: "0 -20px" }}
      >
        <div className="animate-marquee flex w-max">
          {doubled.map((item, i) => (
            <span
              key={i}
              className="px-7 py-2 whitespace-nowrap text-black"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 20, letterSpacing: "0.05em" }}
            >
              {item}
              <span className="mx-2" style={{ color: "#e63946" }}>★</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
