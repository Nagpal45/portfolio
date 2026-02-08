import InfoContainer from "./InfoContainer";

const tooltips = ["Education", "Hometown", "Languages", "Techie"];

const backgroundColors = ["#e7f4fb", "#fbe8f3", "#fcf8e2", "#eddcfc"];

const images = [
  "/technology.png",
  "/education.png",
  "/location.png",
  "/communications.png",
];

export default function Info() {
  return (
    <InfoContainer
      tooltips={tooltips}
      backgroundColors={backgroundColors}
      images={images}
    >
      {/* 1. Techie / Intro */}
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
        <p
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          I am a Full Stack Engineer specializing in Frontend Architecture and System Design. My background in early-stage startups has shaped me to own the entire product lifecycle—from crafting pixel-perfect UIs to deploying robust backend infrastructure.
          <br />
          <br />
          I thrive in fast-paced environments, shipping high-quality products across Web (Next.js) and Mobile (React Native). Whether optimizing Core Web Vitals for complex animations or architecting scalable systems, I bridge the gap between design and engineering to build software that is as performant as it is beautiful.
        </p>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            flexDirection: "column",
            marginRight: "1vw",
          }}
        >
          <img
            src="coder.png"
            alt=""
            style={{
              background: "Transparent",
              width: "4.5vw",
              height: "4.5vw",
              marginTop: "3vw",
              marginLeft: "2vw",
            }}
            loading="lazy"
          />
        </div>
      </div>

      {/* 2. Education */}
      <ul key="2" style={{ marginBottom: "10vw" }}>
        <li style={{ fontWeight: "700" }} className="schoolHead">
          Jaypee Institute of Information Technology
        </li>
        <li>B.Tech, Computer Science & Engineering</li>
        <li>2025</li>
        <li style={{ color: "#5A5A5A" }} className="schoolInfo">
          I explored many fields of technology here ranging from C and C++
          programming to glimpse of Machine Learning.
        </li>
        <li style={{ fontWeight: "700" }} className="schoolHead2">
          Gitarattan Jindal Public School
        </li>
        <li>High School, CBSE</li>
        <li>2021</li>
        <li style={{ color: "#5A5A5A" }} className="schoolInfo">
          My tech journey started here, I was introduced with HTML, CSS, JS and
          Python.
          <br />
          <span className="schoolInfo">
            (J.K. It started when I fixed my grandma&apos;s phone)
          </span>
        </li>
      </ul>

      {/* 3. Hometown (Location) */}
      <div
        key="3"
        style={{
          margin: "5vw",
          color: "#2f2f2f",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <p
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          Born and brought up in the bustling metropolis of Delhi, India a city that pulses with the heartbeat of India&apos;s rich history, diverse culture, and endless possibilities. <br />
          <br />
          The city&apos;s eclectic mix of people, ideas, and opportunities have provided a fertile ground for my growth, and I&apos;m forever grateful for the experiences it has offered.
        </p>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            flexDirection: "row",
            marginRight: "1vw",
            marginLeft: "3vw",
            marginTop: "0.5vw",
          }}
        >
          <img
            src="red-fort.png"
            alt=""
            style={{
              background: "Transparent",
              width: "4vw",
              height: "4vw",
              marginTop: "3vw",
              marginRight: "3vw",
            }}
            loading="lazy"
          />
          <img
            src="indiaGate.png"
            alt=""
            style={{
              background: "Transparent",
              width: "4vw",
              height: "4vw",
              marginTop: "3vw",
            }}
            loading="lazy"
          />
        </div>
      </div>

      {/* 4. Languages (Communication) */}
      <div
        key="4"
        style={{
          margin: "5vw",
          color: "#2f2f2f",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <p
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          Along with facilitating communication with machines and crafting lines of code, my linguistic prowess serves as a unique bridge connecting the human and technological worlds. <br />
          <br /> Proficient in both Hindi and English, I can seamlessly convey complex technical concepts to a diverse audience, whether they hail from the bustling streets of Delhi or the tech hubs of Silicon Valley.
        </p>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            flexDirection: "row",
            marginRight: "1vw",
            marginLeft: "1vw",
          }}
        >
          <img
            src="english.png"
            alt=""
            style={{
              background: "Transparent",
              width: "4vw",
              height: "4vw",
              marginTop: "2vw",
            }}
            loading="lazy"
          />
          <img
            src="hindi.png"
            alt=""
            style={{
              background: "Transparent",
              width: "4vw",
              height: "4vw",
              marginTop: "2vw",
              marginLeft: "0.5vw",
            }}
            loading="lazy"
          />
        </div>
      </div>
    </InfoContainer>
  );
}
