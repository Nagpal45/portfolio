import "./contact.css";
import { 
  ContactWrapper, 
  ContactForm, 
  PhoneSvg 
} from "./ContactClient";
import { MotionDiv, MotionH1, MotionP } from "@/components/ui/motion";

export const metadata = {
  title: "Contact | Vaibhav Nagpal",
  description: "Get in touch with Vaibhav Nagpal. Connect for collaborations, project inquiries, or just to say hi.",
  openGraph: {
    title: "Contact | Vaibhav Nagpal",
    description: "Get in touch with Vaibhav Nagpal. Connect for collaborations, project inquiries, or just to say hi.",
    url: "https://vaibhavnagpal.tech/contact",
    type: "website",
  },
};

export default function Contact() {
  return (
    <ContactWrapper>
      <MotionDiv 
        className="textContainer" 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <MotionH1>Let&apos;s work together !</MotionH1>
        <MotionP>
        Use the form below to send me a message directly. I&apos;ll get back to you as soon as possible.
        </MotionP>
        
        <ContactForm />

      </MotionDiv>
      <MotionDiv className="rightContainer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
      <img src="arrow2.png" alt="arrow" className="arrow2" />
      <p>Connect with me on social media.</p>
      
      <PhoneSvg />

      </MotionDiv>
    </ContactWrapper>
  );
}
