import Link from "next/link";
import { MotionDiv, MotionImg, MotionP, MotionSection, MotionH1, MotionH2 } from "@/components/ui/motion";
import DownloadResumeButton from "../ui/DownloadResumeButton";
import "./intro.css";

export default function Intro() {
  const textVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay:0.5} },
  };

  const buttonVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay:0.6 } },
  };

  const imageVariants = {
    initial: { opacity: 0 , y: -20},
    animate: { opacity: 1, y:0 ,transition: { duration: 1, delay:0.5 } },
  };

  const detailVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
  };

  const sqcontVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } },
  };

  const squareVariants = {
    animate: {
      scale: [1, 1.5, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
  };

  

  return (
    <MotionSection className="intro" initial="initial" animate="animate" aria-label="Introduction">
      <div className="main">
        <header className="left">
          <MotionDiv className="headline">
            <MotionH1 className="name" variants={textVariants}>
              Hi. <br />
              I&apos;m Vaibhav.
            </MotionH1>
            <MotionDiv className="details" variants={detailVariants}>
              <MotionH2 className="detail">
                <u>Software</u> Engineer
              </MotionH2>
              <MotionH2 className="detail">
                Building <u>Scalable Full-Stack Systems</u>
              </MotionH2>
            </MotionDiv>
          </MotionDiv>
          <div className="introButtons">
            <MotionDiv
              className="Navbutton"
              variants={buttonVariants}
            >
              <DownloadResumeButton />
            </MotionDiv>
            <MotionDiv
              className="Navbutton"
              variants={buttonVariants}
            >
              <Link href="/contact" className="downloadResume" aria-label="Contact Me">
                <span className="contact">Contact me</span>
              </Link>
            </MotionDiv>
          </div>
        </header>
        <div className="right">
          <div className="top" aria-hidden="true">
            <MotionDiv className="squaresA" variants={sqcontVariants}>
              <MotionDiv
                className="square1"
                variants={squareVariants}
              ></MotionDiv>
              <MotionDiv
                className="square4"
                variants={squareVariants}
              ></MotionDiv>
            </MotionDiv>
          </div>
          <div className="center">
            <MotionImg
              className="image"
              src="/Me.jpeg"
              alt="Portrait of Vaibhav Nagpal"
              variants={imageVariants}
              width={300}
              height={300}
              fetchPriority="high"
            />
          </div>
          <div className="bottom" aria-hidden="true">
            <MotionDiv className="squaresB" variants={sqcontVariants}>
              <MotionDiv
                className="square2"
                variants={squareVariants}
              ></MotionDiv>
              <MotionDiv
                className="square3"
                variants={squareVariants}
              ></MotionDiv>
            </MotionDiv>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
