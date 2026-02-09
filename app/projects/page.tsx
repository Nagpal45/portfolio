import Link from "next/link";
import "./projects.css";
import { 
  MotionDiv, 
  MotionSection, 
  MotionArticle, 
  MotionH2, 
  MotionP 
} from "@/components/ui/motion";
import { Metadata } from "next";
import { 
  ImageSlider,  
  ProjectVideo 
} from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects | Vaibhav Nagpal",
  description: "Explore my portfolio of software engineering projects, including full-stack SaaS applications, AI integrations, mobile apps, and system architecture designs.",
  openGraph: {
    title: "Projects | Vaibhav Nagpal",
    description: "Explore my portfolio of software engineering projects, including full-stack SaaS applications, AI integrations, mobile apps, and system architecture designs.",
    url: "https://vaibhavnagpal.tech/projects",
    type: "website",
  },
};

const images = ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png"];

interface ProjectData {
  title: string;
  videoUrl?: string;
  content: string;
  repoLink: string;
  status: string;
  techs: string[];
}

const projectsData: ProjectData[] = [
  {
    title: "Chorus",
    videoUrl:
      "https://cdn.builder.io/o/assets%2F2bcee167abe2498785ea5dbaf7ddb514%2F8b0e69041a874a63a362c6a62a626b49%2Fcompressed?apiKey=2bcee167abe2498785ea5dbaf7ddb514&token=8b0e69041a874a63a362c6a62a626b49&alt=media&optimized=true",
    content:
      "A music streaming platform that allows users to discover and listen to music. Users can create and customize playlists, explore new releases, and get recommendations based on their mood. The platform also features a gesture control system that allows users to play, pause, and skip songs using hand gestures.",
    repoLink: "https://github.com/Nagpal45/Chorus",
    status: "April 2024",
    techs: [
      "Next.js",
      "MongoDB",
      "Spotify API",
      "Fingerpose",
      "Tensorflow.js",
    ],
  },
  {
    title: "Company Portfolio",
    videoUrl:
      "https://cdn.builder.io/o/assets%2F2bcee167abe2498785ea5dbaf7ddb514%2F9484fd5040034f2ea528be702856a3c9%2Fcompressed?apiKey=2bcee167abe2498785ea5dbaf7ddb514&token=9484fd5040034f2ea528be702856a3c9&alt=media&optimized=true",
    content:
      "A company portfolio website that showcases the company's services and blogs. The website features a clean and modern design, with easy navigation and user-friendly interface. Users can contact the company through the contact form and subscribe to the newsletter to stay updated on the latest news and updates.",
    repoLink: "https://github.com/Nagpal45/company-portfolio",
    status: "Jan 2024",
    techs: ["Next.js", "Next-auth"],
  },
  {
    title: "EcoVoyage",
    videoUrl:
      "https://cdn.builder.io/o/assets%2F2bcee167abe2498785ea5dbaf7ddb514%2F653dc5feba9b4150aabbb5df2b01dd47%2Fcompressed?apiKey=2bcee167abe2498785ea5dbaf7ddb514&token=653dc5feba9b4150aabbb5df2b01dd47&alt=media&optimized=true",
    content:
      "A web application designed to assist travellers in planning environmentally conscious and sustainable trips by providing users with information about transportation options, accommodations, and activities for their chosen destination.The platform estimates the carbon footprint associated with various travel choices using ML and will recommend eco-friendly alternatives.",
    repoLink: "https://github.com/Nagpal45/Ecovoyage",
    status: "Nov 2023",
    techs: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Python",
      "Flask",
      "CSS",
    ],
  },
  {
    title: "Fitness Class Analysis",
    videoUrl:
      "https://cdn.builder.io/o/assets%2F2bcee167abe2498785ea5dbaf7ddb514%2F14e63b3f4f40454fac8f084d07dcc6c4%2Fcompressed?apiKey=2bcee167abe2498785ea5dbaf7ddb514&token=14e63b3f4f40454fac8f084d07dcc6c4&alt=media&optimized=true",
    content:
      "Aims to explore and understand patterns in attendance based on various factors such as membership duration, weight, days before booking, day of the week, time of the class, and category of the class.",
    repoLink:
      "https://github.com/Nagpal45/fitness-class-dataset-analysis-and-prediction",
    status: "Aug 2023",
    techs: ["Python", "Pandas", "Matplotlib", "Scikit-learn"],
  },
  {
    title: "Admin Dashboard",
    videoUrl:
      "https://cdn.builder.io/o/assets%2F2bcee167abe2498785ea5dbaf7ddb514%2F77f74b31db6b446e9c0ed5fa084c387b%2Fcompressed?apiKey=2bcee167abe2498785ea5dbaf7ddb514&token=77f74b31db6b446e9c0ed5fa084c387b&alt=media&optimized=true",
    content:
      "Basic UI designed to facilitate seamless management of users, products, and orders, offering a comprehensive suite of CRUD operations for effortless administration. Dive into user profiles, navigate through product details, gain valuable insights through analytics, optimize team performance with staff details, and foster direct communication by accessing user feedback and messages.",
    repoLink: "https://github.com/Nagpal45/Admin-Dashboard",
    status: "July 2023",
    techs: ["React.js", "Material-UI", "CSS"],
  },
  {
    title: "Quiz Game",
    videoUrl:
      "https://cdn.builder.io/o/assets%2F2bcee167abe2498785ea5dbaf7ddb514%2F70444244effe41698c41e160e807745e%2Fcompressed?apiKey=2bcee167abe2498785ea5dbaf7ddb514&token=70444244effe41698c41e160e807745e&alt=media&optimized=true",
    content:
      "A simple online quiz game that brings the excitement of the iconic Indian television show, Kaun Banega Crorepati (KBC), to the digital realm. Test your knowledge on a wide range of topics with a user-friendly interface reminiscent of the KBC set. From history and Bollywood to current affairs and sports, the game covers it all, ensuring a dynamic and engaging quiz experience for players of all ages.",
    repoLink: "https://github.com/Nagpal45/Quiz-app",
    status: "June 2023",
    techs: ["React.js", "CSS", "JavaScript"],
  },
  {
    title: "Social Media App",
    videoUrl:
      "https://cdn.builder.io/o/assets%2F2bcee167abe2498785ea5dbaf7ddb514%2Ffcc761b376fc42c69d0f5e2b4fc01a59%2Fcompressed?apiKey=2bcee167abe2498785ea5dbaf7ddb514&token=fcc761b376fc42c69d0f5e2b4fc01a59&alt=media&optimized=true",
    content:
      "A social media platform that allows users to create and share posts, follow other users, and like and comment on posts. Users can also update their profile information and upload profile pictures. The platform also features a chat functionality that allows users to send and receive messages.",
    repoLink: "https://github.com/Nagpal45/Social-Media-App",
    status: "June 2023",
    techs: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "CSS",
      "JavaScript",
    ],
  },
  {
    title: "Explore NCR",
    videoUrl:
      "https://cdn.builder.io/o/assets%2F2bcee167abe2498785ea5dbaf7ddb514%2Ffb66f05c2de04f69bb27eb90366f19a9%2Fcompressed?apiKey=2bcee167abe2498785ea5dbaf7ddb514&token=fb66f05c2de04f69bb27eb90366f19a9&alt=media&optimized=true",
    content:
      "Implementation of Floyd-Warshall algorithm to find the shortest path between any two places in the National Capital Region (NCR). The application also provides users with the shortest path if user wants to visit more than two places, along with the total distance and time taken to travel between the places.",
    repoLink: "https://github.com/Nagpal45/Route-finder",
    status: "Mar 2023",
    techs: ["C++", "Floyd-Warshall Algorithm"],
  },
  {
    title: "Mini Search Engine",
    videoUrl:
      "https://cdn.builder.io/o/assets%2F2bcee167abe2498785ea5dbaf7ddb514%2F2f5f952782ae47c39b7fb9e1f4c8c06c%2Fcompressed?apiKey=2bcee167abe2498785ea5dbaf7ddb514&token=2f5f952782ae47c39b7fb9e1f4c8c06c&alt=media&optimized=true",
    content:
      "Implementation of Tries data structure to provide users with list of movies / music that match their search query. The user can select search to either match exactly, only prefix or list all if a character(s) is present.",
    repoLink: "https://github.com/Nagpal45/Search-Engine",
    status: "Dec 2022",
    techs: ["C++", "Tries"],
  },
  {
    title: "DoneChore",
    videoUrl:
      "https://cdn.builder.io/o/assets%2F2bcee167abe2498785ea5dbaf7ddb514%2F9b62668934ba465ab5207b082fb8ed99%2Fcompressed?apiKey=2bcee167abe2498785ea5dbaf7ddb514&token=9b62668934ba465ab5207b082fb8ed99&alt=media&optimized=true",
    content:
      "A To-do list application with user authentication that allows users to create, update, and delete tasks, once they are logged in. They can create and access multiple lists and add tasks to each list separately simply by typing the list name.",
    repoLink: "https://github.com/Nagpal45/DoneChore",
    status: "Dec 2022",
    techs: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "FlatQuest",
    content:
      "A Real Estate Platform to look for accomodations and find your new home. Enables search based on property type and more, enhancing user experience. Added features allowing users to save preferred properties and post new listings, increasing platform utility. Implemented detailed property views and chat functionality facilitating direct communication betweenusers for inquiries, improving user interaction",
    repoLink: "https://github.com/Nagpal45/FlatQuest",
    status: "Sep 2024",
    techs: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Socket.io",
      "Prisma",
      "Zustand",
    ],
  },
  {
    title: "Codaborate",
    content:
      "Engineered a RAG-based SaaS to query massive repositories and retrieve context-aware code snippets.Solved unclear version history by integrating Gemini AI to auto-summarize messy commit messages. Implemented a credit-based Stripe billing system to monetize features like meeting transcription and repo analysis.",
    repoLink: "https://github.com/Nagpal45/Codaborate",
    status: "Dec 2024",
    techs: [
      "Next.js",
      "Tailwind CSS",
      "Clerk",
      "tRPC",
      "AssemblyAI",
      "Stripe",
      "Supabase",
      "Gemini AI",
      "RAG",
    ],
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Software Projects by Vaibhav Nagpal",
  description: "A collection of software engineering projects, web applications, and system designs by Vaibhav Nagpal.",
  url: "https://vaibhavnagpal.tech/projects",
  itemListElement: projectsData.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "SoftwareApplication",
      name: project.title,
      description: project.content,
      applicationCategory: "Web Application",
      operatingSystem: "Any",
      keywords: project.techs.join(", "),
      url: project.repoLink,
      author: {
        "@type": "Person",
        name: "Vaibhav Nagpal",
      },
    },
  })),
};

