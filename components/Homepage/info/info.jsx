import "./info.css";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";


const dragVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x:20,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 0.8,
      delay: 0,
    },
  }
};


const tooltips = [
  "Education",
  "Hometown",
  "Languages",
  "Techie"
]

const cardContents = [
  <div
    key="1"
    style={{
      margin: "5vw",
      color: "#2f2f2f",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    }}
  >
  <p style={{
    width:"100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",}}>
    I am a passionate and creative programmer with a penchant for
    problem-solving and a creating solutions.I am on a relentless journey to{" "}
    explore, create, innovate and my curiosity continues
    to drive me forward. <br /><br />
    From crafting elegant code to harnessing the power of data, I&apos;m driven
    by the challenge of transforming ideas into reality. </p>
    <div style={{
      width:"100%",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "flex-end",
      flexDirection: "column",
      marginRight:"1vw"
    }}>
    <img src="coder.png" alt="" style={{ background: "Transparent", width: "4.5vw", height: "4.5vw", marginTop:"3vw",marginLeft:"2vw"}} loading="lazy"/>
    </div>
  </div>,
  <ul key="2" style={{marginBottom:"10vw"}}>
    <li style={{ fontWeight:"700" }} className="schoolHead">
      Jaypee Institute of Information Technology
    </li>
    <li>B.Tech, Computer Science & Engineering</li>
    <li>2025</li>
    <li style={{ color: "#5A5A5A" }} className="schoolInfo">
      I explored many fields of technology here ranging from C and C++
      programming to glimpse of Machine Learning.
    </li>
    <li style={{ fontWeight:"700" }} className="schoolHead2">
      Gitarattan Jindal Public School
    </li>
    <li>High School, CBSE</li>
    <li>2021</li>
    <li style={{color: "#5A5A5A"}} className="schoolInfo">
      My tech journey started here, I was introduced with HTML, CSS, JS and
      Python.
      <br />
      <span className="schoolInfo">
        (J.K. It started when I fixed my grandma&apos;s phone)
      </span>
    </li>
  </ul>,
  <div key="4" style={{margin: "5vw",
  color: "#2f2f2f",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",}}>
  <p style={{
    width:"100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",}}> Born and brought up in the bustling metropolis of Delhi, India a city that pulses with the heartbeat of India&apos;s rich history, diverse culture, and endless possibilities. <br /><br />The city&apos;s eclectic mix of people, ideas, and opportunities have provided a fertile ground for my growth, and I&apos;m forever grateful for the experiences it has offered.</p>
  <div style={{
      width:"100%",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "flex-start",
      flexDirection: "row",
      marginRight:"1vw",
      marginLeft:"3vw",
      marginTop:"0.5vw"
    }}>
    <img src="red-fort.png" alt="" style={{ background: "Transparent", width: "4vw", height: "4vw",marginTop:"3vw",marginRight:"3vw",}} loading="lazy"/>
    <img src="indiaGate.png" alt="" style={{ background: "Transparent", width: "4vw", height: "4vw",marginTop:"3vw"}} loading="lazy"/>
    </div>
  </div>,
  <div key="4" style={{margin: "5vw",
  color: "#2f2f2f",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",}}>
  <p style={{
    width:"100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",}}>Along with facilitating communication with machines and crafting lines of code, my linguistic prowess serves as a unique bridge connecting the human and technological worlds. <br /><br /> Proficient in both Hindi and English, I can seamlessly convey complex technical concepts to a diverse audience, whether they hail from the bustling streets of Delhi or the tech hubs of Silicon Valley.</p>
  <div style={{
      width:"100%",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "flex-start",
      flexDirection: "row",
      marginRight:"1vw",
      marginLeft:"1vw",
    }}>
    <img src="english.png" alt="" style={{ background: "Transparent", width: "4vw", height: "4vw",marginTop:"2vw"}} loading="lazy" />
    <img src="hindi.png" alt="" style={{ background: "Transparent", width: "4vw", height: "4vw",marginTop:"2vw",marginLeft:"0.5vw",}} loading="lazy"/>
    </div>
  </div>
];

const backgroundColors = ["#e7f4fb", "#fbe8f3", "#fcf8e2", "#eddcfc"];

const images = [
  "/technology.png",
  "/education.png",
  "/location.png",
  "/communications.png",
];

function Card(props) {
  const [x, setX] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [scale, setScale] = useState(1);
  const [exitX, setExitX] = useState(0);

  const variantsFrontCard = {
    animate: {
      x,
      rotate,
      scale,
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
    exit: { x: exitX, opacity: 0, scale: 0.5, transition: { duration: 0.2 } },
  };

  const variantsBackCard = {
    initial: { scale: 0, y: 105, opacity: 0 },
    animate: { scale, y: 30, x: 30, opacity: 0.2 },
  };

  function handleDragEnd(_, info) {
    if (info.offset.x < -100) {
      setExitX(-250);
      setX(-250);
      setRotate(-20);
      setScale(0.8);
      props.setIndex(props.index + 1);
    }
    if (info.offset.x > 100) {
      setExitX(250);
      setX(250);
      setRotate(20);
      setScale(0.8);
      props.setIndex(props.index + 1);
    }
  }

  return (
    <motion.div
      style={{ backgroundColor: props.backgroundColor }}
      className="card"
      whileTap={{ cursor: "grabbing" }}
      drag={props.drag}
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      onDragEnd={handleDragEnd}
      variants={props.frontCard ? variantsFrontCard : variantsBackCard}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={exitX}
      transition={
        props.frontCard
          ? { type: "spring", stiffness: 300, damping: 20 }
          : { scale: { duration: 0.2 }, opacity: { duration: 0.4 } }
      }
    >
      <motion.div className="card-content">
        {cardContents[props.index % cardContents.length]}
        {props.frontCard && (
        <motion.div className="dragIconwrapper" variants={dragVariants} animate="animate" initial="initial">
          <img src="/next.png" alt="drag" className="dragIcon" onClick={() => 
          {
            setExitX(-250);
            setX(-250);
            setRotate(-20);
            setScale(0.8);
            props.setIndex(props.index + 1);
          }
          } 
          loading="lazy"
          />
          <motion.div className="tooltip">
            <p>{tooltips[props.index % tooltips.length]}</p>
        </motion.div>
        </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

Card.propTypes = {
  frontCard: PropTypes.bool.isRequired,
  index: PropTypes.number,
  setIndex: PropTypes.func,
  drag: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default function Info() {
  const [index, setIndex] = useState(0);
  const [animateInfo, setAnimateInfo] = useState(false);

  const scrollTriggerPoints = {
    small: 0,
    medium: 200, 
    large: 400, 
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

      if (window.scrollY > scrollTrigger && !animateInfo) {
        setAnimateInfo(true);
      }
    };

    const deviceType = getDeviceType(window.innerWidth);
  
  if (deviceType === 'small') {
    setTimeout(() => {
      setAnimateInfo(true);
    }
    , 1000);
  } else {
    window.addEventListener('scroll', handleScroll);
  }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animateInfo]);

  const infoVariants = {
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

  const [key, setKey] = useState(0)

  useEffect(() => {
    setKey(key + 1)
  }
  , [index])

  return (
    <motion.div className="info" variants={infoVariants}
    initial="hidden"
    animate={animateInfo ? "visible" : "hidden"}>
      <motion.div className="emoContainer">
        <motion.img
        key={key}
          className="infoImg"
          src={images[index % images.length]}
          alt="logo"
          animate={{
            scale: [1, 1.1, 1.1, 1, 1],
          }}
          loading="lazy"
        />
      </motion.div>
      <motion.div className="card-container">
        <AnimatePresence>
          <Card
            key={index + 1}
            frontCard={false}
            setIndex={setIndex}
            backgroundColor={backgroundColors[index % backgroundColors.length]}
          />
          <Card
            key={index}
            frontCard={true}
            index={index}
            setIndex={setIndex}
            drag="x"
            backgroundColor={backgroundColors[index % backgroundColors.length]}
          />
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
