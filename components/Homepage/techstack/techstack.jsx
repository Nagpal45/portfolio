import { useEffect, useState } from "react";
import "./techstack.css";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Techstack() {
  const webSkills = [
    [
      { name: "HTML", logo: "html.png" },
      { name: "CSS", logo: "css.png" },
      { name: "JavaScript", logo: "js.png" },
      { name: "PHP", logo: "php.png" },
    ],
    [
      { name: "React.js", logo: "react.png" },
      { name: "Node.js", logo: "node-js.png" },
      { name: "Express.js", logo: "express.png" },
      { name: "Bootstrap", logo: "bootstrap.png" },
      { name: "Tailwind CSS", logo: "tailwind.png" },
      { name: "SaSS", logo: "sass.png" },
      { name: "Redux", logo: "redux.jpg" },
      { name: "Material UI", logo: "material.png" },
      { name: "jQuery", logo: "jquery.png" },
    ],
    [
      { name: "MongoDB", logo: "mongodb.png" },
      { name: "MySQL", logo: "mysql.png" },
      { name: "Postman", logo: "postman.png" },
      { name: "Git", logo: "git.png" },
      { name: "Render", logo: "render.png" },
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
    [
      { name: "C", logo: "c.png" },
      { name: "C++", logo: "c++.png" },
    ],
    [
      "Data Structures ",
      "Algorithms",
      "OOPS",
      "Operating Systems",
      "DBMS",
      "Computer Architecture",
    ],
    [
      "Adaptability",
      "Problem Solving",
      "Storytelling",
      "Productivity",
      "Organization",
      "Time Management",
    ],
  ];

  const [selectedCategory, setSelectedCategory] = useState("webSkills");
  const [animateTech, setAnimateTech] = useState(false);

  const scrollTriggerPoints = {
    small: 200,
    medium: 800, 
    large: 1000, 
  };

  const getDeviceType = (width) => {
    if (width <= 1200) {
      return 'small'; 
    } else if (width <= 2000) {
      return 'medium'; 
    }
     else {
      return 'large';
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
  
  if (deviceType === 'small') {
    setTimeout(() => {
      setAnimateTech(true);
    }
    , 1000);
  } else {
    window.addEventListener('scroll', handleScroll);
  }

    return () => {
      window.removeEventListener('scroll', handleScroll);
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

  const skillVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    transition: {
      duration: 1,
    },
  };


  return (
    <motion.div className="techStack" variants={techVariants} initial="hidden" animate={animateTech ? "visible" : "hidden"}>
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
      <div className="techstackWrapper">
        <div className="skillssection" >
          {selectedCategory === "webSkills" ? (
            <>
              <motion.div className="line-container"
                initial= {
                  {opacity: 0}
                }
                animate= {
                  {opacity: 1}
                }
                transition= {
                  {duration: 1.5}
                }

              >
                <div className="gray-line"></div>
                <div className="centered-text">Languages</div>
                <div className="gray-line"></div>
              </motion.div>
              <motion.div className="skills"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      duration: 1,
                    },
                  },
                }}
              >
                {webSkills[0].map((skill, i) => (
                  <motion.div
                    style={{ background: "#fcf8e2" }}
                    className="skill"
                    key={i}
                    variants={skillVariants}
                  >
                    <img src={skill.logo} alt={skill.name} loading="lazy" />
                    <div className="skillNameOnHover">{skill.name}</div>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div className="line-container"
                initial= {
                  {opacity: 0}
                }
                animate= {
                  {opacity: 1}
                }
                transition= {
                  {duration: 1.5}
                }
              >
                <div className="gray-line"></div>
                <div className="centered-text">Frameworks & Libraries</div>
                <div className="gray-line"></div>
              </motion.div>
              <motion.div className="skills"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      duration: 1,
                    },
                  },
                }}
              >
                {webSkills[1].map((skill, i) => (
                  <motion.div
                    style={{ background: "#fcf8e2" }}
                    className="skill"
                    key={i}
                    variants={skillVariants}
                  >
                    <img src={skill.logo} alt={skill.name} loading="lazy" />
                    <div className="skillNameOnHover">{skill.name}</div>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div className="line-container"
              initial= {
                  {opacity: 0}
                }
                animate= {
                  {opacity: 1}
                }
                transition= {
                  {duration: 1.5}
                }
              >
                <div className="gray-line"></div>
                <div className="centered-text">Databases & Tools</div>
                <div className="gray-line"></div>
              </motion.div>
              <motion.div className="skills"
              initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      duration: 1,
                    },
                  },
                }}>
                {webSkills[2].map((skill, i) => (
                  <motion.div
                    style={{ background: "#fcf8e2" }}
                    className="skill"
                    key={i}
                    variants={skillVariants}
                  >
                    <img src={skill.logo} alt={skill.name} loading="lazy" />
                    <div className="skillNameOnHover">{skill.name}</div>
                  </motion.div>
                ))}
              </motion.div>
            </>
          ) : null}
          {selectedCategory === "dataSkills" ? (
            <>
              <motion.div className="line-container"
              initial= {
                  {opacity: 0}
                }
                animate= {
                  {opacity: 1}
                }
                transition= {
                  {duration: 1.5}
                }
              >
                <div className="gray-line"></div>
                <div className="centered-text">Languages</div>
                <div className="gray-line"></div>
              </motion.div>
              <motion.div className="skills"
              initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      duration: 1,
                    },
                  },
                }}>
                {dataSkills[0].map((skill, i) => (
                  <motion.div
                    style={{ background: "#fbe8f3" }}
                    className="skill"
                    key={i}
                    variants={skillVariants}
                  >
                    <img src={skill.logo} alt={skill.name} loading="lazy" />
                    <div className="skillNameOnHover">{skill.name}</div>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div className="line-container"
              initial= {
                  {opacity: 0}
                }
                animate= {
                  {opacity: 1}
                }
                transition= {
                  {duration: 1.5}
                }
              >
                <div className="gray-line"></div>
                <div className="centered-text">Libraries</div>
                <div className="gray-line"></div>
              </motion.div>
              <motion.div className="skills"
              initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      duration: 1,
                    },
                  },
                }}>
                {dataSkills[1].map((skill, i) => (
                  <motion.div
                    style={{ background: "#fbe8f3" }}
                    className="skill"
                    key={i}
                    variants={skillVariants}
                  >
                    <img src={skill.logo} alt={skill.name} loading="lazy" />
                    <div className="skillNameOnHover">{skill.name}</div>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div className="line-container"
              initial= {
                  {opacity: 0}
                }
                animate= {
                  {opacity: 1}
                }
                transition= {
                  {duration: 1.5}
                }
              >
                <div className="gray-line"></div>
                <div className="centered-text">Tools</div>
                <div className="gray-line"></div>
              </motion.div>
              <motion.div className="skills"
              initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      duration: 1,
                    },
                  },
                }}>
                {dataSkills[2].map((skill, i) => (
                  <motion.div
                    style={{ background: "#fbe8f3" }}
                    className="skill"
                    key={i}
                    variants={skillVariants}
                  >
                    <img src={skill.logo} alt={skill.name} loading="lazy" />
                    <div className="skillNameOnHover">{skill.name}</div>
                  </motion.div>
                ))}
              </motion.div>
            </>
          ) : null}
          {selectedCategory === "otherSkills" ? (
            <>
              <motion.div className="line-container"
              initial= {
                  {opacity: 0}
                }
                animate= {
                  {opacity: 1}
                }
                transition= {
                  {duration: 1.5}
                }
              >
                <div className="gray-line"></div>
                <div className="centered-text">Languages</div>
                <div className="gray-line"></div>
              </motion.div>
              <motion.div className="skills"
              initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      duration: 1,
                    },
                  },
                }}>
                {otherSkills[0].map((skill, i) => (
                  <motion.div
                    style={{
                      background: "#eddcfc",

                    }}
                    className="skill"
                    key={i}
                    variants={skillVariants}
                  >
                    <img src={skill.logo} alt={skill.name} loading="lazy" />
                    <div className="skillNameOnHover">{skill.name}</div>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div className="line-container"
              initial= {
                  {opacity: 0}
                }
                animate= {
                  {opacity: 1}
                }
                transition= {
                  {duration: 1.5}
                }
              >
                <div className="gray-line"></div>
                <div className="centered-text">Theoretical</div>
                <div className="gray-line"></div>
              </motion.div>
              <motion.div className="skills"
              initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      duration: 1,
                    },
                  },
                }}>
                {otherSkills[1].map((skill, i) => (
                  <motion.div
                    style={{
                      background: "#eddcfc",

                    }}
                    className="skill oval"
                    key={i}
                    variants={skillVariants}
                  >
                    <div className="skillText">{skill}</div>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div className="line-container"
              initial= {
                  {opacity: 0}
                }
                animate= {
                  {opacity: 1}
                }
                transition= {
                  {duration: 1.5}
                }
              >
                <div className="gray-line"></div>
                <div className="centered-text">Interpersonal skills</div>
                <div className="gray-line"></div>
              </motion.div>
              <motion.div className="skills"
              initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      duration: 1,
                    },
                  },
                }}>
                {otherSkills[2].map((skill, i) => (
                  <motion.div
                    style={{
                      background: "#eddcfc",
                    }}
                    className="skill oval"
                    key={i}
                    variants={skillVariants}
                  >
                    <div className="skillText">{skill}</div>
                  </motion.div>
                ))}
              </motion.div>
            </>
          ) : null}
        </div>
        <div className="category">
          <ul>
            <li
              style={{ "--i": 3 }}
              onClick={() => setSelectedCategory("webSkills")}
              className={
                selectedCategory === "webSkills" ? "activeWeb Web" : "Web"
              }
            >
              Web Development
            </li>
            <li
              style={{ "--i": 2 }}
              onClick={() => setSelectedCategory("dataSkills")}
              className={
                selectedCategory === "dataSkills" ? "activeData Data" : "Data"
              }
            >
              Data Science
            </li>
            <li
              style={{ "--i": 1 }}
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
      <div className="viewProjects">
        <div className="viewProjectsText">
          I&apos;ve put my skills to the test in a variety of exciting projects. Dive
          into my portfolio to explore what I&apos;ve created and how I&apos;ve harnessed
          my expertise.
        </div>
        <div className="viewProjectsButton">
        <div className="Navbutton">
          <Link href="/projects" onClick={() => setTimeout(() => window.scrollTo(0, 0), 500)}>
            <div className="downloadResume">
              <div className="contact">View Projects</div>
            </div>
          </Link>
        </div>
        </div>
      </div>
    </motion.div>
  );
}
