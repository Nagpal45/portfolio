"use client";

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
        {props.cardContents[props.index % props.cardContents.length]}
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
            <p>{props.tooltips[props.index % props.tooltips.length]}</p>
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
  cardContents: PropTypes.array,
  tooltips: PropTypes.array,
};

export default function InfoClient({ tooltips, cardContents, backgroundColors, images }) {
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
            cardContents={cardContents}
            tooltips={tooltips}
          />
          <Card
            key={index}
            frontCard={true}
            index={index}
            setIndex={setIndex}
            drag="x"
            backgroundColor={backgroundColors[index % backgroundColors.length]}
            cardContents={cardContents}
            tooltips={tooltips}
          />
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
