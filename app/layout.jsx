import "./globals.css";

export const metadata = {
  title: "Farih Ramdan Wildantama — Portfolio",
  description:
    "Full Stack Developer & UI/UX Designer — Mahasiswa Teknologi Informasi UBSI Jakarta. Membangun interface intuitif dan sistem scalable.",
  keywords: ["UI/UX Designer", "Frontend Developer", "Next.js", "Figma", "Jakarta"],
  authors: [{ name: "Farih Ramdan Wildantama" }],
  openGraph: {
    title: "Farih Ramdan Wildantama — Portfolio",
    description: "Full Stack Developer & UI/UX Designer based in Jakarta.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
