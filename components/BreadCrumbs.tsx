"use client";

import { usePathname } from "next/navigation";

export default function BreadcrumbSchema() {
  const pathname = usePathname();
  
  if (pathname === "/") return null;

  const segments = pathname.split("/").filter((item) => item !== "");

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://vaibhavnagpal.tech"
      },
      ...segments.map((segment, index) => {
        const href = `https://vaibhavnagpal.tech/${segments.slice(0, index + 1).join("/")}`;
        const name = segment.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
        
        return {
          "@type": "ListItem",
          "position": index + 2,
          "name": name,
          "item": href
        };
      })
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}