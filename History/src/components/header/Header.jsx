import image from './../../assets/mr-cup-fabien-barral-Fo5dTm6ID1Y-unsplash.jpg';
import style from './Header.module.scss';
import SearchForm from '../search/SearchForm';
import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import ByDate from '../../pages/ByDate';


export const Header = (props) => {

    const [date, setDate] = useState('');
  const [events, setEvents] = useState(null);
  const [error, setError] = useState('');

  // Function to fetch data from Wikimedia API
  const fetchData = async (date) => {
    const [year, day, month] = date.split('-');  
    const dateString = `${month}/${day}`;
    
    
    try {
        const response = await fetch(`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/events/${dateString}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
    
        const eventsSlice = result.events.slice((pageNum - 1) * 10, pageNum * 10);
        
       
        
        setEvents((prevData) => [...prevData, ...eventsSlice]); 
        setError(false);
      } catch (error) {
        setError(error.message);
        setEvents(false);
      }
    };



  // Handle date input change
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  // Handle form submission to fetch data by date
  const handleSubmit = (e) => {
    e.preventDefault();
    if (date) {
      fetchData(date);
    }
  };


    return (
        <>
            <header className={style.header}>
                <img src={image} alt="History" />
                <div>
                    <hgroup>
                        <span>
                            <h1>{props.title}</h1>
                            {location.pathname === '/ByDate' ? (
                                <span className={style.searchBox} style={{ display: 'block' }}> <form onSubmit={handleSubmit}>
                                <input
                                  type="date"
                                  value={date}
                                  onChange={handleDateChange}
                                  required
                                />
                                <button type="submit">Search</button>
                              </form>
                              {error && <p>{error}</p>}
                              {/* Pass fetched events to Main component */}
                              <ByDate events={events} /> </span> ) : ( ' ')}
                        </span>
                    <p>What happened on this day - historical events, deaths and births thoughout time</p>
                    </hgroup>
                    <span className={`${style.circle}  ${style.topLeft}`} ></span>
                    <span className={`${style.circle}  ${style.topRight}`}></span>
                    <span className={`${style.circle}  ${style.bottomLeft}`}></span>
                    <span className={`${style.circle}  ${style.bottomRight}`}></span> 
                </div>
            </header>
        </>
    )
}