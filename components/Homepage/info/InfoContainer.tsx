"use client";

import "./info.css";
import React, { useEffect, useState } from "react";
import { m, AnimatePresence, PanInfo } from "framer-motion";
import Image from "next/image";

const dragVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: 20,
    transition: {
      repeat: Infinity,
      repeatType: "mirror" as const,
      duration: 0.8,
      delay: 0,
    },
  },
};

interface CardProps {
  frontCard: boolean;
  index: number;
  setIndex: (index: number) => void;
  drag?: boolean | "x" | "y" | undefined;
  backgroundColor: string;
  cardContents: React.ReactNode[];
  tooltips: string[];
}

function Card(props: CardProps) {
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

  function handleDragEnd(_: any, info: PanInfo) {
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
    <m.div
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
      <m.div className="card-content">
        {props.cardContents[props.index % props.cardContents.length]}
        {props.frontCard && (
          <m.div
            className="dragIconwrapper"
            variants={dragVariants}
            animate="animate"
            initial="initial"
          >
            <Image
              src="/next.png"
              alt="drag"
              className="dragIcon"
              onClick={() => {
                setExitX(-250);
                setX(-250);
                setRotate(-20);
                setScale(0.8);
                props.setIndex(props.index + 1);
              }}
              width={50}
              height={50}
              loading="lazy"
            />
            <m.div className="tooltip">
              <p>{props.tooltips[props.index % props.tooltips.length]}</p>
            </m.div>
          </m.div>
        )}
      </m.div>
    </m.div>
  );
}

interface InfoContainerProps {
  tooltips: string[];
  backgroundColors: string[];
  images: string[];
  children: React.ReactNode;
}

export default function InfoContainer({
  tooltips,
  backgroundColors,
  images,
  children,
}: InfoContainerProps) {
  const [index, setIndex] = useState(0);
  const [animateInfo, setAnimateInfo] = useState(false);
  
  const cardContents = React.Children.toArray(children);

  const scrollTriggerPoints = {
    small: 0,
    medium: 200,
    large: 400,
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

      if (window.scrollY > scrollTrigger && !animateInfo) {
        setAnimateInfo(true);
      }
    };

    const deviceType = getDeviceType(window.innerWidth);

    if (deviceType === "small") {
      setTimeout(() => {
        setAnimateInfo(true);
      }, 1000);
    } else {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
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

  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(key + 1);
  }, [index]);

  return (
    <m.div
      className="info"
      variants={infoVariants}
      initial="hidden"
      animate={animateInfo ? "visible" : "hidden"}
    >
      <m.div className="emoContainer">
        <m.img
          key={key}
          className="infoImg"
          src={images[index % images.length]}
          alt="logo"
          animate={{
            scale: [1, 1.1, 1.1, 1, 1],
          }}
          loading="lazy"
        />
      </m.div>
      <m.div className="card-container">
        <AnimatePresence>
          <Card
            key={index + 1}
            frontCard={false}
            index={index + 1} // Pass next index
            setIndex={setIndex}
            backgroundColor={backgroundColors[(index + 1) % backgroundColors.length]}
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
      </m.div>
    </m.div>
  );
}
