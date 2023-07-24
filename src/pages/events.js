/* eslint-disable react-hooks/exhaustive-deps */
import Navbar from "../components/navbar/navbar.js";
import Footer from "../components/footer/footer.js";
import Banner from "../components/banner/banner.js";
import EventGrid from "../containers/eventGrid.js";
import { useEffect, useState } from "react";
import JoinUs from "../components/joinUs/joinUs.js";
import { useSpring, animated } from 'react-spring'; // Importing and using react-spring 
import { motion, useAnimation } from "framer-motion";
import LazyShow from "./../components/animatons/lazyShow.js";
import Showcase from "../components/showcase/showcase.js";

function Events(props) {
  const [screenWidth, setScreenWidth] = useState();
  useEffect(() => {
    document.querySelector("body").classList.add("events");
  }); 

  useEffect(() => {
    if (window) {
      setScreenWidth(window.innerWidth)
      window.addEventListener("resize", (e) => {
        setScreenWidth(e.target.innerWidth)
      })
    }
  }, [])

  return(
    <>
      <div className="page-container">
      {screenWidth > 1050 ? <Banner bannerHeading="Interested In Robotics?" bannerMsg="Join our first workshop, centred on robotics, and meet brilliant people from around the globe!" bannerLink="https://zq05jpsqect.typeform.com/to/V0N4H8aj" />
          : <Banner bannerHeading="Interested In Robotics?" bannerMsg="Join our first workshop, centered on robotics..." bannerLink="https://zq05jpsqect.typeform.com/to/V0N4H8aj" />
        }
        <Navbar />
        <LazyShow>
        <EventGrid/>    
        </LazyShow> 
          <Showcase />
        <Footer />
      </div>      
      <JoinUs />
    </>
  )
}

export default Events;