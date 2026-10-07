"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo, stats } from "@/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b-4 border-black"
      style={{ background: "#0d1b2a", padding: "80px 0 60px" }}
    >
      {/* BG decorative blobs */}
      <div
        className="animate-float absolute rounded-full pointer-events-none"
        style={{
          width: 400, height: 400, top: -100, right: -100,
          background: "rgba(255,225,53,0.05)",
        }}
      />
      <div
        className="animate-float-delayed absolute rounded-full pointer-events-none"
        style={{
          width: 200, height: 200, bottom: -50, left: "5%",
          background: "rgba(255,225,53,0.05)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_320px] gap-12 items-center">
        {/* LEFT: Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Eyebrow badge */}
          <div
            className="inline-flex items-center gap-2 border-4 border-black mb-5 px-4 py-1 text-xs font-bold uppercase tracking-widest"
            style={{ background: "#FFE135", color: "#0a0a0a", boxShadow: "4px 4px 0 #0a0a0a" }}
          >
            <span
              className="animate-blink inline-block rounded-full"
              style={{ width: 8, height: 8, background: "#e63946" }}
            />
            Open to Internship &amp; Opportunities
          </div>

          {/* Name */}
          <h1
            className="leading-none mb-4 tracking-wider"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(56px, 8vw, 96px)",
              color: "#fff",
            }}
          >
            FARIH
            <br />
            <span style={{ color: "#FFE135" }}>RAMDAN</span>
            <br />
            <span style={{ WebkitTextStroke: "2px #FFE135", color: "transparent" }}>
              WILDANTAMA
            </span>
          </h1>

          {/* Role badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {personalInfo.roles.map((role) => (
              <span
                key={role}
                className="border-2 text-sm font-semibold px-3 py-1 transition-all hover:bg-yellow-300 hover:text-black hover:border-yellow-300"
                style={{ borderColor: "rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.85)" }}
              >
                {role}
              </span>
            ))}
          </div>

          {/* Tagline */}
          <p className="text-base mb-8 max-w-lg" style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.65 }}>
            {personalInfo.tagline}
            <br />
            {personalInfo.taglineSub}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="#projects"
              className="btn-comic"
              style={{ background: "#e63946", color: "#fff" }}
            >
              View My Work ↓
            </a>
            <a
              href="#contact"
              className="btn-comic"
              style={{ background: "#FFE135", color: "#0a0a0a" }}
            >
              Get In Touch
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8">
            {stats.map((s) => (
              <div
                key={s.label}
                className="pl-4"
                style={{ borderLeft: "3px solid #FFE135" }}
              >
                <div
                  className="leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 36, color: "#FFE135" }}
                >
                  {s.num}
                </div>
                <div className="text-xs mt-1 font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT: Photo */}
        <motion.div
          className="flex justify-center relative"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Comic burst sticker */}
          <div
            className="absolute -top-5 -left-5 z-10 border-4 border-black px-3 py-2 text-sm font-bold text-white"
            style={{
              background: "#e63946", fontFamily: "'Bebas Neue', sans-serif",
              transform: "rotate(-8deg)", boxShadow: "4px 4px 0 #0a0a0a",
              whiteSpace: "nowrap",
            }}
          >
            ⚡ Available Now!
          </div>

          {/* Photo frame */}
          <div
            className="relative border-4 border-black overflow-hidden transition-transform duration-300 hover:rotate-0 hover:scale-105"
            style={{
              width: 280, transform: "rotate(2deg)",
              boxShadow: "8px 8px 0 #0a0a0a",
            }}
          >
            <Image
              src={personalInfo.photo}
              alt="Farih Ramdan Wildantama"
              width={280}
              height={380}
              className="w-full object-cover object-top"
              style={{ filter: "contrast(1.05) saturate(1.1)" }}
              priority
            />
            {/* Bottom badge */}
            <div
              className="absolute -bottom-4 -right-4 border-4 border-black px-4 py-2 text-base font-bold"
              style={{
                background: "#FFE135", fontFamily: "'Bebas Neue', sans-serif",
                transform: "rotate(-3deg)", boxShadow: "4px 4px 0 #0a0a0a",
                whiteSpace: "nowrap",
              }}
            >
              IT Student <span style={{ color: "#e63946" }}>★</span> 2027
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
