import Intro from "@/components/Homepage/intro";
import { MotionDiv } from "@/components/ui/motion";
import Info from "@/components/Homepage/info/info";
import Experience from "@/components/Homepage/experience/experience";
import Techstack from "@/components/Homepage/techstack/techstack";
import Dice from "@/components/Homepage/dice/dice";

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
      <Info/>
      <Experience/>
      <Techstack/>
      <Dice/>
    </MotionDiv>
  );
}
