"use client";

import { useState, useEffect } from "react";
import { MotionDiv } from "@/components/ui/motion";
import "./projects.css";

export function ImageSlider({ images }: { images: string[] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="imageSlider"
      style={{
        position: "relative",
        width: "95%",
        margin: "40px",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img
        src={images[currentImageIndex]}
        alt={`Codaborate Screenshot ${currentImageIndex + 1}`}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          cursor: "pointer",
          transition: "opacity 0.5s ease",
        }}
      />

      {/* Navigation Buttons */}
      <button
        onClick={prevImage}
        style={{
          position: "absolute",
          left: "-30px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(255, 255, 255, 0.8)",
          border: "none",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
          fontWeight: "bold",
          color: "#333",
          backdropFilter: "blur(5px)",
          transition: "all 0.3s ease",
          zIndex: 10,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(255, 255, 255, 0.95)";
          e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(255, 255, 255, 0.8)";
          e.currentTarget.style.transform = "translateY(-50%) scale(1)";
        }}
      >
        ‹
      </button>

      <button
        onClick={nextImage}
        style={{
          position: "absolute",
          right: "-30px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(255, 255, 255, 0.8)",
          border: "none",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
          fontWeight: "bold",
          color: "#333",
          backdropFilter: "blur(5px)",
          transition: "all 0.3s ease",
          zIndex: 10,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(255, 255, 255, 0.95)";
          e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(255, 255, 255, 0.8)";
          e.currentTarget.style.transform = "translateY(-50%) scale(1)";
        }}
      >
        ›
      </button>

      {/* Dot Indicators */}
      <div
        style={{
          position: "absolute",
          bottom: "-15px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
          zIndex: 10,
        }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              border: "none",
              background:
                currentImageIndex === index
                  ? "rgba(255, 255, 255, 0.9)"
                  : "rgba(255, 255, 255, 0.4)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function ProjectVideo({ src }: { src: string }) {
  return (
    <MotionDiv
      className="projVideo"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.5 }}
    >
      <video
        src={src}
        loop
        muted
        controls={false}
        onContextMenu={(e) => e.preventDefault()}
        width="100%"
        height="100%"
        onMouseEnter={(e) => e.currentTarget.play()}
        onMouseLeave={(e) => e.currentTarget.pause()}
        controlsList="nodownload nopictureinpicture noremoteplayback"
        className="video"
      />
    </MotionDiv>
  );
}
