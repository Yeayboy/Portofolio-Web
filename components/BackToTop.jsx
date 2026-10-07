"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 border-4 border-black flex items-center justify-center text-xl font-bold transition-all hover:-translate-x-0.5 hover:-translate-y-0.5"
      style={{
        background: "#FFE135",
        boxShadow: "4px 4px 0 #0a0a0a",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "all" : "none",
        transform: visible ? "none" : "translateY(16px)",
        transition: "opacity 0.3s, transform 0.3s, box-shadow 0.1s",
      }}
    >
      ↑
    </button>
  );
}
