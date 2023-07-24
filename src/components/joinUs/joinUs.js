import styles from "./joinUs.module.css";
import Image from "next/image";
import people from "../../icons/people.svg";
import bulb from "../../icons/bulb.svg";
import message from "../../icons/message.svg";
import ticket from "../../icons/ticket.svg";
import community from "../../img/popup-community.svg";
import slack from "../../icons/slack.svg";
import fetch from "node-fetch";
import closeIcon from "../../icons/close.svg";
import { useEffect, useState } from "react";
import IndianStates from "../states/IndianStates"; 
import { renderIntoDocument } from "react-dom/test-utils";




function JoinUs(props) {
    var goBack = function () { };
    var goNext = function () { };
    var chooseHighSchool = function () { };
    var chooseMiddleSchool = function () { };
    var chooseEmailNo = function () { };
    var chooseEmailYes = function () { };
    var sendFormData = function () { };
    var closeModal = function () { };
    if (typeof window === "object") {
        window.formStuff = {};
        global.currentPage = 0;
        

       goNext = function() {
  const formP = document.getElementById("formP" + global.currentPage);
  
  // Check if the form section element exists
  if (formP === null) {
    return; // Exit the function if the element is not found
  }
  
  const requiredFields = formP.querySelectorAll('input[required]');

  // Check if any required field is empty or email field is invalid
  const emptyFields = Array.from(requiredFields).filter(field => field.value.trim() === '');
  const invalidEmailFields = Array.from(requiredFields).filter(field => field.type === 'email' && !isValidEmail(field.value));

  if (emptyFields.length > 0 || invalidEmailFields.length > 0) {
    // Display an error message on the screen
    const errorMessage = document.getElementById("errorMessage");
    if (invalidEmailFields.length > 0) {
      errorMessage.textContent = "Please ensure that email fields are valid.";
    } else {
      errorMessage.textContent = "Please fill in all required fields before proceeding.";
    }
    errorMessage.style.display = "block";
  } else {
    // Hide the error message if it's currently visible
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.style.display = "none";

    // Proceed to the next form section
    formP.style.display = "none";
    global.currentPage = global.currentPage + 1;
    const nextFormP = document.getElementById("formP" + global.currentPage);
    
    // Check if the next form section element exists
    if (nextFormP !== null) {
      nextFormP.style.display = "block";
    }
  }
}

// Helper function to validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}




let formSubmitted = false; // Variable to track if the form has been submitted

// Add event listener to input fields to trigger goNext, sendFormData, or goBack on Enter key press
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    if (global.currentPage <= 3) {
      goNext();
    }
  }
});








        
        

        goBack = function() {
          if (global.currentPage === 0) return;
          if (document.getElementById("formP" + global.currentPage)) document.getElementById("formP" + global.currentPage).style.display = "none";
          else document.getElementById("finishForm").style.display = "none"
          global.currentPage = global.currentPage - 1;
          document.getElementById("formP" + global.currentPage).style.display = "block";
        }        
  
        const getSelected = function(evt) {
          if(evt.target.name == "school") {
            window.formStuff.schoolType = evt.target.value;
          }
          else if (evt.target.name == "newsletter") {
            window.formStuff.email = Boolean(evt.target.value);
          }
        }    

        const sendFormData = function () {
          console.log("submitting form!");
        
          let nameInput = document.getElementById("formNameInput");
          let emailInput = document.getElementById("formEmailInput");
          let ageInput = document.getElementById("formAgeInput");
          let stateInput = document.getElementById("formStateInput");
          let StateInput1 = document.getElementById("formStateInput1");
        
          // let studyInputs = document.querySelectorAll('input[name="formSchoolInput"]');
          // let newsletterInputs = document.querySelectorAll('input[name="formNewsletterInput"]');
        
          
          let studyInputs = document.getElementsByName('school');
          let newsletterInputs = document.getElementsByName('newsletter');

          if (nameInput && emailInput && ageInput && stateInput && StateInput1) {
            let name = nameInput.value;
            let email = emailInput.value;
            let age = ageInput.value;
            let state = stateInput.value;
            let study = '';
            let custom=StateInput1.value;
            let newsletter = '';
            
        
            for (let i = 0; i < studyInputs.length; i++) {
              if (studyInputs[i].checked) {
                study = studyInputs[i].value;
                break;
              }
            }
        
            for (let i = 0; i < newsletterInputs.length; i++) {
              if (newsletterInputs[i].checked) {
                newsletter = newsletterInputs[i].value;
                break;
              }
            }
        
            let results = fetch(`http://16.171.176.249/api/form_entry?name=${name}&age=${age}&email=${email}&state=${state}&study=${study}&custom=${custom}&newsletter=${newsletter}`, {
              method: "POST",
              headers: { 'Content-Type': 'application/json' },
            });
        
            if (results) {
              alert("Your form is submitted!");
            }
          }
        };
        
        useEffect(() => {
          sendFormData();
        }, []); 


        const fetchApiData = async (url) => {
          try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
          } catch (error) {
            console.log(error);
          }
        };
        
        const api = 'http://16.171.176.249/api/viewall';
        
        const fetchData = async () => {
          useEffect(() => {
            fetchApiData(api);
          }, []);
        };
        
        fetchData();
        
        
      
        
        

        const [showModal, setShowModal] = useState(false);
        const openModal = () => { setShowModal(true) }
        const closeModal = () => { setShowModal(false) }

        useEffect(() => {    
          document.querySelector("body").addEventListener("click", function(evt) {
            if(evt.target && evt.target.classList.contains("join-btn")) {
              openModal();
            }
          })

        if(showModal) {
          document.querySelector(".page-container").style.opacity = .2;
        }
        else {
          document.querySelector(".page-container").style.opacity = 1;
        }

        const handleModalClick = (event) => {
            var ignoreClickOnMeElement = document.getElementById('signup-modal');
            var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
            if (!isClickInsideElement) {
                closeModal();
                window.removeEventListener("click", handleModalClick);
            }
            if(document.getElementById("closeBtn") != null) {
                if (document.getElementById("closeBtn").contains(event.target) || document.getElementById("modal-close-btn").contains(event.target)) {      
                    closeModal(); 
                    window.removeEventListener("click", handleModalClick);                     
                }
            } 
        }

        setTimeout(() => {
          if(document.getElementById("signup-modal") != null) {
            window.addEventListener("click", handleModalClick);     
          }}, 50);           
        })  
        
        if(!showModal) {
          return null;
        }

        else {      
          return (
            <div className={styles["popup-container"]} id="signup-modal">  

              
              <div className="page-section" style={{alignItems: "center", padding: "2%"}}>
                <div id="modal-close-btn" className={styles["modal-close-btn"]}>
                    <Image src={closeIcon} loading="lazy"/>                          
                </div>
                <div className={`${styles["popup-col"]} ${styles["round-bg"]}`}>
                  <div className={styles["popup-title"]}>
                    <h3>Join a community of creators in our</h3>
                    <div className={styles["popup-community"]}>
                      <Image src={community} loading="lazy"/>
                      <div style={{marginLeft: ".5em"}}>
                        <Image src={slack} loading="lazy"/>
                      </div>                            
                    </div>                          
                  </div>
                  <div className="landing-four-col popup-four-col" id={styles["desktop-stats"]}>
                    <div className="block">
                      <Image src={people} loading="lazy"></Image>
                      <h3>A Big Community</h3>
                      <p>Meet thousands of people from diverse fields and connect with them.</p>
                    </div>
                    <div className="block">
                      <Image src={bulb} loading="lazy"></Image>
                      <h3>Collaborate Knowledge</h3>
                      <p>Exclusive exposure to industry experts and get a chance to learn from them.</p>
                    </div>
                  </div>
                  <div className="landing-four-col popup-four-col" id={styles["desktop-stats"]}>
                    <div className="block">
                      <Image src={message} loading="lazy"></Image>
                      <h3>Get feedback</h3>
                      <p>Collect all positive and negatives about your projects and products.</p>
                    </div>
                    <div className="block">
                      <Image src={ticket} loading="lazy"></Image>
                      <h3>Skill-storming events</h3>
                      <p>Participate in high-quality engaging events and learn skills.</p>
                    </div>
                  </div>  
                </div>
              <div className={styles["popup-col"]} style={{width: "100%"}}>
              <p id="errorMessage" style={{ display: 'none', color: 'red' }}></p>

                <div className={styles["individual-cards"]} id="formP0">
                  <div className={styles["popup-questions"]}>
                    <h3>How should we greet you?</h3>
                    <input id="formNameInput" type="text" placeholder="Ex. John Doe"  minLength = {5} maxLength={30} required ></input>
                  </div>                 
                  <div className={styles.progress}>
                    <div style={{ display: "inline-block", flexGrow: "1", marginRight: "1em" }}>
                      <span>0% completed</span>
                      <div className={styles["progress-bar"]}>
                          <div className={styles["progress-mover"]} style={{ width: "4%" }}></div>
                      </div>
                    </div>
                    <div className={styles["progress-btns"]}>
                      <svg onClick={goBack} width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="39" height="39" rx="10" fill="#015AFF" />
                          <path d="M16 21.2427L20.2426 17L24.4853 21.2427" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <svg onClick={goNext} width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(180deg)', marginLeft: "5px" }}>
                          <rect width="39" height="39" rx="10" fill="#015AFF" />
                          <path d="M16 21.2427L20.2426 17L24.4853 21.2427" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className={styles["individual-cards"]} id="formP1" style={{ display: "none" }}>
                  <div className={styles["popup-questions"]}>
                  <p id="errorMessage" style={{ display: 'none', color: 'red' }}></p>
                    <h3>What's your email address?</h3>
                    <input id="formEmailInput" type="email" placeholder="Ex. you@example.com" required></input>
                  </div>                 
                  <div className={styles.progress}>
                    <div style={{ display: "inline-block", flexGrow: "1", marginRight: "1em" }}>
                      <span>20% completed</span>
                      <div className={styles["progress-bar"]}>
                          <div className={styles["progress-mover"]} style={{ width: "20%" }}></div>
                      </div>
                    </div>
                    <div className={styles["progress-btns"]}>
                      <svg onClick={goBack} width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="39" height="39" rx="10" fill="#015AFF" />
                          <path d="M16 21.2427L20.2426 17L24.4853 21.2427" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <svg onClick={goNext} width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(180deg)', marginLeft: "5px" }}>
                          <rect width="39" height="39" rx="10" fill="#015AFF" />
                          <path d="M16 21.2427L20.2426 17L24.4853 21.2427" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className={styles["individual-cards"]} id="formP2" style={{ display: "none" }}>
                  <div className={styles["popup-questions"]}>
                  <p id="errorMessage" style={{ display: 'none', color: 'red' }}></p>
                    <h3>How old are you?</h3>
                    <input id="formAgeInput" type="number" placeholder="I am __ years old " max={99} required></input>
                  </div>                 
                  <div className={styles.progress}>
                    <div style={{ display: "inline-block", flexGrow: "1", marginRight: "1em" }}>
                      <span>40% completed</span>
                      <div className={styles["progress-bar"]}>
                          <div className={styles["progress-mover"]} style={{ width: "40%" }}></div>
                      </div>
                    </div>
                    <div className={styles["progress-btns"]}>
                      <svg onClick={goBack} width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="39" height="39" rx="10" fill="#015AFF" />
                          <path d="M16 21.2427L20.2426 17L24.4853 21.2427" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <svg onClick={goNext} width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(180deg)', marginLeft: "5px" }}>
                          <rect width="39" height="39" rx="10" fill="#015AFF" />
                          <path d="M16 21.2427L20.2426 17L24.4853 21.2427" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className={styles["individual-cards"]} id="formP3" style={{ display: "none" }}>
                <div className="popup-questions">
                <p id="errorMessage" style={{ display: 'none', color: 'red' }}></p>
                <h3>What state/UT do you belong to?</h3>
                <select
                  id="formStateInput"
                  required
                  style={{
                    // Your styles for the dropdown
                    width: '100%',
                    padding: '6px',
                    borderRadius: '15px',
                    border: '1px solid #ccc',
                    backgroundColor: '#fff',
                    color: '#000',
                    fontSize: '16px',
                    marginBottom: '15px',

                  }}
                >
                  <option value="">Select your state/UT</option>
                  {IndianStates.map((state) => (
                    <option key={state.code} value={state.name}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>

              
                  <div className={styles.progress}>
                    <div style={{ display: "inline-block", flexGrow: "1", marginRight: "1em" }}>
                      <span>60% completed</span>
                      <div className={styles["progress-bar"]}>
                        <div className={styles["progress-mover"]} style={{ width: "60%" }}></div>
                      </div>
                    </div>
                    <div className={styles["progress-btns"]}>
                      <svg
                        onClick={goBack}
                        width="39"
                        height="39"
                        viewBox="0 0 39 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="39" height="39" rx="10" fill="#015AFF" />
                        <path
                          d="M16 21.2427L20.2426 17L24.4853 21.2427"
                          stroke="white"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <svg
                        onClick={goNext}
                        width="39"
                        height="39"
                        viewBox="0 0 39 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ transform: "rotate(180deg)", marginLeft: "5px" }}
                      >
                        <rect width="39" height="39" rx="10" fill="#015AFF" />
                        <path
                          d="M16 21.2427L20.2426 17L24.4853 21.2427"
                          stroke="white"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                
                
          
                <div className={styles["individual-cards"]} id="formP4" style={{ display: "none" }}>
  <div className={styles["question-container"]}>
    <div className={`${styles["popup-questions"]} ${styles["radio-options"]}`}>
    <p id="errorMessage" style={{ display: 'none', color: 'red' }}></p>
      <h3>You study in...</h3>
      <div className={styles["radio-option"]}>
        <input id="formSchoolInput" onClick={getSelected} name="school" type="radio" value="high school" required></input>
        <label htmlFor="high school">High School</label>
      </div>
      <div className={styles["radio-option"]}>
        <input id="formSchoolInput" onClick={getSelected} name="school" type="radio" value="college"></input>
        <label htmlFor="college">College</label>
      </div>
    </div>
    <div className={styles["popup-questions"]}>
    <p id="errorMessage" style={{ display: 'none', color: 'red' }}></p>
      <h3>What inspires you to join CodeAsia's slack community?</h3>
      <input id="formStateInput1" name="custom" type="text" placeholder="Type your answer here..." required maxLength={40}></input>
    </div>
  </div>
  <div className={styles.progress}>
    <div style={{ display: "inline-block", flexGrow: "1", marginRight: "1em" }}>
      <span>80% completed</span>
      <div className={styles["progress-bar"]}>
        <div className={styles["progress-mover"]} style={{ width: "80%" }}></div>
      </div>
    </div>
    <div className={styles["progress-btns"]}>
      <svg onClick={goBack} width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="39" height="39" rx="10" fill="#015AFF" />
        <path d="M16 21.2427L20.2426 17L24.4853 21.2427" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <svg onClick={goNext}  width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(180deg)', marginLeft: "5px" }}>
        <rect width="39" height="39" rx="10" fill="#015AFF" />
        <path d="M16 21.2427L20.2426 17L24.4853 21.2427" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  </div>
</div>

                <div className={styles["individual-cards"]} id="formP5" style={{display: "none" }}>
                
                  <div className={`${styles["popup-questions"]} ${styles["radio-options"]}`}>
                  <p id="errorMessage" style={{ display: 'none', color: 'red' }}></p>
                    <h3>Do you want our newletters delivered to your inbox?</h3>
                    <div className={styles["radio-option"]}>
                      <input id="formNewsletterInput" onClick={getSelected} name="newsletter" type="radio" value={true} re></input>
                      <label for="true">Yeah, sure!</label>
                    </div>
                    <div className={styles["radio-option"]}>
                      <input id="formNewsletterInput" onClick={getSelected} name="newsletter" type="radio" value={false}></input>
                      <label for="false">I'm not interested</label>
                    </div>                    
                  </div>
                                   
                  <div className={styles.progress}>
                    <div style={{ display: "inline-block", flexGrow: "1", marginRight: "1em"}}>
                      <span>99% completed</span>
                      <div className={styles["progress-bar"]}>
                          <div className={styles["progress-mover"]} style={{ width: "99%" }}></div>
                      </div>
                    </div>
                    <div className={styles["progress-btns"]}>
                      <svg onClick={goBack} width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="39" height="39" rx="10" fill="#015AFF" />
                          <path d="M16 21.2427L20.2426 17L24.4853 21.2427" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      { /*<svg onClick={sendFormData} id="submitBtn" width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(180deg)', marginLeft: "5px" }}>
                          <rect width="39" height="39" rx="10" fill="#015AFF" />
                          <path d="M16 21.2427L20.2426 17L24.4853 21.2427" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
          </svg> */ }
                      <button onClick={sendFormData} id="submitBtn" >Submit!</button>
                    </div>
                  </div>
                </div>
                <div className={styles["individual-cards"]} id="finishForm" style={{ display: "none" }}>
                  <div className={styles["popup-questions"]}>
                    <h3 id="resultMessage"></h3>
                  </div>                  
                  <div className={styles.progress}>
                    <div style={{ display: "inline-block" }}>
                      <span>100% completed</span>
                      <div className={styles["progress-bar"]}>
                          <div className={styles["progress-mover"]} style={{ width: "100%" }}></div>
                      </div>
                    </div>
                    <div className={styles["progress-btns"]}>
                      <svg onClick={goBack} width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="39" height="39" rx="10" fill="#015AFF" />
                          <path d="M16 21.2427L20.2426 17L24.4853 21.2427" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <svg width="94" height="39" viewBox="0 0 94 39" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={closeModal} id="closeBtn">
                          <rect width="94" height="39" rx="10" fill="#015AFF" />
                          <path d="M47.516 25.196C46.5267 25.196 45.6493 24.986 44.884 24.566C44.128 24.146 43.54 23.5533 43.12 22.788C42.7 22.0133 42.49 21.1173 42.49 20.1C42.49 19.092 42.7047 18.2053 43.134 17.44C43.5727 16.6653 44.1747 16.068 44.94 15.648C45.7147 15.2187 46.592 15.004 47.572 15.004C48.5147 15.004 49.3593 15.1953 50.106 15.578L49.91 17.286C49.5087 17.1087 49.1213 16.9733 48.748 16.88C48.384 16.7773 47.9873 16.726 47.558 16.726C46.5593 16.726 45.7893 17.034 45.248 17.65C44.716 18.266 44.45 19.0827 44.45 20.1C44.45 21.1173 44.7113 21.934 45.234 22.55C45.766 23.166 46.5267 23.474 47.516 23.474C47.9547 23.474 48.356 23.4273 48.72 23.334C49.0933 23.2407 49.49 23.1007 49.91 22.914L50.106 24.622C49.294 25.0047 48.4307 25.196 47.516 25.196ZM53.1353 25.14C52.5379 25.14 52.0899 24.972 51.7913 24.636C51.4926 24.2907 51.3433 23.8473 51.3433 23.306V14.5H53.0793V22.592C53.0793 22.9653 53.0979 23.2313 53.1353 23.39C53.1819 23.5393 53.2566 23.6327 53.3593 23.67C53.4713 23.698 53.6579 23.712 53.9193 23.712L53.7653 25.14H53.1353ZM58.1306 25.14C57.3933 25.14 56.754 24.9767 56.2126 24.65C55.6713 24.3233 55.256 23.8847 54.9666 23.334C54.6773 22.7833 54.5326 22.1767 54.5326 21.514C54.5326 20.8513 54.6773 20.24 54.9666 19.68C55.256 19.12 55.6713 18.6767 56.2126 18.35C56.754 18.0233 57.3933 17.86 58.1306 17.86C58.868 17.86 59.5073 18.0233 60.0486 18.35C60.59 18.6767 61.0053 19.12 61.2946 19.68C61.584 20.24 61.7286 20.8513 61.7286 21.514C61.7286 22.1767 61.584 22.7833 61.2946 23.334C61.0053 23.8847 60.59 24.3233 60.0486 24.65C59.5073 24.9767 58.868 25.14 58.1306 25.14ZM58.1306 23.712C58.7 23.712 59.1433 23.5113 59.4606 23.11C59.7873 22.7087 59.9506 22.1767 59.9506 21.514C59.9506 20.842 59.7873 20.3053 59.4606 19.904C59.1433 19.4933 58.7 19.288 58.1306 19.288C57.5613 19.288 57.1133 19.4933 56.7866 19.904C56.4693 20.3053 56.3106 20.842 56.3106 21.514C56.3106 22.1767 56.4693 22.7087 56.7866 23.11C57.1133 23.5113 57.5613 23.712 58.1306 23.712ZM64.925 25.14C64.477 25.14 64.0663 25.098 63.693 25.014C63.329 24.93 62.951 24.7993 62.559 24.622L62.713 23.138C63.105 23.3713 63.469 23.5487 63.805 23.67C64.1503 23.782 64.505 23.838 64.869 23.838C65.5783 23.838 65.933 23.6047 65.933 23.138C65.933 22.886 65.8397 22.6947 65.653 22.564C65.4663 22.424 65.1303 22.2607 64.645 22.074C63.9543 21.822 63.4457 21.5373 63.119 21.22C62.7923 20.8933 62.629 20.4547 62.629 19.904C62.629 19.2973 62.8623 18.8073 63.329 18.434C63.7957 18.0513 64.4257 17.86 65.219 17.86C66.0123 17.86 66.7357 18.042 67.389 18.406L67.235 19.89C66.8803 19.6473 66.5443 19.4607 66.227 19.33C65.919 19.1993 65.5923 19.134 65.247 19.134C64.9483 19.134 64.715 19.1947 64.547 19.316C64.3883 19.4373 64.309 19.61 64.309 19.834C64.309 20.0113 64.3557 20.156 64.449 20.268C64.5517 20.38 64.6917 20.4827 64.869 20.576C65.0463 20.66 65.3403 20.7813 65.751 20.94C66.4323 21.2013 66.9223 21.4907 67.221 21.808C67.5197 22.116 67.669 22.5313 67.669 23.054C67.669 23.7167 67.431 24.23 66.955 24.594C66.479 24.958 65.8023 25.14 64.925 25.14ZM72.2309 25.14C71.4189 25.14 70.7236 24.9767 70.1449 24.65C69.5756 24.314 69.1463 23.8707 68.8569 23.32C68.5769 22.76 68.4369 22.1393 68.4369 21.458C68.4369 20.8047 68.5723 20.2073 68.8429 19.666C69.1136 19.1247 69.5056 18.6953 70.0189 18.378C70.5323 18.0513 71.1436 17.888 71.8529 17.888C72.5063 17.888 73.0569 18.0233 73.5049 18.294C73.9623 18.5647 74.3029 18.9287 74.5269 19.386C74.7603 19.8433 74.8769 20.3567 74.8769 20.926C74.8769 21.206 74.8396 21.5233 74.7649 21.878H70.2429C70.3363 22.494 70.5789 22.956 70.9709 23.264C71.3629 23.5627 71.8343 23.712 72.3849 23.712C73.1409 23.712 73.8409 23.5207 74.4849 23.138L74.5689 24.608C74.2703 24.7667 73.9203 24.8973 73.5189 25C73.1269 25.0933 72.6976 25.14 72.2309 25.14ZM73.1129 20.702C73.1129 20.338 73.0103 20.016 72.8049 19.736C72.5996 19.456 72.2823 19.316 71.8529 19.316C71.4236 19.316 71.0783 19.442 70.8169 19.694C70.5556 19.946 70.3783 20.282 70.2849 20.702H73.1129Z" fill="white" />
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.195 16.2051C16.9217 15.9317 16.4785 15.9316 16.2051 16.205C15.9317 16.4783 15.9316 16.9215 16.205 17.1949L19.0103 20.0008L16.2129 22.7983C15.9395 23.0716 15.9395 23.5149 16.2129 23.7882C16.4862 24.0616 16.9294 24.0616 17.2028 23.7882L20.0001 20.9909L22.8013 23.7926C23.0746 24.066 23.5178 24.066 23.7912 23.7927C24.0646 23.5194 24.0647 23.0761 23.7913 22.8028L20.9901 20.0009L23.7936 17.1974C24.067 16.9241 24.067 16.4808 23.7936 16.2075C23.5202 15.9341 23.077 15.9341 22.8036 16.2075L20.0002 19.0109L17.195 16.2051Z" fill="white" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles["popup-col"]} ${styles["mobile-left-col"]}`} style={{display: "none"}}>
                <div className="landing-four-col popup-four-col">
                  <div className="block">
                    <Image src={people} loading="lazy"></Image>
                    <h3>A Big Community</h3>
                    <p>Meet thousands of people from diverse fields and connect with them.</p>
                  </div>
                  <div className="block">
                    <Image src={bulb} loading="lazy"></Image>
                    <h3>Collaborate Knowledge</h3>
                    <p>Exclusive exposure to industry experts and get a chance to learn from them.</p>
                  </div>
                </div>
                <div className="landing-four-col popup-four-col">
                  <div className="block">
                    <Image src={message} loading="lazy"></Image>
                    <h3>Get feedback</h3>
                    <p>Collect all positive and negatives about your projects and products.</p>
                  </div>
                  <div className="block">
                    <Image src={ticket}></Image>
                    <h3>Skill-storming events</h3>
                    <p>Participate in high-quality engaging events and learn skills.</p>
                  </div>
                </div>  
              </div>
            </div>
          </div>
        )
      }
      
    } 
    else {
      return (
        null
      )
    }   
}


export default JoinUs;