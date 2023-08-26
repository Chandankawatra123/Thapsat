import { useState } from "react";
import Image from "next/image";
import defaultImg from "../../img/event.png";
import styles from "./event.module.css";

function Event(props) {
  var eventTagElements = [];

  if (props.eventImg != null) {
    return (
      <>
        <div className={styles["event-card"]}>
          <div className={styles["event-img"]}>
            <Image src={props.eventImg} alt='event-img' loading="lazy" height={260} width={225}/>
          </div>
          <div className={styles["event-text"]}>
            <h2>{props.eventName}</h2>
            <div className={styles["event-date-time"]}>
              <h2>Date:COMING !!</h2>
              <h2>Time:{props.eventTime}</h2>
            </div>
            <div className={styles["event-desc"]}>
              <p>{props.eventDesc}</p>
            </div>
            <div className={styles["event-tags"]}>
              {eventTagElements}
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={styles["event-body2"]}>
          <div className={styles["event-card2"]}>
            <div className={styles["event-img"]}>
              <Image src={defaultImg} loading="lazy" />
            </div>

            <div className={styles["event-text"]}>
              <h2>{props.eventName}</h2>
              <div className={styles["event-date-time"]}>
                <h2>Date : Coming!</h2>
                <h2>Time : Soon!!</h2>
              </div>
              <div className={styles["event-desc"]}>
                <p>{props.eventDesc}</p>
              </div>
              <div className={styles["event-tags"]}>
                {eventTagElements}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Event;
