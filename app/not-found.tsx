import Link from "next/link";
import "./error-pages.css";
import { MotionDiv, MotionH1, MotionP } from "@/components/ui/motion";

export const metadata = {
  title: "404 - Page Not Found | Vaibhav Nagpal",
};

export default function NotFound() {
  return (
    <MotionDiv 
      className="errorContainer"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MotionH1 
        className="errorCode"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        404
      </MotionH1>
      <MotionP 
        className="errorMessage"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Oops! The page you&apos;re looking for seems to have wandered off into the void. 
        It might have been removed, renamed, or didn&apos;t exist in the first place.
      </MotionP>
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Link href="/" className="homeButton" aria-label="Return to Homepage">
          Return Home
        </Link>
      </MotionDiv>
    </MotionDiv>
  );
}
