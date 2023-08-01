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
        

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


function goNext() {
  const formP = document.getElementById("formP" + global.currentPage);

  if (formP === null) {
    return; 
  }

  const requiredFields = formP.querySelectorAll('input[required]');
  const emptyFields = Array.from(requiredFields).filter(field => field.value.trim() === '');
  const invalidEmailFields = Array.from(requiredFields).filter(field => field.type === 'email' && !isValidEmail(field.value));

  const errorMessage = document.getElementById("errorMessage");

  if (emptyFields.length > 0 || invalidEmailFields.length > 0) {

    if (invalidEmailFields.length > 0) {
      errorMessage.textContent = "Please ensure that email fields are valid.";
    } else {
      errorMessage.textContent = "Please fill in all required fields before proceeding.";
    }
    errorMessage.style.display = "block";
  } else {
  
    errorMessage.style.display = "none";

    formP.style.display = "none";
    global.currentPage = global.currentPage + 1;
    const nextFormP = document.getElementById("formP" + global.currentPage);

    if (nextFormP !== null) {
      nextFormP.style.display = "block";
    } else {

      sendFormData();
    }
  }
}


document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    if (global.currentPage <= 4 && global.currentPage !== 3) {
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
        
            let results = fetch(`https://fun.codeasia.org/api/form_entry?name=${name}&age=${age}&email=${email}&state=${state}&study=${study}&custom=${custom}&newsletter=${newsletter}`, {
              method: "POST",
              headers: { 'Content-Type': 'application/json' },
            });
        
            if (results) {
             
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
        
        const api = 'https://fun.codeasia.org/api/viewall';
        
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
      
          const closeBtn = document.getElementById("closeBtn");
          const modalCloseBtn = document.getElementById("modal-close-btn");
        
          if (closeBtn !== null && closeBtn.contains(event.target)) {
            closeModal();
            window.removeEventListener("click", handleModalClick);
          }
        
          if (modalCloseBtn !== null && modalCloseBtn.contains(event.target)) {
            closeModal();
            window.removeEventListener("click", handleModalClick);
          }
        };
        

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
                      { /* <svg onClick={goNext}  id="submitBtn" width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(180deg)', marginLeft: "5px" }}>
                          <rect width="39" height="39" rx="10" fill="#015AFF" />
                          <path d="M16 21.2427L20.2426 17L24.4853 21.2427" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>*/}
                  <button onClick={() => { sendFormData(); goNext(); }} id="submitBtn">Submit!</button>
                    </div>
                  </div>
                </div>
                <div className={styles["individual-cards"]} id="formP6" style={{ display: "none" }}>
                  <div className={styles["popup-questions"]}>
                    <h5 id="resultMessage">Thanks For filling out the form. We'll review your request and send you the Slack Request at your registered email address ✅ <br/><br/>

                    Until then, please make sure to check your Inbox regularly 📩
                    </h5>
                  </div>                  
                  <div className={styles.progress}>
                  <div style={{ display: "inline-block", flexGrow: "1", marginRight: "1em"}}>
                  <span>100% completed</span>
                  <div className={styles["progress-bar"]}>
                      <div className={styles["progress-mover"]} style={{ width: "99%" }}></div>
                  </div>
                </div>
                    <div className={styles["progress-btns"]}>
               

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
                    <Image src={ticket} loading="lazy"></Image>
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
