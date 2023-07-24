/* eslint-disable react/no-unescaped-entities */
import Navbar from "../components/navbar/navbar.js";
import Footer from "../components/footer/footer.js";
import Banner from "../components/banner/banner.js";
import JoinUs from "../components/joinUs/joinUs.js";
import TeamGrid from "../containers/teamGrid.js";
import team from "../img/team.png";
import arrow from "../icons/arrow-white.svg";
import Image from "next/image";
import { useEffect } from "react";
import {motion} from "framer-motion";

function Team(props) {
  useEffect(() => {
    document.querySelector("body").classList.add("team");    
  }); 

  return(
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
              delay: 1.2
            }
          },
        }}>
        <div className="page-title">
          <div className="block" style={{flexBasis: "60%"}}>
            <h1>"We're building India's largest pipeline of <span className="gradient-text-static">future Engineers and Entrepreneurs.</span>"</h1>
            <p>Always humans, never bots. The hands-down, sharpest and friendliest team. Contact us for the best mentorship and support. We'll get back to you.</p>
            <a className="link-btn" href="#">
              Contact us
              <span className="link-arrow align-arrow-middle">
                <Image src={arrow} alt="Image assets"/>
              </span>
            </a>
          </div>
          <div className="block" id="team-hero-img">
            <Image src={team} alt="Image assets"/>
          </div>
        </div></motion.div>

        <div className="page-section" style={{justifyContent: "center"}}>
          <div className="block">
            <h1>Friendly folks, standing by.</h1>
          </div>        
          <TeamGrid />
        </div>      
        <Footer />
      </div>
      <JoinUs />
    </>
  )
}

export default Team;