import styles from "./sponsors.module.css";
import Image from "next/image";
import replit from "../../img/sponsors/replit.png";
import craftBrain from "../../img/sponsors/craftbrain.png"
import scriptFoundation from "../../img/sponsors/script-foundation.png";
import hackathonsIntl from "../../img/sponsors/hackathons-intl.png";
import appDevLeague from "../../img/sponsors/app-dev-league.png";
import verify from "../../img/sponsors/verify.png";
import xyz from "../../img/sponsors/xyz.png";
import underline from '../../img/underline.svg'

function Sponsors(props) {
  return (
    <>
      <div className={styles["block"]}>
        <h1>Our Sponsors</h1>
      <Image src={underline} loading="lazy" alt=''/>
      </div>
      {/* <div className={styles["sponsors-container"]} style={{flexWrap: "nowrap", margin: "0 8%"}}>
        <div className={`${styles["sponsors-img"]} ${styles["sponsor-1"]}`} id="sponsor-1">
          <Image src={replit} />
        </div>
        <div className={styles["sponsors-container"]} style={{padding: "0px", justifyContent: "flex-start"}}>
          <div className={`${styles["sponsors-img"]} ${styles["sponsor-1"]}`} id="sponsor-2">
            <Image src={xyz} />
          </div>
          <div className={`${styles["sponsors-img"]} ${styles["sponsor-1"]}`} id="sponsor-3">
            <Image src={scriptFoundation} />
          </div>
          <div className={`${styles["sponsors-img"]} ${styles["sponsor-1"]}`} id="sponsor-4">
            <Image src={hackathonsIntl} />
          </div>
          <div className={`${styles["sponsors-img"]} ${styles["sponsor-1"]}`} id="sponsor-5">
            <Image src={craftBrain} />
          </div>
          <div className={`${styles["sponsors-img"]} ${styles["sponsor-1"]}`} id="sponsor-6">
            <Image src={verify} />
          </div>
          <div className={`${styles["sponsors-img"]} ${styles["sponsor-1"]}`} id="sponsor-7">
            <Image src={appDevLeague} />
          </div>
        </div>
      </div> */}
      <div className={styles["sponsors-grid"]} style={{flexWrap: "nowrap", margin: "0 8%"}}>
        <div className={`${`${styles["sponsors-img"]} ${styles["sponsor-1"]}`} ${styles["sponsor-1"]}`}>
          <a href="https://replit.com/" rel="external"><Image src={replit} loading="lazy" style={{margin: "auto"}} /></a>
        </div>
        <div className={styles["sponsors-flex"]}>
          <div className={`${styles["sponsors-img"]} ${styles["sponsor-2"]}`}>
            <a href="https://gen.xyz/" rel="external"><Image src={xyz} loading="lazy"/></a>
          </div>
          <div className={`${styles["sponsors-img"]} ${styles["sponsor-3"]}`}>
          <a href="https://www.scriptindia.org/team" rel="external"><Image  loading="lazy" src={scriptFoundation} /></a>
          </div>
          <div className={`${styles["sponsors-img"]} ${styles["sponsor-4"]}`}>
          <a href="https://www.hackathonsinternational.com/" rel="external"><Image loading="lazy" src={hackathonsIntl} /></a>
          </div>
          <div className={`${styles["sponsors-img"]} ${styles["sponsor-5"]}`}>
          <a href="http://craftbrain.co/" rel="external"><Image loading="lazy" src={craftBrain} /></a>
          </div>
          <div className={`${styles["sponsors-img"]} ${styles["sponsor-6"]}`} >
          <a href="https://karoverify.xyz/" rel="external"><Image loading="lazy" src={verify} /></a>
          </div>
          <div className={`${styles["sponsors-img"]} ${styles["sponsor-7"]}`}>
          <a href="https://appdevleague.org/" rel="external"><Image loading="lazy" src={appDevLeague} /></a>
          </div>
        </div>        
      </div>
    </>
  )
}

export default Sponsors;