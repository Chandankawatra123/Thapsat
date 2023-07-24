import Event from "../components/event/event.js";
import EventDone from "../components/eventDone/eventDone"
import search from "../icons/search.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

function EventGrid(props) {
  const [events, setEvents] = useState([
    {
      eventName: "Ask Me Anything with Tanay Pratap",
      eventDate: "8/28/2021",
      eventTime: "1:00 PM PST",
      eventDesc: "Participate in high-quality, engaging events and learn skills.",
    },
    {
      eventName: "Ask Me Anything with Elon Musk",
      eventDate: "8/29/2021",
      eventTime: "2:00 PM PST",
      eventDesc: "Participate in high-quality, engaging events and learn skills.",
    },
    {
      eventName: "Ask Me Anything with Jeff Bezos",
      eventDate: "8/30/2021",
      eventTime: "3:00 PM PST",
      eventDesc: "Participate in high-quality, engaging events and learn skills.",
    },
    {
      eventName: "Ask Me Anything with Bill Gates",
      eventDate: "8/31/2021",
      eventTime: "4:00 PM PST",
      eventDesc: "Participate in high-quality,engaging events and learn skills.",
    },
    {
      eventName: "Ask Me Anything with Joe Biden",
      eventDate: "9/1/2021",
      eventTime: "1:00 PM PST",
      eventDesc: "Participate in high-quality, engaging events and learn skills.",
    }
  ]);

  const [doneEvent, setDoneevent] = useState([
    {
      eventName: "Ask Me Anything with Tanay Pratap",
      eventDate: "8/28/2021",
      eventDesc: "Participate in high-quality...",
    },
    {
      eventName: "Ask Me Anything with Tanay Pratap",
      eventDate: "8/28/2021",
      eventDesc: "Participate in high-quality...",
    },
    {
      eventName: "Ask Me Anything with Tanay Pratap",
      eventDate: "8/28/2021",
      eventDesc: "Participate in high-quality...",
    },
    {
      eventName: "Ask Me Anything with Tanay Pratap",
      eventDate: "8/28/2021",
      eventDesc: "Participate in high-quality...",
    },
  ])


  return (
    <>
      <div className="page-title" style={{ justifyContent: "center" }}>
        <div className="block">
        <h4>Explore trending events </h4>
        <h6>(Event Description Down Below)</h6>
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
            )
          })
          }
        </div>
      </div>

      <div className="page-title" style={{ justifyContent: "center" }}>
        <div className="block">
        <h4>Recent Replay 📌</h4>
        <h6>(Event Description Down Below)</h6>
        <h6 className="lasth6">Swipe Right</h6>
        </div>
      </div>
      <div className="page-section">
        <div className="events-grid2">
          {doneEvent.map((event, index) => {
            return (
              <EventDone
                key={index}
                eventName={event.eventName}
                eventDate={event.eventDate}
                eventDesc={event.eventDesc}
              />
            )
          })
          }
        </div>
      </div>

    </>
  )
}

export default EventGrid;