# 🌍 Financial Youth Club (FYC) — Official Web Application

[![Live Demo](https://img.shields.io/badge/Live%20Demo-financial--youth--club.vercel.app-000000?style=for-the-badge&logo=vercel)](https://financial-youth-club.vercel.app)
[![Surge Backup](https://img.shields.io/badge/Surge%20Mirror-fyc--web--app.surge.sh-1E293B?style=for-the-badge&logo=surge)](https://fyc-web-app.surge.sh)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

**Financial Youth Club (FYC)** is a globally registered youth-led non-profit organization (NGO) operating across **35+ countries and 4 continents**. We connect students with world-class finance mentors from **J.P. Morgan, Goldman Sachs, Harvard, LSE**, and top global institutions while driving financial inclusion and price transparency through initiatives like **Girls For Change**.

---

## ✨ Key Features & Impact Highlights

- 🎓 **Free Financial Literacy Programs**: Reaching 100,000+ students globally through 90+ interactive workshops and Summer Program 2026.
- 💡 **Global Mentorship Network**: 35+ industry practitioners and university mentors guiding youth in personal finance, economics, and career paths.
- ♀️ **Girls For Change Campaign**: Advocating for economic gender price equity and transparency (Pink Tax awareness).
- ⚡ **Ultra-Fast & Responsive Web Experience**: Modern React 18 SPA optimized with Vite code-splitting and Edge CDN asset delivery.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18 + Vite 5
- **Routing**: React Router DOM (v6 SPA client-side routing)
- **Styling**: Modern CSS3 Tokens, Custom Glassmorphism & Micro-animations
- **Icons**: Lucide React Vector Icons

### Backend & Infrastructure
- **Runtime**: Node.js + Express REST API
- **Deployment**: Vercel Edge Network & Surge Static Distribution

---

## 📁 Repository Structure

```text
FYC-WEB/
├── frontend/             # React SPA Frontend Application
│   ├── src/
│   │   ├── app/          # App routes, providers & layout shells
│   │   ├── components/   # Shared UI components (Navbar, Footer, Counters)
│   │   ├── features/     # Modular feature pages (Home, Founders, Legal, Programs)
│   │   └── styles/       # Design system CSS tokens & media query breakpoints
│   ├── public/           # Static high-res assets & official logo
│   ├── vercel.json       # Vercel Edge caching headers & SPA rewrites
│   └── vite.config.js    # Optimized Rollup manualChunks code splitting
└── backend/              # Node.js Express REST API microservice
```

---

## 💻 Local Development Setup

### Prerequisites
- Node.js >= 18.x
- npm >= 9.x

### Run Frontend locally:
```bash
cd frontend
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📜 License & Compliance

Distributed under the MIT License. See `LICENSE` for details.  
Registered NGO • Financial Youth Club Global.
