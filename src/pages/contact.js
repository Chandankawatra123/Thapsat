import Navbar from "../components/navbar/navbar.js";
import Footer from "../components/footer/footer.js";
import Banner from "../components/banner/banner.js";
import JoinUs from "../components/joinUs/joinUs.js";
import ContactForm from "../components/contactForm/contactForm.js";
import Showcase from "../components/showcase/showcase.js";
import arrowRight from '../img/arrowRight.svg'
import Image from "next/image";
import arrow from "../icons/arrow-white.svg";
import email from "../img/email-1.svg"
import arrowBent from "../icons/arrow-bent.svg"
import drop from "../icons/dropdown.svg"
import free2 from "../img/free-up-white.svg";
import { useEffect } from "react";
import { motion } from "framer-motion";

import Select, { components } from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]


const customStyles = {
  control: (base, state) => ({
    ...base,
    background: "rgba(0, 0, 0, 0.3)",
    border: "2px solid rgba(246, 245, 245, 0.4)",
    position: 'relative',
    width: '80%'
  }),
  menu: base => ({
    ...base,
    borderRadius: 0,
    marginTop: 0,
    color: "#fff",
    background: "#424A55",
  }),
  menuList: base => ({
    ...base,
    padding: 0,
  })
};

const DropDown = () => {
  return (
    <Image src={drop} alt='' width={70} height={30} />
  )
}

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <DropDown />
    </components.DropdownIndicator>
  );
};

function Contact(props) {
  useEffect(() => {
    document.querySelector("body").classList.add("contact");
  });

  return (
    <>
      <div className="page-container">
        <Banner bannerHeading="Interested In Robotics Workshop?" bannerMsg="Join our first workshop on robotics and meet brilliant people around the globe!" bannerLink="https://zq05jpsqect.typeform.com/to/V0N4H8aj" />
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
            <div className="rgba-block">
              <div className="block" style={{ flexBasis: "60%" }}>
                <section style={{ display: "flex", alignItems: "center" }}>
                  <h3>Our Team Is Here To Help!</h3> <span style={{ marginLeft: "0.6rem", fontSize: '35px' }}>💭</span>
                </section>
                <span>Feel free to reach out to us for any feedback or suggestions. <br /> We will try our best to respond within 48 hours of your request.
                </span>
                <div className="infos">
                  <div className="details">
                    <label>First Name <br />
                      <input type='text' />
                    </label>
                    <label>Last Name <br />
                      <input type='text' />
                    </label>
                    <label>Email <br />
                      <input type='text' />
                    </label>
                    {/* <label>Subject <br />
                      <Select options={options}
                        styles={customStyles} components={{ DropdownIndicator }} />
                    </label> */}
                     <label>Subject <br />
                    <input type='text' />
                    </label>
                    <label>Message <br />
                      <textarea type='text' />
                    </label>
                  </div>
                  <div className="btn-below">
                    <button id="button">Submit</button>
                    <h5>
                      <Image src={arrowBent} alt="" className="arrowBent" />
                      <Image src={arrowRight} alt='' width={30} height={30} className='arrowRight' />
                      We would love to hear from you!</h5>
                  </div>
                </div>
                {/* <a className="link-btn" href="#">
                Shoot Us an Email
                <span className="link-arrow align-arrow-middle">
                  <Image src={arrow} alt="Image asset" />
                </span>
              </a> */}
              </div>

              <div className="block" id="team-hero-img">
                <Image src={email} alt="Image asset" />
              </div>
            </div>
          </div></motion.div>

        <Showcase />

        <Footer />
      </div>
      <JoinUs />
    </>

  )
}

export default Contact;