import React from "react";
import './Timeline.scss';
import { useState, useEffect } from 'react';
import { Navbar } from "../components/Navigation";
import style from './box.module.scss';
import { Lamp } from "../components/lamp/Lamp";
import { BackToTop } from "../components/backTop/BackToTop";

export function Today(props){

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1); 
  

    const fetchData = async (pageNum) => {
      setIsLoading(true);
      const today = new Date();
      const month = today.getMonth() + 1; 
      const day = today.getDate();
      const dateString = `${month}/${day}`;
  
      try {
        const response = await fetch(`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/events/${dateString}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
    
        const eventsSlice = result.events.slice((pageNum - 1) * 10, pageNum * 10);
        
       
        
        setData((prevData) => [...prevData, ...eventsSlice]); 
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
  
    useEffect(() => {
      fetchData(page);
    }, [page]);
  
   
    useEffect(() => {
      const handleScroll = () => {
        if (
          window.innerHeight + document.documentElement.scrollTop + 1 >=
          document.documentElement.scrollHeight
        ) {
          setPage((prevPage) => prevPage + 1);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      
      return () => window.removeEventListener('scroll', handleScroll); 
    }, []);
  
    if (error) {
      return <div>Error: {error}</div>;
    }
    const truncateText = (text, maxLength) => {
      if (text.length <= maxLength) return text;
      return text.slice(0, maxLength) + "...";
    };
    
const value = 'dark';

    
    
    return(
      <>
      <Lamp />
      <div className={style.box}>
                    <hgroup>
                        <span>
                            <h1>On this day</h1>   
                        </span>
                    <p>What happened on this day - historical events, deaths and births thoughout time</p>
                    </hgroup>
                    <span className={`${style.circle}  ${style.topLeft}`} ></span>
                    <span className={`${style.circle}  ${style.topRight}`}></span>
                    <span className={`${style.circle}  ${style.bottomLeft}`}></span>
                    <span className={`${style.circle}  ${style.bottomRight}`}></span> 
                </div>
                <Navbar />
        <div className="timeline">
            <div className="circled"></div>
          {data.map((event, index) => ( 
         <div className={`timelineEvent ${index % 2 === 0 ? 'right' : 'left'}`} key={index}>
          <div className="timeline-content">
            <h3>YEAR: {event.year}</h3>
            <div className="circle"><hr /> </div>
            <p className={value === 'light' ? 'LightMode' : 'DarkMode'}  > {truncateText(event.text, 100)} </p>
            <a href={event.pages[0].content_urls.desktop.page}>Read more <span role="img" aria-label="book">📖</span></a>
            
          </div>
         
        </div>
        
      ))}
        {isLoading && <p>Loading more events...</p>}
    </div>
    <BackToTop />
    </>
    );
}; 


