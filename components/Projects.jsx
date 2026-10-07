"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data";

const filters = [
  { key: "all", label: "All" },
  { key: "webdev", label: "Web Dev" },
  { key: "uiux", label: "UI/UX" },
  { key: "aiml", label: "AI/ML" },
];

const catBadgeColors = {
  uiux: { bg: "#1e40af", color: "#fff" },
  webdev: { bg: "#FFE135", color: "#0a0a0a" },
  aiml: { bg: "#e63946", color: "#fff" },
};

export default function Projects() {
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="border-b-4 border-black" style={{ background: "#fff", padding: "80px 0" }}>
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-8">
          <span
            className="inline-block text-xs font-bold tracking-widest px-3 py-1 mb-4"
            style={{ background: "#0a0a0a", color: "#FFE135" }}
          >
            // SELECTED WORK
          </span>
          <h2
            className="leading-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 56, letterSpacing: 2 }}
          >
            MY <span style={{ color: "#e63946" }}>PROJECTS</span>
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className="px-5 py-2 border-4 border-black text-xs font-bold uppercase tracking-widest transition-all"
              style={{
                background: active === f.key ? "#0a0a0a" : "transparent",
                color: active === f.key ? "#FFE135" : "#0a0a0a",
                boxShadow: active === f.key ? "4px 4px 0 #555" : "4px 4px 0 #0a0a0a",
                transform: active === f.key ? "translate(-2px,-2px)" : "none",
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <AnimatePresence mode="wait">
            {filtered.map((project) => {
              const badgeColors = catBadgeColors[project.category] || catBadgeColors.webdev;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="card-comic bg-white flex flex-col overflow-hidden"
                >
                  {/* Thumbnail */}
                  <div className="relative border-b-4 border-black overflow-hidden" style={{ aspectRatio: "16/9" }}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <span
                      className="absolute top-2 left-2 text-xs font-bold px-2 py-1 border-2 border-black uppercase tracking-wide"
                      style={{ background: badgeColors.bg, color: badgeColors.color }}
                    >
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-4 flex flex-col flex-1">
                    <h3
                      className="mb-2 leading-tight"
                      style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 20 }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs flex-1 mb-3" style={{ lineHeight: 1.65, color: "#555" }}>
                      {project.description}
                    </p>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-bold px-2 py-1 border-2 border-black uppercase tracking-wide"
                          style={{ background: "#fff8e7" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center text-xs font-bold py-2 border-4 border-black uppercase tracking-wide transition-all hover:-translate-x-0.5 hover:-translate-y-0.5"
                          style={{ background: "#0a0a0a", color: "#fff", boxShadow: "4px 4px 0 #555", textDecoration: "none" }}
                        >
                          ⬡ GitHub
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center text-xs font-bold py-2 border-4 border-black uppercase tracking-wide transition-all hover:-translate-x-0.5 hover:-translate-y-0.5"
                          style={{ background: "#FFE135", color: "#0a0a0a", boxShadow: "4px 4px 0 #0a0a0a", textDecoration: "none" }}
                        >
                          ↗ Live Demo
                        </a>
                      )}
                      {project.journal && (
                        <a
                          href={project.journal}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center text-xs font-bold py-2 border-4 border-black uppercase tracking-wide transition-all hover:-translate-x-0.5 hover:-translate-y-0.5"
                          style={{ background: "#1e40af", color: "#fff", boxShadow: "4px 4px 0 #0a0a0a", textDecoration: "none" }}
                        >
                          📄 Jurnal
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
