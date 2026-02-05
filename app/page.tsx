import Intro from "@/components/Homepage/intro";
import { MotionDiv } from "@/components/ui/motion";

export default function Home() {
  return (
    <MotionDiv
      className="flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Intro />
    </MotionDiv>
  );
}
