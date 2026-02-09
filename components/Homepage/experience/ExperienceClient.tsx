"use client";
import { createContext, useContext, useRef, useState } from "react";
import { useScroll, useTransform, m } from "framer-motion";
import "./experience.css";

interface ExperienceContextType {
  scrollYProgress: any;
  timelineProgress: any;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const ExperienceContext = createContext<ExperienceContextType | null>(null);

export function useExperienceContext() {
  const context = useContext(ExperienceContext);
  if (!context) {
    throw new Error("useExperienceContext must be used within ExperienceContainer");
  }
  return context;
}

export function ExperienceContainer({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const timelineProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ExperienceContext.Provider
      value={{ scrollYProgress, timelineProgress, activeIndex, setActiveIndex }}
    >
      <m.section
        ref={containerRef}
        className="experience-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        aria-label="Work Experience History"
      >
        {children}
      </m.section>
    </ExperienceContext.Provider>
  );
}

export function ExperienceTimeline({ count }: { count: number }) {
  const { timelineProgress, activeIndex } = useExperienceContext();

  return (
    <div className="timeline-container" aria-hidden="true">
      <div className="timeline-track">
        <m.div className="timeline-progress" style={{ height: timelineProgress }} />
        {Array.from({ length: count }).map((_, index) => (
          <m.div
            key={index}
            className={`timeline-dot ${activeIndex >= index ? "active" : ""}`}
            style={{
              top: `${(index / (count - 1)) * 100}%`,
            }}
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        ))}
      </div>
    </div>
  );
}

export function ExperienceViewportSpy({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) {
  const { setActiveIndex } = useExperienceContext();

  return (
    <m.article
        className="experience-item"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
        onViewportEnter={() => setActiveIndex(index)}
    >
      {children}
    </m.article>
  );
}
