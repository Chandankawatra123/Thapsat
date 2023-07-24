import Navbar from "../components/navbar/navbar.js";
import Footer from "../components/footer/footer.js";
import Banner from "../components/banner/banner.js";
import JoinUs from "../components/joinUs/joinUs.js"
import TeamGrid from "../containers/teamGrid.js";
import team from "../img/team.png";
import arrow from "../icons/arrow-white.svg";
import Image from "next/image";
import { useEffect } from "react";
import free1 from "../img/free-left.svg";

function Podcasts(props) {
  useEffect(() => {
    document.querySelector("body").classList.add("team");    
  }); 

  return(
    <>
      <div className="page-container">
        <Banner bannerHeading="Interested In Robotics Workshop?" bannerMsg="Join our first workshop, centred on robotics, and meet brilliant people from around the globe!" bannerLink="https://zq05jpsqect.typeform.com/to/V0N4H8aj" />
        <Navbar />
        <div className="page-title">
          <div className="block" style={{flexBasis: "60%"}}>
            <h1>Podcasts that help you <br/> grow everyday little by little</h1>
            <p>CodeAsia liberates teenagers to self learn, share and unleash their <br/> inner crazy genious and dare to create.</p>
            <a className="link-btn" href="#">
              Stream Now
              <span className="link-arrow align-arrow-middle">
                <Image src={arrow}/>
              </span>
            </a>
            <span className="free-img">
              <Image src={free1} />
            </span>
          </div>
          <div className="block" id="team-hero-img">
            <Image src={team} />
          </div>
        </div>
        <div className="page-section">
          <div className="block">
            <h1>Listen to what others are listening</h1>
            <p>Fresh and new released episodes to help you get started with your daily <br/> knowledge train.</p>
          </div>        
        </div>
        <div className="page-section">
          <div className="block">
            <h1>New episodes</h1>
            <p>Fresh and new released episodes to help you get started with your daily <br/> knowledge train.</p>
          </div>        
        </div>
        <div className="page-section">
          <div className="block">
            <h1>Your listening queue</h1>
            <p>Fresh and new released episodes to help you get started with your daily <br/> knowledge train.</p>
          </div>        
        </div>
        <Footer />
      </div>
      <JoinUs />
    </>
  )
}

export default Podcasts;