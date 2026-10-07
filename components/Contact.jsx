"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data";

const contactLinks = [
  {
    icon: "✉️",
    label: "Email",
    value: "farihrmdn123@gmail.com",
    href: "mailto:farihrmdn123@gmail.com",
  },
  {
    icon: "📱",
    label: "Phone / WhatsApp",
    value: "+62 852-1014-2214",
    href: "tel:+6285210142214",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "farih-ramdan-wildantama",
    href: "https://linkedin.com/in/farih-ramdan-wildantama",
  },
  {
    icon: "⬡",
    label: "GitHub",
    value: "github.com/Yeayboy",
    href: "https://github.com/Yeayboy",
  },
];

export default function Contact() {
  const [status, setStatus] = useState(null); // null | 'success' | 'error'
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    const formData = new FormData(e.target);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        e.target.reset();
      } else {
        throw new Error(data.message);
      }
    } catch {
      setStatus("error");
    }
    setLoading(false);
  }

  return (
    <section
      id="contact"
      className="border-b-4 border-black"
      style={{ background: "#0d1b2a", padding: "80px 0" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <span
          className="inline-block text-xs font-bold tracking-widest px-3 py-1 mb-4"
          style={{ background: "#FFE135", color: "#0a0a0a" }}
        >
          // CONTACT
        </span>
        <h2
          className="leading-none mb-2"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 56,
            color: "#fff",
            letterSpacing: 2,
          }}
        >
          LET&apos;S <span style={{ color: "#FFE135" }}>WORK</span>
          <br />
          TOGETHER
        </h2>
        <p className="text-sm mb-12" style={{ color: "rgba(255,255,255,0.65)" }}>
          Tertarik kolaborasi atau ada posisi magang yang cocok? Hubungi saya — saya siap!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-10">
          {/* Contact info */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {contactLinks.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 border-4 border-white/20 px-5 py-4 transition-all hover:-translate-x-0.5 hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  boxShadow: "4px 4px 0 rgba(255,255,255,0.1)",
                  textDecoration: "none",
                }}
              >
                <div
                  className="w-11 h-11 flex items-center justify-center border-2 border-black flex-shrink-0 text-xl"
                  style={{ background: "#FFE135" }}
                >
                  {c.icon}
                </div>
                <div>
                  <div
                    className="text-xs font-bold uppercase tracking-widest mb-0.5"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {c.label}
                  </div>
                  <div className="text-sm font-bold text-white">{c.value}</div>
                </div>
              </a>
            ))}

            {/* Google Maps embed */}
            <div
              className="border-4 border-white/20 overflow-hidden mt-2"
              style={{ boxShadow: "4px 4px 0 rgba(255,255,255,0.1)" }}
            >
              <div
                className="px-4 py-2 border-b-2 border-white/20 text-xs font-bold uppercase tracking-widest flex items-center gap-2"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                📍 Kelapa Gading, Jakarta Utara
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.89915!3d-6.1583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1d7b9f2eb00d%3A0x1234567890abcdef!2sKelapa%20Gading%2C%20North%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="150"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kelapa Gading, Jakarta"
              />
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            className="border-4 border-black bg-white p-8"
            style={{ boxShadow: "8px 8px 0 #0a0a0a" }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3
              className="mb-6 text-2xl"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Send a Message 💬
            </h3>

            <form onSubmit={handleSubmit}>
              {/* Web3Forms access key — ganti dengan key kamu */}
              <input
                type="hidden"
                name="access_key"
                value="YOUR_WEB3FORMS_KEY_HERE"
              />

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full border-4 border-black px-3 py-2.5 text-sm font-medium outline-none transition-shadow focus:shadow-comic bg-[#fff8e7] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full border-4 border-black px-3 py-2.5 text-sm font-medium outline-none transition-shadow focus:shadow-comic bg-[#fff8e7] focus:bg-white"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-xs font-bold uppercase tracking-widest mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Internship Offer / Collaboration / etc."
                  className="w-full border-4 border-black px-3 py-2.5 text-sm font-medium outline-none transition-shadow focus:shadow-comic bg-[#fff8e7] focus:bg-white"
                />
              </div>

              <div className="mb-5">
                <label className="block text-xs font-bold uppercase tracking-widest mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  placeholder="Halo Farih, saya ingin..."
                  rows={4}
                  className="w-full border-4 border-black px-3 py-2.5 text-sm font-medium outline-none transition-shadow focus:shadow-comic bg-[#fff8e7] focus:bg-white resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-comic w-full justify-center text-sm"
                style={{
                  background: loading ? "#555" : "#e63946",
                  color: "#fff",
                  cursor: loading ? "not-allowed" : "pointer",
                }}
              >
                {loading ? "Sending..." : "Send Message ✉️"}
              </button>

              {status === "success" && (
                <div className="mt-3 p-3 border-4 border-black text-sm font-bold bg-green-100 text-green-800">
                  ✅ Pesan terkirim! Saya akan membalas secepatnya.
                </div>
              )}
              {status === "error" && (
                <div className="mt-3 p-3 border-4 border-black text-sm font-bold bg-red-100 text-red-800">
                  ❌ Gagal mengirim. Silakan hubungi langsung via email.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
