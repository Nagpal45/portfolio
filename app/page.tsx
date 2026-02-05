import { MotionP } from "@/components/ui/motion";

const textVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
};

export default function Home() {
  return (
    <div className="">
      <MotionP className="name" variants={textVariants} initial="initial" animate="animate">
        Hi. <br />
        I&apos;m Vaibhav.
      </MotionP>
    </div>
  );
}
