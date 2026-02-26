import type { Metadata, Viewport } from "next";
import { Rubik, Quicksand, Fredoka } from "next/font/google";
import "./globals.css";
import BreadcrumbSchema from "@/components/BreadCrumbs";
import { LazyMotion, domAnimation } from "@/components/ui/motion";
import Navbar from "@/components/navbar/navbar";
import Cursor from "@/components/cursor/cursor";
import Footer from "@/components/footer/footer";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rubik",
});

const quickSand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
});

export const BASE_URL = "https://vaibhavnagpal.tech";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Vaibhav Nagpal | Software Engineer & Full Stack Architect",
  description:
    "Software Engineer specializing in pixel-perfect frontend architecture, cloud infrastructure and scalable full-stack systems. Expert in building AI-integrated SaaS, and real-time analytics engines with high-fidelity UX.",
  keywords: [
    "Vaibhav Nagpal",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js Expert",
    "System Design",
    "Pixel Perfect UI",
    "Cloud Architecture",
    "AWS",
    "Docker",
    "React Native",
    "AI SaaS",
  ],
  authors: [{ name: "Vaibhav Nagpal", url: BASE_URL }],
  creator: "Vaibhav Nagpal",
  publisher: "Vaibhav Nagpal",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    title: "Vaibhav Nagpal | Software Engineer",
    description:
      "Building scalable SaaS platforms and pixel-perfect user interfaces. View my projects and case studies.",
    siteName: "Vaibhav Nagpal Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vaibhav Nagpal - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaibhav Nagpal | Software Engineer",
    description:
      "Building scalable SaaS platforms and pixel-perfect user interfaces.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "UfnEtMLCEnGXSk1h2un3njxclhlNeX3zaLMgkSywSu0",
  },
  alternates: {
    canonical: "./",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vaibhav Nagpal",
  jobTitle: "Software Engineer",
  url: "https://vaibhavnagpal.tech",
  knowsAbout: [
    {
      "@type": "SoftwareApplication",
      name: "System Design",
      applicationCategory: "Architecture",
    },
    {
      "@type": "SoftwareApplication",
      name: "AWS (EC2, S3, Amplify)",
      applicationCategory: "Cloud Computing",
    },
    {
      "@type": "SoftwareApplication",
      name: "Cloudflare",
      applicationCategory: "Cloud Computing",
    },
    {
      "@type": "SoftwareApplication",
      name: "Docker",
      applicationCategory: "DevOps",
    },
    {
      "@type": "SoftwareApplication",
      name: "Microservices",
      applicationCategory: "Architecture",
    },
    {
      "@type": "SoftwareApplication",
      name: "Next.js (App Router)",
      applicationCategory: "Web Framework",
    },
    {
      "@type": "SoftwareApplication",
      name: "React.js",
      applicationCategory: "Web Library",
    },
    {
      "@type": "SoftwareApplication",
      name: "TypeScript",
      applicationCategory: "Language",
    },
    {
      "@type": "SoftwareApplication",
      name: "Python",
      applicationCategory: "Language",
    },
    {
      "@type": "SoftwareApplication",
      name: "PostgreSQL",
      applicationCategory: "Database",
    },
    {
      "@type": "SoftwareApplication",
      name: "Redis",
      applicationCategory: "Caching",
    },
    {
      "@type": "SoftwareApplication",
      name: "MongoDB",
      applicationCategory: "Database",
    },
    {
      "@type": "SoftwareApplication",
      name: "Prisma",
      applicationCategory: "ORM",
    },
    {
      "@type": "SoftwareApplication",
      name: "Flask",
      applicationCategory: "Backend Framework",
    },
    {
      "@type": "SoftwareApplication",
      name: "Framer Motion",
      applicationCategory: "Animation",
    },
    {
      "@type": "SoftwareApplication",
      name: "Tailwind CSS",
      applicationCategory: "Styling",
    },
    {
      "@type": "SoftwareApplication",
      name: "D3.js / Recharts",
      applicationCategory: "Data Visualization",
    },
  ],
  sameAs: ["https://linkedin.com/in/vaibhav249", "https://github.com/Nagpal45"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "vn8uodwdrv");`,
          }}
          defer
        />
      </head>
      <body className={`${rubik.variable} ${quickSand.variable} ${fredoka.variable} antialiased`}>
        <BreadcrumbSchema />
        <LazyMotion features={domAnimation}>
          <Cursor />
          <Navbar />
          <main id="main-content" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            {children}
          </main>
          <Footer />
        </LazyMotion>
      </body>
    </html>
  );
}
