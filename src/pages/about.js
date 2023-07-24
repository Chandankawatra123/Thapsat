import Navbar from "../components/navbar/navbar.js";
import Footer from "../components/footer/footer.js";
import Banner from "../components/banner/banner.js";
import Image from "next/image";
import arrow from "../icons/arrow-white.svg";
// import laptop from "../img/laptop.png";
import binaryCoding from '../img/binary-coding.svg';
// import wave from "../img/about-wave.svg";
import wave2 from "../img/wave.svg";
import quote from "../img/qoute.svg";
import free2 from "../img/free-up-white.svg";
import underline from "../img/underline.svg";
import growing from "../img/about-growing.png";
import Showcase from "../components/showcase/showcase.js";
import JoinUs from "../components/joinUs/joinUs.js";
import { motion } from "framer-motion";

import { useState, useEffect } from "react";

function About(props) {
  const [teamMembers, setTeamMembers] = useState(25);
  const [communityMembers, setCommunityMembers] = useState(200);
  const [socialMediaFollowers, setSocialMediaFollowers] = useState(200);

  useEffect(() => {
    const interval = setInterval(() => {
      setTeamMembers((prevTeamMembers) => Math.floor(Math.random() * 1000));
      setCommunityMembers((prevCommunityMembers) => Math.floor(Math.random() * 1000));
      setSocialMediaFollowers((prevSocialMediaFollowers) => Math.floor(Math.random() * 1000));
    }, 1000); // Update every 1000 milliseconds (1 second)

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="page-container">
        <Banner bannerHeading="Interested In Robotics Workshop?" bannerMsg="Join our first workshop, centred on robotics, and meet brilliant people from around the globe!" bannerLink="https://zq05jpsqect.typeform.com/to/V0N4H8aj" />
        <Navbar />
        <motion.div initial="hidden" animate="visible" variants={{
          hidden: {
            scale: .8,
            opacity: 0
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: .8
            }
          },
        }}>
          <div className="page-title" style={{padding: '0', marginTop: '4%'}}>
            <div className="block" style={{ flexBasis: "50%", margin: "0 auto", textAlign: "center"}}>
              <Image src={binaryCoding} style={{ margin: "0 auto" }} />
              <div className="inter-font landing-hero">
                <h1>Learn, collaborate, share <br /> knowledge and skills 💯</h1>
                {/* <h2 className="gradient-text-static">interested in code.</h2> */}
                <span>across communities by attending <br /> expert workshops and podcasts.</span>
              </div>
            </div>
          </div></motion.div>

        <div className="page-section" id="about-stats">
          <div className="landing-four-col" id="about-stats-col">
            <div className="block" style={{ flexBasis: "50%" }}>
            <h1>{teamMembers}+</h1>
              <h2>team <br /> members</h2>
            </div>
            <div className="block" style={{ flexBasis: "50%" }}>
            <h1>{communityMembers}+</h1>
              <h2>community <br /> members</h2>
            </div>
          </div>
          <div className="landing-four-col" id="about-stats-col">
            <div className="block" style={{ flexBasis: "50%" }}>
            <h1>{socialMediaFollowers}+</h1>
              <h2>social media <br /> followers</h2>
            </div>
            <div className="block" style={{ flexBasis: "50%" }}>
              <h1>2021</h1>
              <h2>year<br /> founded</h2>
            </div>
          </div>
        </div>
        <div className="page-section" style={{ justifyContent: "center", width: "100%" }}>
          <Image src={growing} />
        </div>
        <div className="wave">
          <Image src={wave2} className="wave" style={{ width: "100vw" }} loading="lazy"></Image>
        </div>
        <div className="page-section">
          <div id="block">
            <Image src={quote} alt='' style={{ width: '100%', height: "100%" }} loading="lazy" />
            <h4>“People try to force an interest over themselves, but passion chooses the individuals, rather than them trying to choose it.”</h4>
            <h1 style={{ textAlign: "center" }}><span className="gradient-text-static">Jeff Bezos</span></h1>
            <h2 style={{ textAlign: "center" }}>former Chairman and CEO of Amazon</h2>
          </div>
        </div>
        <div className="wave">
          <Image src={wave2} className="wave" loading="lazy"></Image>
        </div>
        <div className="page-section" style={{ justifyContent: "center" }}>
          <div className="title">
            <h5>Our Mission And Vision 🚀</h5>
            <Image src={underline} alt='' loading="lazy" />
          </div>
          <div className="cardcontainer">
            <div className="card">
              <div className="inner-card">
              <h1>Mission</h1>
              <p>Our mission is to develop a platform to help students who are passionate about Computer Science. CodeAsia aims to mentor and guide students in programming by swapping out the traditional monotonous education approach with modern tools for learning and turning their dreams into reality!</p>
              <span>CodeAsia</span>
              </div>
            </div>
            <div className="card">
              <div className="inner-card">
              <h1>Vision</h1>
              <p>To provide students with a free & safe place for coding, collaborating, sharing opportunities and resources. We organize boot camps to provide extensive, brief, and rigorous training for all students.
                <div style={{ marginTop: '1rem' }}>Empowering the youth of our continent and the world is our top priority. Our organization is looking forward to putting forth these actions. CodeAsia would revolutionize education by bringing out the optimistic, passionate, and vibrant youth and making their lives more impactful, joyful, and creative. </div>
              </p>
              <span>CodeAsia</span>
              </div>
            </div>
          </div>
        </div>
        <Showcase />
        <Footer />
      </div>
      <JoinUs />
    </>
  )
}

export default About;
