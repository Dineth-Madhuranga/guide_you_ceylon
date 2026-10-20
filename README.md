# Guide You Ceylon — Wilderness Trekking & Camping Expeditions

Official Next.js web application for **Guide You Ceylon**, Sri Lanka's trusted wilderness adventure and trekking agency specializing in guided expeditions across the UNESCO World Heritage Knuckles Mountain Range, Pekoe Trail, and Central Highlands.

---

## 🌲 Features & Capabilities

- **Pixel-Perfect Motion & Animation**:
  - Pinned 3-column scroll morphing hero with letter-staggered typography.
  - Interactive sliding 2-card showcase with background depth reveal.
  - Pinned horizontal scrolling gallery track with dynamic height calculation.
  - Word-by-word scroll-linked text highlighting for brand Vision & Mission.
  - Glassmorphic navigation header with multi-layer shadow and mobile drawer.
- **7 Complete Real Tour Packages**:
  1. *Best Trail in Knuckles Mountain Range* (3 Days / 30km / Hard / From $175)
  2. *Dumbara Waterfall & Camping* (2 Days / 24km / Moderate / $150)
  3. *Knuckles 5 Peaks Trek* (1 Day / 12km / Normal / $75)
  4. *Kotaganga to 5 Peaks Cabana Tour* (2 Days / 24km / Moderate / $150)
  5. *Kotaganga Waterfall Chain Expedition* (1 Day / 10km / Moderate / $150)
  6. *Legendary Hike in Knuckles - Yahangala* (1 Day / 10km / Extreme / $75)
  7. *Thunhisgala & KMP 2 Days Tour* (2 Days / 24km / Moderate / $200)
- **Interactive Tour Modals**: Full day-by-day itineraries, inclusions, exclusions, and what-to-bring equipment checklists.
- **Nodemailer Contact & Inquiry API**:
  - Live inquiry submission via `/api/contact`.
  - Automatic email dispatch to the tour desk with traveler details and reply-to headers.
  - Direct WhatsApp 1-click booking integration.
- **110+ High-Resolution Authentic Photos**: Captured directly from the Knuckles expeditions.
- **Vercel-Ready**: Clean App Router architecture, zero build warnings, and optimized static pages.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or `http://localhost:3001` if port 3000 is occupied).

### 3. Production Build & Test
```bash
npm run build
npm run start
```

---

## 📧 Email Configuration (Nodemailer)

To enable live email dispatch when travelers submit inquiries through the contact form, create a `.env.local` file (or add these variables in your **Vercel Project Settings > Environment Variables**):

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-character-app-password
CONTACT_RECEIVER_EMAIL=info@guideyouceylon.com
```

> **Note**: In development mode or if SMTP credentials are not yet set, the API operates in safe simulation mode, logging the full inquiry payload to the server console with HTTP 200 so the UI works seamlessly.

---

## 🌐 Deploying to Vercel

1. Push this repository to GitHub or GitLab:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for Guide You Ceylon"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Under **Environment Variables**, add:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `CONTACT_RECEIVER_EMAIL`
5. Click **Deploy**.
