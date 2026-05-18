# 🇮🇳 Path Finder Defence Academy (PFDA)

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-F024B6?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Deployed on Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=flat-square&logo=vercel&logoColor=white)](https://pfda-bice.vercel.app/)

> India's most trusted academy for defence careers. Preparing aspirants to become officers in the Indian Armed Forces.

The official production website for **Path Finder Defence Academy (PFDA)** is live at **[pfda-bice.vercel.app](https://pfda-bice.vercel.app/)**.

---

## 📖 Overview

**Path Finder Defence Academy (PFDA)**, located in Lucknow, Uttar Pradesh, is India's premier training institute for aspirants seeking a career in the Indian Armed Forces. Led by highly decorated Ex-Defence Officers and expert educators, PFDA offers specialized written coaching and comprehensive SSB Interview preparation.

This responsive, interactive, high-performance web platform showcases the academy's courses, elite faculty, success stories, and dynamic updates, with fully integrated channels for direct student engagement and lead generation.

---

## ✨ Features

- **🛡️ Military-Inspired Aesthetics**: Sleek cinematic layout featuring a dark color scheme (`#0a0f1c`), subtle camouflage texture overlays, and custom glassmorphism components (`.glass-card`, `.glass-nav`).
- **📚 Comprehensive Course Management**: Displays structured curriculum details for major exams:
  - **NDA** (National Defence Academy) for 12th appearing/passed candidates.
  - **CDS** (Combined Defence Services) and **AFCAT** for graduates.
  - **SSB Interview Preparation** (Psychology, GTO, Personal Interview).
  - **School Integrated Foundation Program** (11th & 12th schooling + NDA prep).
  - **Agniveer Program** (Army, Navy, Air Force) and **Sainik School Entrance**.
- **🏅 Interactive Hall of Fame**: Showcases successful selections and All India Ranks (AIR) with beautiful modal expansions and animations.
- **🎖️ Elite Faculty Showcases**: Details of the distinguished mentors guiding aspirants, such as Col. R.K. Singh (Ex-Army, Infantry, SSB psychology), Major S. Gupta (Ex-Army, GTO specialist), and Gp Capt. A. Mishra (Ex-IAF, Interviewing Officer).
- **⚡ Advanced Lead Capture Pipeline**:
  - `LeadPopup` modal triggering intelligently to collect candidate parameters (name, number, course, location) for demo session booking.
  - Custom `FloatingWhatsApp` quick-chat widget for direct instant access.
  - `StickyMobileBar` for fast enrollment triggers on smaller screens.
- **🚀 Ultra High Performance & SEO**:
  - Highly optimized typography utilizing Google **Inter** with Next.js font loader.
  - Dynamic `sitemap.ts` and `robots.ts` ensuring instantaneous Google indexing.
  - Full React 19 concurrent features and fluid animations powered by Framer Motion.
  - Configured for **Static HTML Export** (`next export`) via `next.config.ts` for lighting-fast static file loading and deployment.

---

## 🛠️ Tech Stack & Design Architecture

### Technologies Used

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Core Framework** | [Next.js 16 (App Router)](https://nextjs.org/) | Component hydration, routing structure, sitemaps |
| **View Layer** | [React 19](https://react.dev/) | Virtual DOM rendering & State Management |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) & PostCSS | Custom utility classes & modern design tokens |
| **Type Safety** | [TypeScript](https://www.typescriptlang.org/) | Compile-time checking |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) | Smooth viewport fade-ins, scales, and mobile layouts |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, vector icon pack |

### Design System & Tokens (`globals.css`)

```css
/* Tailwind CSS v4 Theme definitions used across the site */
@theme {
  --color-primary: #0a0f1c;        /* Deep Cinematic Dark */
  --color-primary-light: #10172a;  /* Accent Blue-Grey Slate */
  --color-military: #2e7d32;       /* Olive Military Green */
  --color-gold: #c8a95b;           /* Metallic Premium Gold */
  --color-accent: #ff3b3b;         /* Alert Red */
  
  --font-sans: var(--font-inter);  /* Clean modern geometric typeface */
}
```

---

## 📂 Project Structure

```markdown
pfda/
├── public/                  # Static assets (images, badges, background hero elements)
├── src/
│   ├── app/                 # Next.js App Router Structure
│   │   ├── about/           # Academy vision, values, and story
│   │   ├── blog/            # Blog posts, study material, defence exam patterns
│   │   ├── branches/        # Branch coordinates (Alambagh & Indiranagar, Lucknow)
│   │   ├── contact/         # Lead inquiry form, contact info, and map embeds
│   │   ├── courses/         # Written course overviews (NDA, CDS, AFCAT, SSB)
│   │   ├── gallery/         # Photos of classrooms, physical training ground, hostel
│   │   ├── results/         # List of recommended candidates
│   │   ├── globals.css      # Core Tailwind CSS v4 directives, custom theme, variables
│   │   ├── layout.tsx       # Root layout containing Navbar, Footer, and global lead modals
│   │   └── page.tsx         # Root entry landing page
│   ├── components/          # Reusable React components
│   │   ├── home/            # Homepage component sections (Mentors, CTA, FAQ, Updates, etc.)
│   │   ├── ui/              # Low-level visual primitives (Button.tsx, Card.tsx)
│   │   ├── Hero.tsx         # Camouflage textured header banner
│   │   ├── Navbar.tsx       # Glassmorphic main menu with responsiveness
│   │   ├── Footer.tsx       # Structured footer containing links and quick contacts
│   │   ├── LeadPopup.tsx    # Intelligent modal-based lead intake form
│   │   ├── FloatingWhatsApp.tsx  # WhatsApp chat trigger
│   │   └── StickyMobileBar.tsx   # Fast action buttons for mobile devices
│   └── lib/                 # Utility helpers (utils.ts)
```

---

## 🚀 Getting Started Locally

To run the Path Finder Defence Academy portal on your machine, follow these instructions.

### Prerequisites

Ensure you have **Node.js** (v18 or higher) and **npm** installed on your system.

### 1. Clone the Repository

```bash
git clone https://github.com/vs-sam007/pfda.git
cd pfda
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📦 Build & Deployment

### Production Build

To build the application for static production hosting:

```bash
npm run build
```

This compiles the Next.js application, executes a full **Static HTML Export**, and deposits the bundle inside the `out/` directory.

### Hosting Configs

Since the project uses Next.js static exports, it can be seamlessly deployed to platforms like **Vercel**, Netlify, or AWS S3. 

The application uses `next.config.ts` configured for static export:
```typescript
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  }
};
```

---

## 🤝 Contributing

Contributions to improve the application are welcome! Please follow these guidelines:

1. **Fork** the repository.
2. Create a new feature branch (`git checkout -b feature/AmazingFeature`).
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`).
4. **Push** to the branch (`git push origin feature/AmazingFeature`).
5. Open a **Pull Request**.

---

## 📞 Contact & Support

- **Academy**: Path Finder Defence Academy (PFDA)
- **HQ**: Lucknow, Uttar Pradesh, India
- **Live Portal**: [https://pfda-bice.vercel.app/](https://pfda-bice.vercel.app/)
- **Core Maintainer**: [vs-sam007](https://github.com/vs-sam007)

---

*Made with 💖 for India's future protectors. Jai Hind! 🇮🇳*
