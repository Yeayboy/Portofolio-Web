# Farih Ramdan Wildantama — Portfolio

Website portofolio personal bergaya **Pop-Art / Neo-Brutalism Comic Style** dibangun dengan Next.js, Tailwind CSS, dan Framer Motion.

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **GitHub Widget**: react-github-calendar
- **Form**: Web3Forms
- **Icons**: Lucide React

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Setup Web3Forms
1. Daftar gratis di [web3forms.com](https://web3forms.com)
2. Verifikasi email kamu
3. Copy **Access Key**
4. Buka `components/Contact.jsx`
5. Ganti nilai ini:
```jsx
<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_KEY_HERE" />
```
menjadi Access Key kamu.

### 3. Jalankan dev server
```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## 📁 Struktur Project

```
farih-portfolio/
├── app/
│   ├── globals.css       # Global styles + Tailwind
│   ├── layout.jsx        # Root layout + metadata
│   └── page.jsx          # Main page (semua section)
├── components/
│   ├── Navbar.jsx        # Sticky navbar + hamburger mobile
│   ├── Hero.jsx          # Hero section dengan foto + stats
│   ├── Marquee.jsx       # Running text miring
│   ├── About.jsx         # Bio + fact cards
│   ├── Skills.jsx        # Skill grid + GitHub calendar
│   ├── Projects.jsx      # Project cards dengan filter tab
│   ├── Contact.jsx       # Form Web3Forms + Google Maps
│   ├── Footer.jsx        # Footer + social links
│   └── BackToTop.jsx     # Tombol back to top
├── data/
│   └── index.js          # Semua data portofolio (edit di sini!)
├── public/
│   └── images/           # Semua aset gambar & CV PDF
├── tailwind.config.js
├── next.config.js
└── package.json
```

## ✏️ Cara Update Konten

Semua data ada di **`data/index.js`** — cukup edit file itu untuk update:
- Info personal (nama, bio, kontak)
- Daftar proyek
- Skill categories
- Statistik hero

## 🌐 Deploy ke Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Atau push ke GitHub dan connect ke [vercel.com](https://vercel.com) untuk auto-deploy.

---

Made with ❤️ by Farih Ramdan Wildantama
