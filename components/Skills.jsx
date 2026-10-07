"use client";

import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import { skillCategories, personalInfo } from "@/data";

const headerColors = {
  blue: { bg: "#1e40af", color: "#fff" },
  red: { bg: "#e63946", color: "#fff" },
  yellow: { bg: "#FFE135", color: "#0a0a0a" },
  dark: { bg: "#0d1b2a", color: "#fff" },
};

export default function Skills() {
  return (
    <section id="skills" className="border-b-4 border-black" style={{ background: "#fff8e7", padding: "80px 0" }}>
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-bold tracking-widest px-3 py-1 mb-4"
            style={{ background: "#0a0a0a", color: "#FFE135" }}
          >
            // TECH STACK
          </span>
          <h2
            className="leading-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 56, letterSpacing: 2 }}
          >
            MY <span style={{ color: "#1e40af" }}>SKILLS</span>
          </h2>
        </div>

        {/* Skill grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {skillCategories.map((cat, i) => {
            const colors = headerColors[cat.color];
            return (
              <motion.div
                key={cat.title}
                className="card-comic overflow-hidden bg-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div
                  className="px-4 py-3 text-lg font-bold border-b-4 border-black flex items-center gap-2"
                  style={{
                    background: colors.bg, color: colors.color,
                    fontFamily: "'Bebas Neue', sans-serif", letterSpacing: 0.5,
                  }}
                >
                  {cat.icon} {cat.title}
                </div>
                <div className="p-4 flex flex-col gap-2">
                  {cat.items.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-2 h-2 border-2 border-black flex-shrink-0" style={{ background: "#0a0a0a" }} />
                      <span className="text-xs font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* GitHub Calendar */}
        <motion.div
          className="border-4 border-black bg-white p-6"
          style={{ boxShadow: "4px 4px 0 #0a0a0a" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3
            className="flex items-center justify-center gap-2 mb-4 text-2xl"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub Contributions —{" "}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1e40af", textDecoration: "none" }}
            >
              {personalInfo.githubUsername}
            </a>
          </h3>
          <div className="flex justify-center overflow-x-auto">
            <GitHubCalendar
              username={personalInfo.githubUsername}
              colorScheme="light"
              fontSize={12}
              blockSize={13}
              blockMargin={4}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
