import styles from "./Navbar.module.css";
import Image from "next/image";
import logo from "../../img/logo.svg";
import { useEffect, useState } from 'react';
import Link from "next/link";

function Navbar(props) {
  const [hideNav, setHideNav] = useState(false);
  const [screenWidth, setScreenWidth] = useState();
  const openNav = (e) => {
    e.preventDefault()
    setHideNav(!hideNav)
  };

  useEffect(() => {
    if (window) {
      setScreenWidth(window.innerWidth)
      window.addEventListener("resize", (e) => {
        setScreenWidth(e.target.innerWidth)
      })
    }
    const navContainer = document.querySelector("header");
    const navHeight = navContainer.clientHeight;
    window.addEventListener("scroll", () => {
      (window.pageYOffset > navHeight) ? navContainer.style.background = "rgba(0, 0, 0, .3)"
        : navContainer.style.background = "transparent"
    })
  }, [])

  if (screenWidth > 1000) {
    return (
      <header className={styles["header"]}>
        <div className={styles["header-img"]}>
          <Link href="/">
            <a>
              <h5 style={{ fontFamily: "'Poppins', sans-serif" }}>CodeAsia</h5>
            </a>
          </Link>
        </div>
        <div className={styles["nav-menu"]}>
          <Link style={{ color: "white" }} href="/about">
            <a>About Us</a>
          </Link>
          <Link href="/events">
            <a>Events</a>
          </Link>
            <a href="https://secure.givelively.org/donate/hackplus/codeasia" rel="noreferrer" target="_blank">Donate</a>
          <Link href="/contact">
            <a>Contact Us</a>
          </Link>
        </div>
        <div className={styles["nav-btns"]}>
          <a className={`${styles["nav-link-btn"]} link-btn join-btn`}>Join Us</a>
        </div>
      </header>
    )
  }
  else {
    return (
      <header  className={styles["header"]} style={{ background: "background-color: rgba(180, 181, 177, 0.35)" }}>
        <div className={styles["nav-top"]}>
          <div className={styles["header-img"]}>
            <Link href="/">
              <a>
                <Image src={logo} />
              </a>
            </Link>
          </div>

          <button className={`hamburger hamburger--slider link-btn`} onClick={openNav}>
            <div className={styles[hideNav ? "change" : "container"]}>
              <div className={styles.bar1}></div>
              <div className={styles.bar2}></div>
              <div className={styles.bar3}></div>
            </div>
          </button>

        </div>
        {hideNav ? (
          <div className={styles["nav-menu"]}>
            <Link style={{ color: "white" }} href="/about">
              <a>About Us</a>
            </Link>
            <Link href="/events">
              <a>Events</a>
            </Link>
              <a href="https://secure.givelively.org/donate/hackplus/codeasia" rel="noreferrer" target="_blank">Donate</a>
            <Link href="/contact">
              <a>Contact Us</a>
            </Link>
            <div className={styles["nav-btns"]} style={{marginTop: "-1rem"}}>
              <a className={`${styles["nav-link-btn"]} link-btn join-btn`}>Join Us</a>
            </div>
          </div>
        ) : null}
      </header>
    )
  }
}

export default Navbar;