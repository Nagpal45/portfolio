# 🚀 Personal Portfolio 2026

Welcome to the **Portfolio 2026** repository! This is a modern, fully-animated, and highly responsive personal developer portfolio. Built for exceptional performance and visual excellence, it showcases projects, work experience, and technical skills while maintaining top-tier SEO and accessibility practices.

---

## 🌟 Key Features

- **Modern Tech Stack**: Harnessing Next.js 16 App Router and React 19 for maximum rendering performance.
- **Rich Animations**: Immersive user experience powered by **Framer Motion**, including fluid page transitions and scroll reveals.
- **Interactive UI**: Custom animated 3D cursors, integrated interactive dice components, and beautiful layout designs.
- **Built-in Security**: Hardened forms using `isomorphic-dompurify` to sanitize all user inputs continuously to protect against XSS injections.
- **Live Contact Form**: Integrated with **EmailJS** for real-time portfolio inquiries sent directly to your inbox.
- **Optimized SEO**: Automatically generated semantic `sitemap.ts`, `robots.ts`, localized metadata, and optimized fonts.
- **Resume Distribution**: Built-in, clean UI flow for downloading professional résumés.

---

## 🛠️ Technologies & Concepts Used

| Category | Technology | Purpose & Implementation |
| :--- | :--- | :--- |
| **Core Framework** | **Next.js 16** (App Router) | Server-Side Rendering (SSR), Static Generation (SSG), advanced layouts, and routing. |
| **UI Library** | **React 19** | Utilizing React's newest paradigms, with automatic memoization via the React Compiler. |
| **Type Safety** | **TypeScript** | Strict typings across components and sanitized data interfaces. |
| **Styling Engine** | **Tailwind CSS v4** & CSS Modules | Combining utility-first speed with custom CSS scopes for complex interactive components. |
| **Animations** | **Framer Motion v12** | Core engine for all UI micro-interactions, layout transitions, and the `motion.tsx` wrapper. |
| **Form Handling** | **EmailJS Browser** | Client-side API allowing direct email routing securely from the `ContactClient.tsx`. |
| **Input Security** | **Isomorphic DOMPurify** | Cross-environment utility ensuring any markup passed in remains thoroughly sanitized (`lib/sanitize.ts`). |

---

## 📂 Project Structure

A quick look at how the application is organized:

```text
portfolio-2026/
├── app/                  # Next.js 16 App Router Entry Points
│   ├── contact/          # Contact Page and Client Forms
│   ├── projects/         # Project Showcase Page
│   ├── layout.tsx        # Global Application Layout
│   ├── page.tsx          # Homepage
│   └── sitemap/robots    # Automated technical SEO logic
├── components/           # Reusable Modular React Components
│   ├── Homepage/         # Custom complex UI (Intro, Dice, Techstack, Experience)
│   ├── ui/               # Core isolated design system components (Motion, Resume Button)
│   ├── cursor/           # Custom animated mouse follower
│   └── navbar/footer     # Global persistent navigational elements
├── lib/                  # Utility functions (e.g., sanitize.ts)
└── public/               # Static assets (images, icons, resume PDFs)
```

---

## ⚙️ Local Setup & Development

To get this project running on your local machine, follow these steps:

### 1. Requirements
Ensure you have **Node.js 20+** installed.

### 2. Installation
Clone the repository and install all dependencies:
```bash
git clone https://github.com/your-username/portfolio-2026.git
cd portfolio-2026
npm install
```

### 3. Environment Variables
To get the contact form fully operational, you will need to set up an [EmailJS](https://www.emailjs.com/) account.
Create a `.env.local` file in the root directory and define the following variables:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### 4. Running the Development Server
Spin up the local Next.js server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to experience the site!

---

## 🚀 Deployment

The project is highly optimized for **Vercel** via the `vercel.json` configuration config present in the root. 

Deploy easily by connecting the Git repository to a Vercel project or running:
```bash
npx vercel
```
Don't forget to configure your Environment Variables inside the Vercel dashboard prior to building.

---
*Built with ❤️ utilizing the cutting edge of Next.js and Framer Motion.*
