/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Navbar from "../components/navbar/navbar.js";
import Footer from "../components/footer/footer.js";
import Banner from "../components/banner/banner.js";
import Showcase from "../components/showcase/showcase.js";
import JoinUs from "../components/joinUs/joinUs.js";
import Bolb from "../img/blobcol.svg"
import { motion } from "framer-motion";
import Image from 'next/image';

export default function donate() {
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
          <div className="page-title">
            <div className="block" style={{ flexBasis: "60%", margin: "0 auto", textAlign: "center" }}>
              <div className="inter-font landing-hero">
                <span>We're building</span>
                <h1>The Asia’s Largest <br />
                  Pipeline of Future <br /> Engineers & Entrepreneurs 🚀</h1>
                {/* <h2 className="gradient-text-static">interested in code.</h2> */}
              </div>
              <Image src={Bolb} style={{ margin: "0 auto" }} alt='' loading="lazy" />
            </div>
            <div className='block'  style={{ flexBasis: "60%", margin: "0 auto", textAlign: "center" }}>
            <h3>Friendly folks, standing by 💛</h3>
            <span>Always humans, never bots. The hands-down, sharpest and friendliest team in the student-run Organization. . Reach out to us for the best mentorship and support. We'll get reach out to you within the next 2-5 business days :)</span>
            </div>
          </div></motion.div>


        <Showcase />
        <Footer />
      </div>
      <JoinUs />
    </>
  )
}
