import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
  // Note: These headers will only work if you remove 'output: "export"' and use 'next start'
  // For static exports, configure these headers on your hosting provider (Vercel, Netlify, etc.)
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self';",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.clarity.ms;",
              "style-src 'self' 'unsafe-inline';",
              "img-src 'self' blob: data: https://cdn.builder.io https://c.bing.com;",
              "media-src 'self' https://cdn.builder.io;",
              "font-src 'self';",
              "connect-src 'self' https://api.emailjs.com https://*.clarity.ms https://c.bing.com;",
              "frame-src 'self' https://flat-quest.vercel.app;",
            ].join(" "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
