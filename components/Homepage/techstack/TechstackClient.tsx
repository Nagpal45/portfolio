"use client";

import { useEffect, useState } from "react";
import { MotionDiv } from "@/components/ui/motion";
import Link from "next/link";
import "./techstack.css";

interface TechstackContainerProps {
  children: React.ReactNode;
}

export function TechstackContainer({ children }: TechstackContainerProps) {
  const [animateTech, setAnimateTech] = useState(false);

  const scrollTriggerPoints = {
    small: 200,
    medium: 800,
    large: 1000,
  };

  const getDeviceType = (width: number) => {
    if (width <= 1200) {
      return "small";
    } else if (width <= 2000) {
      return "medium";
    } else {
      return "large";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const deviceWidth = window.innerWidth;
      const scrollTrigger = scrollTriggerPoints[getDeviceType(deviceWidth)];

      if (window.scrollY > scrollTrigger && !animateTech) {
        setAnimateTech(true);
      }
    };

    const deviceType = getDeviceType(window.innerWidth);

    if (deviceType === "small") {
      setTimeout(() => {
        setAnimateTech(true);
      }, 1000);
    } else {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animateTech]);

  const techVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <MotionDiv
      className="techStack"
      variants={techVariants}
      initial="hidden"
      animate={animateTech ? "visible" : "hidden"}
    >
      {children}
    </MotionDiv>
  );
}

interface TechstackTabsProps {
  webContent: React.ReactNode;
  dataContent: React.ReactNode;
  otherContent: React.ReactNode;
}

export function TechstackTabs({ 
  webContent, 
  dataContent, 
  otherContent 
}: TechstackTabsProps) {
  const [selectedCategory, setSelectedCategory] = useState("webSkills");

  return (
    <div className="techstackWrapper">
      <div className="skillssection">
        {selectedCategory === "webSkills" && webContent}
        {selectedCategory === "dataSkills" && dataContent}
        {selectedCategory === "otherSkills" && otherContent}
      </div>
      <div className="category">
        <ul>
          <li
            style={{ "--i": 3 } as React.CSSProperties}
            onClick={() => setSelectedCategory("webSkills")}
            className={
              selectedCategory === "webSkills" ? "activeWeb Web" : "Web"
            }
          >
            Development
          </li>
          <li
            style={{ "--i": 2 } as React.CSSProperties}
            onClick={() => setSelectedCategory("dataSkills")}
            className={
              selectedCategory === "dataSkills" ? "activeData Data" : "Data"
            }
          >
            Data Science
          </li>
          <li
            style={{ "--i": 1 } as React.CSSProperties}
            onClick={() => setSelectedCategory("otherSkills")}
            className={
              selectedCategory === "otherSkills"
                ? "activeOther Other"
                : "Other"
            }
          >
            Others
          </li>
        </ul>
      </div>
    </div>
  );
}

export function ProjectLink() {
  return (
    <Link
      href="/projects"
      onClick={() => setTimeout(() => window.scrollTo(0, 0), 500)}
    >
      <div className="downloadResume">
        <div className="contact">View Projects</div>
      </div>
    </Link>
  );
}
