import Image from "next/image";
import "./experience.css";
import { 
  ExperienceContainer, 
  ExperienceTimeline, 
  ExperienceViewportSpy 
} from "./ExperienceClient";
import { 
  MotionH2, 
  MotionDiv, 
  MotionH3, 
  MotionA, 
  MotionUl, 
  MotionLi,
  MotionTime 
} from "@/components/ui/motion";

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
  return (
    <ExperienceContainer>
      <div className="experience-container">
        <MotionH2
          className="experience-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Work Experience
        </MotionH2>

        <div className="experience-content">
          {/* Continuous Timeline */}
          <ExperienceTimeline count={experienceData.length} />

          {/* Experience Items */}
          <div className="experience-items">
            {experienceData.map((item, index) => (
              <ExperienceViewportSpy key={index} index={index}>
                {/* Content */}
                <div className="experience-details">
                  {/* Info with image inside */}
                  <div className="experience-info">
                    <div className="experience-content">
                      <div className="experience-text">
                        <MotionTime
                          className="experience-date"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          viewport={{ once: true }}
                          dateTime={item.date} // Best effort, or use a simplified YYYY-MM format if available
                        >
                          {item.date}
                        </MotionTime>
                        
                        <MotionH3
                          className="experience-job-title"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          viewport={{ once: true }}
                        >
                          {item.title}
                        </MotionH3>
                        
                        <MotionA
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
                        </MotionA>

                        <MotionUl
                          className="experience-description"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.6 }}
                          viewport={{ once: true }}
                        >
                          {item.description.map((desc: string, descIndex: number) => (
                            <MotionLi
                              key={descIndex}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.7 + descIndex * 0.1 }}
                              viewport={{ once: true }}
                            >
                              {desc}
                            </MotionLi>
                          ))}
                        </MotionUl>
                      </div>

                      {/* Image on the right inside the card */}
                      {item.image && (
                         <MotionA
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
                          <Image src={item.image.src} alt={item.image.alt} width={300} height={200} className="experience-image" />
                        </MotionA>
                      )}
                    </div>
                  </div>
                </div>
              </ExperienceViewportSpy>
            ))}
          </div>
        </div>
      </div>
    </ExperienceContainer>
  );
}
