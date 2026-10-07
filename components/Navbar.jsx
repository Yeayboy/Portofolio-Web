"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { personalInfo } from "@/data";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 border-b-4 border-black"
      style={{
        background: "#0d1b2a",
        boxShadow: scrolled ? "0 4px 0 #0a0a0a" : "none",
        transition: "box-shadow 0.3s",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="#home"
          className="font-display text-3xl tracking-widest"
          style={{
            color: "#FFE135",
            textShadow: "2px 2px 0 #e63946",
            fontFamily: "'Bebas Neue', sans-serif",
          }}
        >
          F<span style={{ color: "#e63946" }}>.</span>RW
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 list-none">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-white text-xs font-bold uppercase tracking-widest relative pb-1 transition-colors hover:text-yellow-300"
                style={{ textDecoration: "none" }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Buttons */}
        <div className="hidden md:flex gap-3 items-center">
          <a
            href="#contact"
            className="btn-comic text-xs px-4 py-2"
            style={{ background: "#e63946", color: "#fff" }}
          >
            Hire Me
          </a>
          <a
            href={personalInfo.cvPath}
            download
            className="btn-comic text-xs px-4 py-2"
            style={{ background: "#FFE135", color: "#0a0a0a" }}
          >
            ↓ CV
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="md:hidden border-t-4 border-black px-6 py-4 flex flex-col gap-4"
          style={{ background: "#0d1b2a" }}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white text-sm font-bold uppercase tracking-widest"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="flex gap-3 mt-2">
            <a
              href="#contact"
              className="btn-comic text-xs px-4 py-2"
              style={{ background: "#e63946", color: "#fff" }}
              onClick={() => setOpen(false)}
            >
              Hire Me
            </a>
            <a
              href={personalInfo.cvPath}
              download
              className="btn-comic text-xs px-4 py-2"
              style={{ background: "#FFE135", color: "#0a0a0a" }}
            >
              ↓ CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
