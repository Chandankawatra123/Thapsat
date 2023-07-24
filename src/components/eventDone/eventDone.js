import styles from '../event/event.module.css'
import Image from 'next/image'

export default function eventDone(props) {
  return (
    <>
      <div className={styles["event-card"]}>
        <div className={styles["event-img"]}>
          <Image src={require('../../img/event.png')} alt=''/>
        </div>
        <div className={styles["event"]}>
        <div className={styles["event-text"]}>
          <h2>{props.eventName}</h2>
          <div className={styles["event-date-time"]}>
            <h2>Recorded On : Date:{props.eventDate}</h2>
          </div>
          <div className={styles["event-desc"]}>
            <p>{props.eventDesc}</p>
          </div>
        </div>
        <Image src={require('../../img/around-arrow-right.svg')} alt=''/>
        </div>
      </div>
    </>
  )
}
