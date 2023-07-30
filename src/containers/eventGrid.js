import Event from "../components/event/event.js";
import EventDone from "../components/eventDone/eventDone";
import search from "../icons/search.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

function EventGrid(props) {
  const [events, setEvents] = useState([
    {
      eventName: "🦄 Events Coming Soon",
      eventDate: "8/28/2021",
      eventTime: "1:00 PM PST",
      eventDesc: "Be a part of our exclusive AMA’s, Workshops & Speakers sessions with industry leaders! 🦄",
      eventImg: "/images/a1.jpeg",
    },
    {
      eventName: "🚀 Events Coming Soon",
      eventDate: "8/29/2021",
      eventTime: "2:00 PM PST",
      eventDesc: "Be a part of our exclusive AMA’s, Workshops & Speakers sessions with industry leaders! 🦄",
      eventImg: "/images/a2.jpeg",
    },
    {
      eventName: "📈 Events Coming Soon",
      eventDate: "8/30/2021",
      eventTime: "3:00 PM PST",
      eventDesc: "Be a part of our exclusive AMA’s, Workshops & Speakers sessions with industry leaders! 🦄",
      eventImg: "/images/a3.jpeg",
    },
    // Additional events...
  ]);
  

  const [doneEvent, setDoneEvent] = useState([
    {
      eventName: "Ask Me Anything with Tanay Pratap",
      eventDate: "8/28/2021",
      eventDesc: "Participate in high-quality...",
    },
    // Additional done events...
  ]);

  return (
    <>
      <div className="page-title">
        <div className="block">
          <h3>
            <i className="fas fa-calendar"></i> Explore Our Trending Events 📅
          </h3>
          <div
            style={{
              position: "relative",
              width: "100%",
              marginBottom: "2rem",
            }}
          >
            <p>Be a part of our in-person and virtual events!</p>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "auto",
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: "38px",
                lineHeight: "55px",
                textTransform: "capitalize",
                backgroundImage:
                  "linear-gradient(93.84deg, #015AFF 0%, #D817F8 51.97%, #FFA51E 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                marginTop: "1rem",
                maxWidth: "100%", 
              }}
            >
              Event Details and Recording will be available here soon
              <span style={{ color: "#000", lineHeight: "0", verticalAlign: "middle" }}> 🚀</span>
            </div>
          </div>
        </div>
      </div>
      <div className="page-section">
        <div className="events-grid">
          {events.map((event, index) => {
            return (
              <Event
                key={index}
                eventName={event.eventName}
                eventDate={event.eventDate}
                eventTime={event.eventTime}
                eventDesc={event.eventDesc}
                eventTags={event.eventTags}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default EventGrid;
