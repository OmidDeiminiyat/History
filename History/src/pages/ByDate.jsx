import './Timeline.scss';
import style from './box.module.scss';
import { Navbar } from '../components/Navigation';
import React, { useState, useEffect } from "react";
import { Lamp } from '../components/lamp/Lamp';
import { BackToTop } from '../components/backTop/BackToTop';
import book from './../assets/icons8-bookmark-25.png';

export const ByDate = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  const fetchEvents = async (day, month) => {
    if (!day || !month) return; 
    const dateString = `${month}/${day}`; 

    try {
      const response = await fetch(
        `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/events/${dateString}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch events.");
      }

      const data = await response.json();
      setEvents(data.events); 
      setError(null); 
    } catch (err) {
      setError(err.message); 
      setEvents([]); 
    }
  };

  useEffect(() => {
    if (day && month) {
      fetchEvents(day, month); 
    }
  }, [day, month]);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };
  return (
          <>
           <Lamp />
           <div className={style.box}>
                    <hgroup>
                        <span>
                            <h1>On: 
                            <input
                          id="day"
                          type="number"
                          min="1"
                          max="31"
                          value={day}
                          onChange={(e) => setDay(e.target.value)}
                           placeholder="0"
                        />/
                        <input
                        id="month"
                        type="number"
                        min="1"
                        max="12"
                        value={month}
                        onChange={(e) => setMonth(e.target.value)}
                        placeholder="0"
                       />
                      </h1>   
                        </span>
                    <p>What happened on this day - historical events, deaths and births thoughout time</p>
                    </hgroup>
                    <span className={`${style.circle}  ${style.topLeft}`} ></span>
                    <span className={`${style.circle}  ${style.topRight}`}></span>
                    <span className={`${style.circle}  ${style.bottomLeft}`}></span>
                    <span className={`${style.circle}  ${style.bottomRight}`}></span> 
                </div>
                <Navbar />
                <div class="line"></div>
               
                {error && <p style={{ color: "red" }}>{error}</p>}
                {/* Display Events */}
                <div className="timeline">
                <div className="circled"></div>
                  {events.map((event, index) => (
                    <div className={`timelineEvent ${index % 2 === 0 ? 'right' : 'left'}`} key={index}>
                    <div className="timeline-content">
                      <h3>YEAR: {event.year}</h3>
                      <div className="circle"><hr /> </div>
                      <p> {truncateText(event.text, 100)}</p>
                      <a href={event.pages[0].content_urls.desktop.page}><span role="image"><img src={book} alt="" /></span>  Read more </a>
                      
                    </div>
                   
                  </div>
                  ))}
                </div>
                <BackToTop />
        </>


  );
};


