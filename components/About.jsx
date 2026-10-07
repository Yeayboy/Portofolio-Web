"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo } from "@/data";

const facts = [
  { icon: "🎓", label: "Education", value: "UBSI Jakarta" },
  { icon: "⭐", label: "GPA", value: "3.55 / 4.00" },
  { icon: "📍", label: "Location", value: "Kelapa Gading, Jakarta" },
  { icon: "🏆", label: "Certification", value: "Sistem Basis Data 2025" },
];

export default function About() {
  return (
    <section id="about" className="border-b-4 border-black" style={{ background: "#fff", padding: "80px 0" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Photo column */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Top sticker */}
            <div
              className="absolute -top-4 -left-4 z-10 border-4 border-black px-4 py-2 text-sm font-bold text-white"
              style={{
                background: "#e63946", fontFamily: "'Bebas Neue', sans-serif",
                transform: "rotate(-5deg)", boxShadow: "4px 4px 0 #0a0a0a",
              }}
            >
              UBSI 2023 ↗
            </div>

            <div
              className="border-4 border-black overflow-hidden transition-transform duration-300 hover:rotate-0"
              style={{ transform: "rotate(-2deg)", boxShadow: "8px 8px 0 #0a0a0a" }}
            >
              <Image
                src={personalInfo.photo}
                alt="Farih Ramdan Wildantama"
                width={480}
                height={400}
                className="w-full object-cover object-top"
                style={{ maxHeight: 380 }}
              />
            </div>

            {/* Bottom sticker */}
            <div
              className="absolute -bottom-5 -right-4 z-10 border-4 border-black px-4 py-2 text-sm font-bold"
              style={{
                background: "#FFE135", fontFamily: "'Bebas Neue', sans-serif",
                transform: "rotate(4deg)", boxShadow: "4px 4px 0 #0a0a0a",
              }}
            >
              Jakarta, Indonesia 📍
            </div>
          </motion.div>

          {/* Content column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span
              className="inline-block text-xs font-bold tracking-widest px-3 py-1 mb-4"
              style={{ background: "#0a0a0a", color: "#FFE135" }}
            >
              // ABOUT ME
            </span>

            <h2
              className="leading-none mb-5"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 52 }}
            >
              WHO IS <br />
              <span style={{ color: "#e63946" }}>FARIH?</span>
            </h2>

            <p className="text-sm mb-4 max-w-md" style={{ lineHeight: 1.75, color: "#333" }}>
              {personalInfo.bio}
            </p>
            <p className="text-xs mb-7 max-w-md" style={{ lineHeight: 1.75, color: "#777" }}>
              {personalInfo.bioEn}
            </p>

            {/* Fact cards */}
            <div className="grid grid-cols-2 gap-3 mb-7">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="card-comic p-4"
                  style={{ background: "#fff8e7" }}
                >
                  <div className="text-xl mb-1">{f.icon}</div>
                  <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#666" }}>
                    {f.label}
                  </div>
                  <div className="text-sm font-bold">{f.value}</div>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 flex-wrap">
              <a
                href="#contact"
                className="btn-comic"
                style={{ background: "#e63946", color: "#fff" }}
              >
                Hire Me
              </a>
              <a
                href={personalInfo.cvPath}
                download
                className="btn-comic"
                style={{ background: "#FFE135", color: "#0a0a0a" }}
              >
                Download CV ↓
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
