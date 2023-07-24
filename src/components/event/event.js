import styles from "./event.module.css";
import Image from "next/image";
import defaultImg from "../../img/event.png";
import { useState } from "react";

function Event(props) {
  var eventTagElements = [];

  if (props.eventImg != null) {
    return (
      <>
        <div className={styles["event-card"]}>
          <div className={styles["event-img"]}>
            <Image src={props.eventImg} alt='event-img'/>
          </div>
          <div className={styles["event-text"]}>
            <h2>{props.eventName}</h2>
            <div className={styles["event-date-time"]}>
              <h2>Date:{props.eventDate}</h2>
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
    )
  }
  else {
    return (
      <>
        <div className={styles["event-body2"]}>
          <div className={styles["event-card2"]}>
            <div className={styles["event-img"]}>
              <Image src={defaultImg} />
            </div>
            <div className={styles["event-text"]}>
              <h2>{props.eventName}</h2>
              <div className={styles["event-date-time"]}>
                <h2>Date : {props.eventDate}</h2>
                <h2>Time : {props.eventTime}</h2>
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
    )
  }

}

export default Event;