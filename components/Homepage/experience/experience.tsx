"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import "./experience.css";

interface ExperienceItem {
  date: string;
  title: string;
  company: string;
  description: string[];
  companyUrl: string;
  image?: {
    src: string;
    alt: string;
    url: string;
  };
}

const experienceData: ExperienceItem[] = [
  {
    date: "Aug 2025 – Present",
    title: "Software Engineer",
    company: "Laika AI",
    description: [
      "Engineered frontend architecture across web, mobile and browser extension, maintaining consistent UI and UX standards.",
      "Migrated CMS infrastructure to self-hosted AWS EC2 using Docker and Nginx, reducing infrastructure costs by 40%.",
      "Developed interactive data visualization dashboards using D3.js, Recharts, and Highcharts to render real-time analytics.",
      "Designed and deployed scalable SSR/ISR solutions with Cloudflare caching, improving page load times by 60%."
    ],
    companyUrl: "https://laikalabs.ai/app",
    image: { src: "/laika1.png", alt: "Laika AI Dashboard", url: "https://laikalabs.ai" }
  },
  {
    date: "Feb 2025 – July 2025",
    title: "Software Developer Intern",
    company: "Laika AI",
    description: [
      "Built pixel-perfect UI from Figma with animations and RESTful API integrations, driving a 50% increase in engagement.",
      "Optimized technical SEO using semantic HTML5 and structured data, improving search engine crawlability and indexing.",
      "Implemented Web3 wallet authentication using wagmi and ethers.js, enabling seamless blockchain-based user interactions."
    ],
    companyUrl: "https://laikalabs.ai",
    image: { src: "/laika2.png", alt: "Web3 Integration", url: "https://laikalabs.ai" }
  },
  {
    date: "May 2024 – July 2024",
    title: "Web Developer Intern",
    company: "Mythyaverse",
    description: [
      "Developed responsive web components integrating Firebase, WebRTC, and AI-based audio and video workflows.",
      "Authored unit and integration tests using Jest, achieving 95% test coverage and reducing production defects."
    ],
    companyUrl: "https://mythyaverse.com",
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const timelineProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.section
      ref={containerRef}
      className="experience-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="experience-container">
        <motion.h2
          className="experience-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Work Experience
        </motion.h2>

        <div className="experience-content">
          {/* Continuous Timeline */}
          <div className="timeline-container">
            <div className="timeline-track">
              <motion.div 
                className="timeline-progress"
                style={{ 
                  height: timelineProgress
                }}
              />
              {experienceData.map((_, index) => (
                <motion.div
                  key={index}
                  className={`timeline-dot ${activeIndex >= index ? 'active' : ''}`}
                  style={{
                    top: `${(index / (experienceData.length - 1)) * 100}%`,
                  }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              ))}
            </div>
          </div>

          {/* Experience Items */}
          <div className="experience-items">
            {experienceData.map((item, index) => (
              <motion.div
                key={index}
                className="experience-item"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                onViewportEnter={() => setActiveIndex(index)}
              >
                {/* Content */}
                <div className="experience-details">
                  {/* Info with image inside */}
                  <div className="experience-info">
                    <div className="experience-content">
                      <div className="experience-text">
                        <motion.div
                          className="experience-date"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          viewport={{ once: true }}
                        >
                          {item.date}
                        </motion.div>
                        
                        <motion.h3
                          className="experience-job-title"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          viewport={{ once: true }}
                        >
                          {item.title}
                        </motion.h3>
                        
                        <motion.a
                          href={item.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="experience-company"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                        >
                          @ {item.company}
                        </motion.a>

                        <motion.ul
                          className="experience-description"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.6 }}
                          viewport={{ once: true }}
                        >
                          {item.description.map((desc: string, descIndex: number) => (
                            <motion.li
                              key={descIndex}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.7 + descIndex * 0.1 }}
                              viewport={{ once: true }}
                            >
                              {desc}
                            </motion.li>
                          ))}
                        </motion.ul>
                      </div>

                      {/* Image on the right inside the card */}
                      {item.image && <motion.a
                        href={item.image.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="experience-card"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                        viewport={{ once: true }}
                        whileHover={{ 
                          scale: 1.05,
                          transition: { type: "spring", stiffness: 300 }
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <img src={item.image.src} alt={item.image.alt} />
                      </motion.a>}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}