export default function Projects() {
  const latestProject = projectsData[11];
  const featuredProject = projectsData[10];
  const otherProjects = projectsData.slice(0, 10);

  const images = ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png"];

  return (
    <MotionSection
      className="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      <MotionDiv
        className="portfolioHead"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h1 className="portfolioHeading">Portfolio</h1>
        <p className="portfolioText">
          These projects highlight my skills, creativity, and passion for
          programming. Each project represents a unique journey of
          problem-solving, innovation, and collaboration. Explore the diverse
          range of challenges I&apos;ve taken on and the solutions I&apos;ve
          crafted to make a positive impact.
        </p>
      </MotionDiv>
      <MotionH2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="portfolioHeading projectHeading"
      >
        Latest Projects
      </MotionH2>
      
      {/* Latest Project: Codaborate */}
      <MotionArticle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="projectMain project4"
        style={{ width: "90%" }}
      >
        <div className="projHead">
          <h3 className="projTitle">{latestProject.title}</h3>
          <div className="time">
            <time className="timeText">
              <span>•</span> {latestProject.status}
            </time>
          </div>
        </div>
        <div className="projContent">
          <p className="projText">{latestProject.content}</p>
          <div className="projectTechs">
            {latestProject.techs.map((tech, index) => (
              <div key={index} className="projTech">
                {tech}
              </div>
            ))}
          </div>
          <div className="knowMore">
            <a
              href={latestProject.repoLink}
              target="_blank"
              rel="noreferrer"
              className="knowMoreLink"
              aria-label={`View code for ${latestProject.title}`}
            >
              View Code
            </a>
          </div>
        </div>
        
        <ImageSlider images={images} />
      </MotionArticle>

      {/* Featured Project: FlatQuest */}
      <MotionArticle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="projectMain2 project3"
        style={{ width: "90%" }}
      >
        <div className="projHead">
          <h3 className="projTitle">{featuredProject.title}</h3>
          <div className="time">
            <time className="timeText">
              <span>•</span> {featuredProject.status}
            </time>
          </div>
        </div>
        <div className="projContent">
          <p className="projText">{featuredProject.content}</p>
          <div className="projectTechs">
            {featuredProject.techs.map((tech, index) => (
              <div key={index} className="projTech">
                {tech}
              </div>
            ))}
          </div>
          <div className="knowMore">
            <a
              href={featuredProject.repoLink}
              target="_blank"
              rel="noreferrer"
              className="knowMoreLink"
              aria-label={`View code for ${featuredProject.title}`}
            >
              View Code
            </a>
          </div>
        </div>
        <iframe
          src="https://flat-quest.vercel.app/"
          title={`Preview of ${featuredProject.title}`}
          className="projectRecent"
        ></iframe>
      </MotionArticle>

      <h2 className="portfolioHeading projectHeading">Other Projects</h2>
      <p className="videoPlayText">* Click on the video to play *</p>
      
      <MotionDiv
        className="projectsContainer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        {otherProjects.map((project, index) => (
          <article className={`project project${index + 1}`} key={index}>
            <div className="projHead">
              <h3 className="projTitle">{project.title}</h3>
              <div className="time">
                <time className="timeText">
                  <span>•</span> {project.status}
                </time>
              </div>
            </div>
            <div className="projContent">
              <p className="projText">{project.content}</p>
              <div className="projectTechs">
                {project.techs.map((tech, index) => (
                  <div key={index} className="projTech">
                    {tech}
                  </div>
                ))}
              </div>
              <div className="knowMore">
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="knowMoreLink"
                  aria-label={`View code for ${project.title}`}
                >
                  View Code
                </a>
              </div>
            </div>
            {project.videoUrl && (
                <ProjectVideo src={project.videoUrl} />
            )}
          </article>
        ))}
      </MotionDiv>
      <div
        className="viewProjects"
        style={{
          marginTop: "5vw",
          marginBottom: "5vw",
        }}
      >
        <div className="viewProjectsText">
          Thank you for exploring my portfolio and projects!
          <br /> If you&apos;re impressed with what you&apos;ve seen and are
          interested in collaborating on a project, I&apos;d love to hear from
          you. Let&apos;s turn your ideas into reality and create something
          amazing together. <br />
          Also, feel free to reach out if you have any questions, suggestions or
          just want to say hi!
        </div>
        <div className="viewProjectsButton">
          <div className="Navbutton">
            <Link href="/contact">
              <div className="downloadResume">
                <div className="contact">Contact Me</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
