import styles from "./contactForm.module.css";

function ContactForm(props) {
  return(
    <form className={styles["contact-form"]}>
      <h2>We Would Love to Hear from You!</h2>
      <div className={styles["form-row"]}>
        <div className={styles["form-question"]}>
          <label htmlFor="first-name"><h3>First Name</h3></label>
          <input type="text" name="first-name"></input>
        </div>
        <div className={styles["form-question"]}>
          <label htmlFor="last-name"><h3>Last Name</h3></label>
          <input type="text" name="last-name"></input>
        </div>        
      </div>
      <div className={styles["form-row"]}>
        <div className={styles["form-question"]}>
          <label htmlFor="email"><h3>Email</h3></label>
          <input type="text" name="email"></input>
        </div>
        <div className={styles["form-question"]}>
          <label htmlFor="subject"><h3>Subject</h3></label>
          <select name="subject">
            <option value="">Select...</option>
            <option value="donation">Donation</option>
            <option value="sponsorship">Sponsorship</option>
            <option value="team">Team Intake</option>
            <option value="feedback">Feedback</option>
            <option value="general">General Query</option>
            <option value="founder">To Founder</option>
          </select>
        </div>
      </div>
      <div className={styles["form-row"]}>
        <div className={styles["form-question"]}>
          <label htmlFor="subject"><h3>Your Message</h3></label>
          <textarea name="message" style={{height: "8em", fontFamily: "Cabin"}}></textarea>
        </div>  
      </div>
      <div className={styles["form-row"]} style={{marginTop: "2em"}}>
          <a className="link-btn">Submit</a>
        </div>
    </form>
  )
}

export default ContactForm;