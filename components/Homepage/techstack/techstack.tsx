import Image from "next/image";
import "./techstack.css";
import { 
  TechstackContainer, 
  TechstackTabs, 
  ProjectLink 
} from "./TechstackClient";
import { MotionDiv } from "@/components/ui/motion";

export default function Techstack() {
  const webSkills = [
    [
      { name: "JavaScript (ES6+)", logo: "js.png" },
      { name: "TypeScript", logo: "typescript.png" },
      { name: "Python", logo: "python.png" },
      { name: "HTML5", logo: "html.png" },
      { name: "CSS3/SASS", logo: "sass.png" },
    ],
    [
      { name: "React.js", logo: "react.png" },
      { name: "Next.js", logo: "nextjs.png" },
      { name: "React Native", logo: "react.png" },
      { name: "Redux", logo: "redux.jpg" },
      { name: "Tailwind CSS", logo: "tailwind.png" },
      { name: "Framer Motion", logo: "framer.png" },
    ],
    [
      { name: "Node.js", logo: "node-js.png" },
      { name: "Express.js", logo: "express.png" },
      { name: "MongoDB", logo: "mongodb.png" },
      { name: " PostgreSQL", logo: "postgresql.png" },
      { name: "Redis", logo: "redis.png" },
      { name: "Docker", logo: "docker.png" },
      { name: "AWS", logo: "aws.png" },
      { name: "Cloudflare", logo: "cloudflare.png" },
    ],
  ];

  const dataSkills = [
    [
      { name: "Python", logo: "python.png" },
      { name: "SQL", logo: "sql.png" },
    ],
    [
      { name: "NumPy", logo: "numpy.png" },
      { name: "Pandas", logo: "pandas.png" },
      { name: "Matplotlib", logo: "matplotlib.png" },
      { name: "Seaborn", logo: "seaborn.png" },
      { name: "Scikit-learn", logo: "scikit.png" },
      { name: "Beautiful Soup", logo: "soup.png" },
    ],
    [
      { name: "Jupyter", logo: "jupyter.png" },
      { name: "Git", logo: "git.png" },
      { name: "Excel", logo: "excel.png" },
    ],
  ];

  const otherSkills = [
    [],
    [
      "DSA",
      "OOPS",
      "DBMS",
      "Operating Systems",
      "System Design",
    ],
    [
      "Adaptability",
      "Problem Solving",
      "Team Collaboration",
      "Technical Leadership",
      "Project Management",
      "Communication",
    ],
  ];

  const skillVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const lineContainerVariants = {
    opacity: 0
  };
  
  const lineContainerAnimate = {
    opacity: 1
  };
  
  const lineContainerTransition = {
    duration: 1.5
  };

  const skillsContainerVariants = {
      visible: {
        transition: {
          staggerChildren: 0.1,
          duration: 1,
        },
      },
  }

  const webContent = (
    <>
      <MotionDiv
        className="line-container"
        initial={lineContainerVariants}
        animate={lineContainerAnimate}
        transition={lineContainerTransition}
      >
        <div className="gray-line"></div>
        <div className="centered-text">Languages</div>
        <div className="gray-line"></div>
      </MotionDiv>
      <MotionDiv
        className="skills"
        initial="hidden"
        animate="visible"
        variants={skillsContainerVariants}
      >
        {webSkills[0].map((skill, i) => (
          <MotionDiv
            style={{ background: "#fcf8e2" }}
            className="skill"
            key={i}
            variants={skillVariants}
          >
            <Image src={`/${skill.logo}`} alt={skill.name} loading="lazy" fill style={{ objectFit: 'contain' }} />
            <div className="skillNameOnHover">{skill.name}</div>
          </MotionDiv>
        ))}
      </MotionDiv>
      <MotionDiv
        className="line-container"
        initial={lineContainerVariants}
        animate={lineContainerAnimate}
        transition={lineContainerTransition}
      >
        <div className="gray-line"></div>
        <div className="centered-text">Frontend & UI</div>
        <div className="gray-line"></div>
      </MotionDiv>
      <MotionDiv
        className="skills"
        initial="hidden"
        animate="visible"
        variants={skillsContainerVariants}
      >
        {webSkills[1].map((skill, i) => (
          <MotionDiv
            style={{ background: "#fcf8e2" }}
            className="skill"
            key={i}
            variants={skillVariants}
          >
            <Image src={`/${skill.logo}`} alt={skill.name} loading="lazy" fill style={{ objectFit: 'contain' }} />
            <div className="skillNameOnHover">{skill.name}</div>
          </MotionDiv>
        ))}
      </MotionDiv>
      <MotionDiv
        className="line-container"
        initial={lineContainerVariants}
        animate={lineContainerAnimate}
        transition={lineContainerTransition}
      >
        <div className="gray-line"></div>
        <div className="centered-text">Backend & Cloud/DevOps</div>
        <div className="gray-line"></div>
      </MotionDiv>
      <MotionDiv
        className="skills"
        initial="hidden"
        animate="visible"
        variants={skillsContainerVariants}
      >
        {webSkills[2].map((skill, i) => (
          <MotionDiv
            style={{ background: "#fcf8e2" }}
            className="skill"
            key={i}
            variants={skillVariants}
          >
            <Image src={`/${skill.logo}`} alt={skill.name} loading="lazy" fill style={{ objectFit: 'contain' }} />
            <div className="skillNameOnHover">{skill.name}</div>
          </MotionDiv>
        ))}
      </MotionDiv>
    </>
  );

  const dataContent = (
    <>
      <MotionDiv
        className="line-container"
        initial={lineContainerVariants}
        animate={lineContainerAnimate}
        transition={lineContainerTransition}
      >
        <div className="gray-line"></div>
        <div className="centered-text">Languages</div>
        <div className="gray-line"></div>
      </MotionDiv>
      <MotionDiv
        className="skills"
        initial="hidden"
        animate="visible"
        variants={skillsContainerVariants}
      >
        {dataSkills[0].map((skill, i) => (
          <MotionDiv
            style={{ background: "#fbe8f3" }}
            className="skill"
            key={i}
            variants={skillVariants}
          >
            <Image src={`/${skill.logo}`} alt={skill.name} loading="lazy" fill style={{ objectFit: 'contain' }} />
            <div className="skillNameOnHover">{skill.name}</div>
          </MotionDiv>
        ))}
      </MotionDiv>
      <MotionDiv
        className="line-container"
        initial={lineContainerVariants}
        animate={lineContainerAnimate}
        transition={lineContainerTransition}
      >
        <div className="gray-line"></div>
        <div className="centered-text">Libraries</div>
        <div className="gray-line"></div>
      </MotionDiv>
      <MotionDiv
        className="skills"
        initial="hidden"
        animate="visible"
        variants={skillsContainerVariants}
      >
        {dataSkills[1].map((skill, i) => (
          <MotionDiv
            style={{ background: "#fbe8f3" }}
            className="skill"
            key={i}
            variants={skillVariants}
          >
            <Image src={`/${skill.logo}`} alt={skill.name} loading="lazy" fill style={{ objectFit: 'contain' }} />
            <div className="skillNameOnHover">{skill.name}</div>
          </MotionDiv>
        ))}
      </MotionDiv>
      <MotionDiv
        className="line-container"
        initial={lineContainerVariants}
        animate={lineContainerAnimate}
        transition={lineContainerTransition}
      >
        <div className="gray-line"></div>
        <div className="centered-text">Tools</div>
        <div className="gray-line"></div>
      </MotionDiv>
      <MotionDiv
        className="skills"
        initial="hidden"
        animate="visible"
        variants={skillsContainerVariants}
      >
        {dataSkills[2].map((skill, i) => (
          <MotionDiv
            style={{ background: "#fbe8f3" }}
            className="skill"
            key={i}
            variants={skillVariants}
          >
            <Image src={`/${skill.logo}`} alt={skill.name} loading="lazy" fill style={{ objectFit: 'contain' }} />
            <div className="skillNameOnHover">{skill.name}</div>
          </MotionDiv>
        ))}
      </MotionDiv>
    </>
  );

  const otherContent = (
    <>
      <MotionDiv
        className="line-container"
        initial={lineContainerVariants}
        animate={lineContainerAnimate}
        transition={lineContainerTransition}
      >
        <div className="gray-line"></div>
        <div className="centered-text">Core Computer Science</div>
        <div className="gray-line"></div>
      </MotionDiv>
      <MotionDiv
        className="skills"
        initial="hidden"
        animate="visible"
        variants={skillsContainerVariants}
      >
        {otherSkills[1].map((skill, i) => (
          <MotionDiv
            style={{
              background: "#eddcfc",
            }}
            className="skill oval"
            key={i}
            variants={skillVariants}
          >
            <div className="skillText">{skill}</div>
          </MotionDiv>
        ))}
      </MotionDiv>
      <MotionDiv
        className="line-container"
        initial={lineContainerVariants}
        animate={lineContainerAnimate}
        transition={lineContainerTransition}
      >
        <div className="gray-line"></div>
        <div className="centered-text">Interpersonal Skills</div>
        <div className="gray-line"></div>
      </MotionDiv>
      <MotionDiv
        className="skills"
        initial="hidden"
        animate="visible"
        variants={skillsContainerVariants}
      >
        {otherSkills[2].map((skill, i) => (
          <MotionDiv
            style={{
              background: "#eddcfc",
            }}
            className="skill oval"
            key={i}
            variants={skillVariants}
          >
            <div className="skillText">{skill}</div>
          </MotionDiv>
        ))}
      </MotionDiv>
    </>
  );

  return (
    <TechstackContainer>
      <div className="techHeading">
        <div className="skillsHeading">Skill Set</div>
        <div className="skillsText">
          The technical abilities, combined with my strong interpersonal skills,
          enable me to not only create innovative digital solutions but also
          collaborate effectively within a team. Explore the various dimensions
          of my skillset below, and let&apos;s embark on a journey where
          technology and human connection converge to create impactful results.
        </div>
      </div>
      
      <TechstackTabs 
        webContent={webContent}
        dataContent={dataContent}
        otherContent={otherContent}
      />

      <div className="viewProjects">
        <div className="viewProjectsText">
          I&apos;ve put my skills to the test in a variety of exciting projects. Dive
          into my portfolio to explore what I&apos;ve created and how I&apos;ve harnessed
          my expertise.
        </div>
        <div className="viewProjectsButton">
          <div className="Navbutton">
            <ProjectLink />
          </div>
        </div>
      </div>
    </TechstackContainer>
  );
}
