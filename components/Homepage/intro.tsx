import Link from "next/link";
import { MotionDiv, MotionImg, MotionP } from "@/components/ui/motion";

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
    <MotionDiv className="intro" initial="initial" animate="animate">
      <MotionDiv className="main" >
        <div className="left">
          <MotionDiv className="headline" >
            <MotionP className="name" variants={textVariants}>
              Hi. <br />
              I&apos;m Vaibhav.
            </MotionP>
            <MotionDiv className="details" variants={detailVariants}>
              <MotionP className="detail" >
                A <u>Web</u> Developer.
              </MotionP>
              <MotionP className="detail">
                A <u>Data Science</u> Enthusiast.
              </MotionP>
            </MotionDiv>
          </MotionDiv>
          <div className="introButtons">
            <MotionDiv
              className="Navbutton"
              variants={buttonVariants}
            >

            </MotionDiv>
            <MotionDiv
              className="Navbutton"
              variants={buttonVariants}
            >
            <Link href="/contact">
              <div className="downloadResume">
                <div className="contact">Contact me</div>
              </div>
            </Link>
            </MotionDiv>
          </div>
        </div>
        <div className="right">
          <div className="top">
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
              alt=""
              variants={imageVariants}
            />
          </div>
          <div className="bottom">
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
      </MotionDiv>
    </MotionDiv>
  );
}
