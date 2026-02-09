"use client";

import { useEffect } from "react";
import Link from "next/link";
import "./error-pages.css";
import { MotionDiv, MotionH1, MotionP } from "@/components/ui/motion";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application Error:", error);
  }, [error]);

  return (
    <MotionDiv 
      className="errorContainer"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <MotionH1 
        className="errorCode"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        500
      </MotionH1>
      <MotionP 
        className="errorMessage"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Something went wrong on our end. We&apos;re currently tracking down the issue.
      </MotionP>
      <MotionDiv 
        className="buttonGroup"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <button
          onClick={() => reset()} // Attempt to recover by trying to re-render the segment
          className="homeButton"
          aria-label="Try Again"
        >
          Try Again
        </button>
        <Link href="/" className="homeButton" aria-label="Return to Homepage">
          Return Home
        </Link>
      </MotionDiv>
    </MotionDiv>
  );
}
