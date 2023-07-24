import styles from "./teamMember.module.css";
import Image from "next/image";
import { useState, useEffect } from 'react';
import Head from "next/head";

function TeamMember(props) {
  if(props.memberPic != null) {
    return(
      <>
      <div className={`${styles["team-member-card"]}`}>
          <div className={styles["member-pic"]} style={{ background: "url({props.memberPic})", backgroundSize: "contain" }}></div>
          <h2>{props.memberName}</h2>
          <p>{props.memberTitle}</p>
        </div>
        </>
    )  
  }
  else {
    return(
      <div className={`${styles["team-member-card"]}}`}>
        <div className={styles["member-pic"]} style={{background: "#B2AAAA"}}></div>
        <h2>{props.memberName}</h2>
        <p>{props.memberTitle}</p>
      </div>
    )
  }
  
}

export default TeamMember;
