import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import twitter from "../../icons/twitter.svg";
import instagram from "../../icons/instagram.svg";
import linkedin from "../../icons/linkedin.svg";
import logo from "../../img/logo.svg";
import Link from "next/link";
import CodeAsia from "../../img/CodeAsia.org.svg";
import CodeAsiaSmall from '../../img/CodeAsia-small.svg'
import line from '../../img/line.svg'

function Footer(props) {
  return (
    <>
      <div className={styles.CodeAsia}>
        <Image src={CodeAsia} alt='' width={1000} height={200} loading="lazy" />
      </div>
      <div className={styles.CodeAsia2}>
        <Image src={CodeAsiaSmall} alt='' width={1200} height={1100} loading="lazy" />
      </div>
      <div className={styles.CodeAsia3}>
        <Image src={CodeAsiaSmall} alt='' width={1200} height={2000} loading="lazy" />
      </div>
      <footer className={styles.footer}>
        <div className={styles["footer-links"]}>
          <div className={styles["footer-logo"]}>
            <Link href="/">
              <a>
                <h5 style={{ fontFamily: 'Inter', lineHeight: '29px', fontWeight: '600' }}>CodeAsia</h5>
              </a>
            </Link>
            <div className={styles["code"]} style={{ marginTop: "8px", fontFamily: 'Poppins' }}>
              <h5>Don't Code Alone <br />
                Code with a Community.
              </h5>
            </div>
            <div className={styles["footer-socials"]}>
              <a href='https://twitter.com/CodeAsia_' rel="external noopener noreferrer" target=" https://twitter.com/CodeAsia_"><Image src={twitter} alt="Image assets" /></a>
              <a href="https://www.instagram.com/codeasia.hq" rel="external noopener noreferrer" target=" https://www.instagram.com/codeasia.hq"><Image src={instagram} alt="Image assets" /></a>
              <a href="https://www.linkedin.com/company/codeasia/" rel="external noopener noreferrer" target="https://www.instagram.com/codeasia.hq"><Image src={linkedin} alt="Image assets" /></a>
            </div>
          </div>
          <div className={styles["footer-cols"]}>
            <div className={styles["footer-col"]}>
              <a href="https://secure.givelively.org/donate/hackplus/codeasia">Donate Us</a>
              <a href="/about">About Us</a>
              <a href="#">Press Kit</a>
            </div>
            <div className={styles["footer-col"]}>
              <a href="#">FAQs</a>
              <a href="#">Support Forum</a>
              <a href="#">Lastest Updates</a>
            </div>
            <div className={styles["footer-col"]}>
              <a href="#">Community Guidelines</a>
              <a href="#"> 501(c)(3) nonprofit (EIN 81-1543325). </a>
            </div>
            <div className={styles["footer-logo"]}>
              <Link href="/">
                <a>
                  <h5 style={{ fontFamily: 'Inter', lineHeight: '29px', fontWeight: '600' }}>CodeAsia</h5>
                </a>
              </Link>
              <div className={styles["code"]} style={{ marginTop: "8px", fontFamily: 'Poppins' }}>
                <h5>Don't Code Alone <br />
                  Code with a Community.
                </h5>
              </div>
              <div className={styles["footer-socials"]}>
                <a rel="external noopener noreferrer" target="_blank"><Image src={twitter} alt="Image assets" loading="lazy" /></a>
                <a rel="external noopener noreferrer" target="_blank"><Image src={instagram} alt="Image assets" loading="lazy" /></a>
                <a href="https://www.linkedin.com/company/codeasia/" rel="external noopener noreferrer" target="_blank"><Image src={linkedin} alt="Image assets" loading="lazy" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["underline"]}>
          <Image src={line} alt='' width={2000} height={50} loading="lazy" />
        </div>
        <div className={styles["footer-copyright"]}>
          <a style={{ paddingLeft: "0.5rem" }}>© 2023 CodeAsia. 501(c)(3) nonprofit (EIN 81-1543325).</a>
          <a href="#">Privacy Policy</a>
          <a style={{ paddingRight: "1rem" }} href="#">Legal</a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
