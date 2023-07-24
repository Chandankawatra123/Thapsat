import { useState, useEffect } from 'react';
import Image from "next/image";
import styles from "./Banner.module.css";
import banner from "../../icons/banner.svg";
import closeIcon from "../../icons/close.svg";

function Banner(props) {
  const [showBanner, setShowBanner] = useState(true);
  const [screenWidth, setScreenWidth] = useState();
  const closeBanner = () => {setShowBanner(false)};

  useEffect(() => {
    if (window) {
      setScreenWidth(window.innerWidth)
      window.addEventListener("resize", (e) => {
        setScreenWidth(e.target.innerWidth)
      })  
    }    
  }, [])
  
  if (showBanner && screenWidth > 350) {    
    return (
      <div className={styles["banner"]}>
        <div>
          <div className={styles["banner-img"]}>
            <Image src={banner} loading="lazy" />
          </div>
          <div className={styles["banner-text"]}>
            <h3>{props.bannerHeading}</h3>
            <p>{props.bannerMsg}</p>
          </div>
        </div>
        <div>
          <a className={`${styles["banner-link-btn"]} link-btn`} rel="external noreferrer" target="_blank" href={props.bannerLink} style={{ fontSize: '17px' }}>Register Now</a>
          <a onClick={closeBanner} className={styles["banner-close"]}>
            <Image src={closeIcon} alt="" loading="lazy" />
          </a>
        </div>
      </div>
    );
  } else if (showBanner && screenWidth <= 350) {
    return (
      <div className={styles["banner"]}>
        <div>
          <div className={styles["banner-img"]}>
            <Image src={banner} loading="lazy" />
          </div>
          <div className={styles["banner-text"]}>
            <h3>{props.bannerHeading}</h3>
            <p>{props.bannerMsg} <a href={props.bannerLin}>Register now</a>.</p>
          </div>
        </div>
        <div>
          <a onClick={closeBanner} className={styles["banner-close"]}>
            <Image src={closeIcon} alt="" loading="lazy" />
          </a>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Banner;
