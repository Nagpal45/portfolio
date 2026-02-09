"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./dice.css";
import emailjs from "@emailjs/browser";
import Image from "next/image";

const Dice = () => {
  const controls = useAnimation();
  const [isLeft, setIsLeft] = useState(true);
  const [isDiceStopped, setIsDiceStopped] = useState(false);

  const handleClick = () => {
   if(!isDiceStopped){
    setIsDiceStopped(true)
    controls.stop()
   }
   else{
    setIsDiceStopped(false)
   }
  };

  useEffect(() => {
    const animateDice = async () => {
      if (isLeft) {
        if (!isDiceStopped) {
          await controls.start({ x: "36vw", opacity: 1, rotate: 360 });
          setIsLeft(false);
        }
      } else {
        if (!isDiceStopped) {
          await controls.start({ x: "-36vw", opacity: 1, rotate: 0 });
          setIsLeft(true);
        }
      }
    };
    animateDice();
  }, [isLeft, isDiceStopped, controls]);

  const [recommendation, setRecommendation] = useState("");
  const [submitIcon, setSubmitIcon] = useState("send");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      recommendation: recommendation,
    };

    emailjs
      .send(
        "service_umgfnxl",
        "template_0y3ilw8",
        templateParams,
        "KNX39YK9pURqdKVSX"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
      })
      .catch((error) => {
        console.error("Email send error:", error);
      });

    setRecommendation("");
    setSubmitIcon("check");
    setTimeout(() => {
      setSubmitIcon("send");
    }, 1000);
  };

  const [animateDice, setAnimateDice] = useState(false);

  const scrollTriggerPoints = {
    small: 700,
    average: 1900,
    medium: 2000, 
    large: 3000, 
  };

  const getDeviceType = (width: number) => {
    if (width <= 1200) {
      return 'small'; 
    }else if (width <= 1400) {
      return 'average'; 
    } 
     else if (width <= 2000) {
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

      if (window.scrollY > scrollTrigger && !animateDice) {
        setAnimateDice(true);
      }
    };

    const deviceType = getDeviceType(window.innerWidth);
  
  if (deviceType === 'small') {
    setTimeout(() => {
      setAnimateDice(true);
    }
    , 1000);
  } else {
    window.addEventListener('scroll', handleScroll);
  }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animateDice]);

  const diceVariants = {
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
    <motion.div className="diceWrapper" variants={diceVariants} initial="hidden" animate={animateDice ? "visible" : "hidden"}>
      <div className="diceHeading">
        <div className="interestHeading">Personal Interests</div>
        <div className="interestText">
          While I&apos;m passionate about software development, I believe that a
          well-rounded life outside of code is essential for maintaining
          creativity and balance. Here, I&apos;d like to share how my interests enrich my professional life.
        </div>
      </div>
      {isLeft ? (
        <div key="left" className="Texts">
          <motion.div
            className="diceText"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <div className="music">
              <div className="spotify">
                <div className="rectangle">
                  <motion.div className="spLogo" animate={{scale: 1.2}} transition={{duration: 0.7, repeat: Infinity, repeatType: "reverse"}}>
                    <a href="https://open.spotify.com/user/31mferjcwy33ijsfznga4shrn3bi?si=9e82f68969ce497b">
                      <Image
                        src="spotify.png"
                        alt="spotify"
                        className="spotifyLogo"
                        loading="lazy"
                        width={50}
                        height={50}
                      />
                    </a>
                  </motion.div>
                  <div className="spotifySong">
                    <div className="songName">Now Playing</div>
                    <div className="songArtist">Love Yourz by J.Cole</div>
                  </div>
                  <div className="playButtons">
                    <Image src="previous.png" className="skipPrevious" loading="lazy" alt="previous" width={30} height={30} />
                    <Image src="pause.png" className="pause" loading="lazy" alt="pause" width={30} height={30} />
                    <Image src = "playNext.png" className="skipNext" loading="lazy" alt="next" width={30} height={30} />
                  </div>
                  <Image src="arrow.png" alt="arrow" className="arrow" loading="lazy" width={100} height={100} />
                  <p className="openSpotify">
                    If you listen to genres like Hip-Hop, Rock, R&B and Pop in
                    English, Punjabi and Hindi, Checkout my profile.
                  </p>
                </div>
              </div>
              <div className="musicText">
                <p className="musicInfo">
                  <span className="musicHeading"> Listening to music </span> has
                  always been a source of creative inspiration and focus for me.
                  It&apos;s a way to set the tone, immerse myself in the task at
                  hand, and unlock a state of flow. <br />
                   Whether I&apos;m debugging code or designing user
                  interfaces, music provides the soundtrack to my work and
                  enhances my problem-solving abilities.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      ) : (
        <div key="right" className="Texts">
          <motion.div
            className="diceText"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <div className="music">
              <div className="spotify">
                <motion.img src="books.png" alt="book" className="book" initial={{ y: 0}} animate={{y: 10}}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                ></motion.img>
                <form onSubmit={handleSubmit} className="recommendForm">
                  <input
                    type="text"
                    className="recommendation"
                    placeholder="Recommend a good non-fiction book"
                    value={recommendation}
                    onChange={(e) => setRecommendation(e.target.value)}
                  />
                  <motion.button type="submit" className="submit" transition={{ duration: 2 }}>
                    {submitIcon === "check" ? (
                      <Image src="thanks.png" className="submitThanks" loading="lazy" alt="thanks" width={30} height={30} />
                    ) : (
                      <Image src ="send.png" className="submitSend" loading="lazy" alt="send" width={30} height={30} />
                    )}
                  </motion.button>
                </form>
              </div>
              <div className="musicText">
                <p className="readInfo">
                  <span className="musicHeading">Reading</span> , particularly
                  in the quiet hours of the night, serves as my relaxation and
                  knowledge-building time. It&apos;s a way to unwind after a day
                  of debugging and also an opportunity to acquire new skills and
                  knowledge. <br />
                   Reading broadens my horizons and enhances my ability to
                  focus on complex coding tasks. <br /> I enjoy reading
                  non-fiction books on topics such as science, travel,
                  self-improvement, psychology, and personal finance.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
      <div className="dicePath">
        <motion.div
          initial={{ x: 0, opacity: 0, rotate: 0 }}
          animate={controls}
          transition={{ duration: 8 }}
          className={isDiceStopped ? "dice diceStopped" : "dice"}
          onClick={handleClick}
        >
        </motion.div>
          <p className="stopText">Click the box to stop</p>
          <Image src="click.png" alt="dice" className="diceImg" loading="lazy" width={50} height={50} />
      </div>
    </motion.div>
  );
};

export default Dice;
