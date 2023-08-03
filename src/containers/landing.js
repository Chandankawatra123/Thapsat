import Navbar from "../components/navbar/navbar.js";
import Footer from "../components/footer/footer.js";
import Banner from "../components/banner/banner.js";
import JoinUs from "../components/joinUs/joinUs.js";
import Sponsors from "../components/sponsors/sponsors.js"
import community from "../img/community-msg.svg";
import landing1 from "../img/landing-1.svg";
import landing2 from "../img/landing-2.svg";
import landing3 from "../img/landing-3.svg";
import people from "../icons/people.svg";
import bulb from "../icons/bulb.svg";
import message from "../icons/message.svg";
import ticket from "../icons/ticket.svg";
import Image from "next/image";
import exploration from "../icons/exploration.svg";
import research from "../icons/research.svg";
import action from "../icons/action.svg";
import Showcase from "../components/showcase/showcase"
import free2 from "../img/free-up-white.svg";
import { useEffect, useState } from "react";

function Landing(props) {
  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    if (window) {
      setScreenWidth(window.innerWidth)
      window.addEventListener("resize", (e) => {
        setScreenWidth(e.target.innerWidth)
      })
    }
  }, [])

  document.querySelector("body").classList.add("landing");


  return (
    <>
      <div className="page-container">
        {screenWidth > 1050 ? (
          <Banner
            bannerHeading="Interested In Robotics?"
            bannerMsg="Join our first workshop, centred on robotics, and meet brilliant people from around the globe!"
            bannerLink="https://zq05jpsqect.typeform.com/to/V0N4H8aj"
          />
        ) : (
          <Banner
            bannerHeading="Interested In Robotics?"
            bannerMsg="Join our first workshop, centered on robotics..."
            bannerLink="https://zq05jpsqect.typeform.com/to/V0N4H8aj"
          />
        )}
        <Navbar />
        <div className="page-title">
          <div className="block" style={{ flexBasis: "45%", marginLeft: '-1.5%'}}>
            <div className="inter-font landing-hero">
              <div className="gradient-animation">
                <h5>Don't Code Alone</h5>
              </div>
              <div className="gradient-animation">
                <h1>Code With A Community.</h1>
              </div>
              <div className="gradient-animation">
                <h4>Building Asia’s Most Collaborative <br></br> Community of Students 🚀</h4>
              </div>
              <p>CodeAsia is a tech startup fostering a like-minded community of individuals of students and nurturing the best makers & coders.</p>
            </div>
            <a className="link-btn join-btn">
              <span> <b> Join Community</b> <h5 className="party">🎉</h5></span>
            </a>
          </div>
          <div id="landing-community" className="block">
            <Image src={community} className='commmunity' alt='' loading="lazy" />
          </div>
        </div>
        <div className="page-section gradient-bg-right" style={{ justifyContent: "space-around", alignItems: "flex-start", marginLeft: '2rem' }}>
          <div className="landing-four-col">
            <div className="block">
              <Image src={people} loading="lazy" />
              <h5>Diverse Community</h5>
              <p>You’re not alone. Learn and get help from our friendly community of beginner and experienced developers.</p>
            </div>
            <div className="block">
              <Image src={bulb} loading="lazy" />
              <h5>Collaborate Knowledge</h5>
              <p>Exclusive exposure to industry experts and get a chance to learn from them.</p>
            </div>
          </div>
          <div className="landing-four-col">
            <div className="block">
              <Image src={message} loading="lazy" />
              <h5>Instant Feedback</h5>
              <p>Your code is tested as soon as you send it in, so you always know if you're on the right track.</p>
            </div>
            <div className="block">
              <Image src={ticket} loading="lazy" />
              <h5>Skill-Building Events</h5>
              <p>Participate in high-quality, engaging events and learn skills.</p>
            </div>
          </div>
        </div>
        <div className="page-section landing-two-col">
          <div className="block" style={{ flexBasis: "45%"}}>
            <Image src={landing1} layout="responsive" loading="lazy" />
          </div>
          <div className="block" style={{ flexBasis: "40%", marginRight: '2rem'}}>
            <h1>Turn The <span className="highlight-yellow">Career</span> Of Your <span className="highlight-orange">Dreams</span> Into Reality 🚀</h1>
            <div className="landing-two-col-inline">
              <div className="landing-two-col-icon">
                <Image layout="responsive" src={research} loading="lazy" />
              </div>
              <div className="landing-two-col-p">
                <h5>Exploration: 🌍</h5>
                <p>Get a clear idea of where you are headed in your career with us. Look at this as your opportunity to open yourself up to possibilities.</p>
              </div>
            </div>
            <div className="landing-two-col-inline">
              <div className="landing-two-col-icon">
                <Image layout="responsive" src={exploration} loading="lazy" />
              </div>
              <div className="landing-two-col-p">
                <h5>Research: 📖</h5>
                <p>Once you start to get a sense of what you want, begin to research the state of your current reality and approach to achieving your ideal next career move all with just CodeAsia!</p>
              </div>
            </div>
            <div className="landing-two-col-inline">
              <div className="landing-two-col-icon">
                <Image layout="responsive" src={action} loading="lazy" />
              </div>
              <div className="landing-two-col-p">
                <h5>Action: 🎯</h5>
                <p>Now is the time to take action with CodeAsia, with diverse opportunities in store for you. </p>
              </div>
            </div>
          </div>
        </div>
        <div className="page-section landing-two-col" id="reverse" style={{ flexBasis: "40%", margin: '2% 2%' }}>
          <div className="block" style={{ flexBasis: "40%" }}>
            <h1>Everything <span className="highlight-pink">Creative</span></h1>
            <p>What are your <span className="highlight-yellow">hobbies</span> ?<br></br>Sketching? Painting? Cooking? Turn your hobbies into creative and fulfilling careers with CodeAsia. </p>
            <p>We provide you with a <span className="highlight-green">clear path</span> that leads your hobbies/passions into meaningful careers. Join us today for all the thrill & excitement!</p>
          </div>
          <div className="block" style={{ flexBasis: "50%", marginLeft: 'auto' ,marginRight: '0rem' }}>
            <Image src={landing2} layout="responsive" loading="lazy" />
          </div>
        </div>
        <div className="page-section landing-two-col">
          <div className="block" style={{ flexBasis: "40%" }}>
            <Image src={landing3} layout="responsive" loading="lazy" />
          </div>
          <div className="block" style={{ flexBasis: "40%", marginRight: '2rem' }}>
            <h1>Make <span className="highlight-blue">Partners</span> & Boost Your Work Efficiency. </h1>
            <p>A <span className="highlight-yellow">collaborative</span> environment is what we're made up of as we believe in providing equal opportunities to everyone, making you feel like you belong in a huge community of like minded people with the same end goals.</p>
            <p>You belong in a huge <span className="highlight-pink">community</span> of like minded people with the same end goals — and with us, that’s exactly where you will be.</p>
          </div>
        </div>
        <div className="page-section sponsors">
          <Sponsors />
        </div>
        <Showcase />
        <Footer />
      </div>
      <JoinUs />
    </>
  );
}

export default Landing;
