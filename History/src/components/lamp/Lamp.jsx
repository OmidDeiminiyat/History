import lamp from './../../assets/icons8-light-50.png';
import lightLamp from './../../assets/icons8-light-50-2.png'
import style from './Lamp.module.scss';
import { useState, useEffect } from 'react';
import { Today } from '../../pages/Today';


export const Lamp = () => {
    const [theme, setTheme] = useState('light');
    const [headingClass, setHeadingClass] = useState('LightMode');

    const toggleTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme); 
    };
  
   
    useEffect(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setTheme(savedTheme);
      }
    }, []);
  
  
    useEffect(() => {
      document.body.className = theme; 
      setHeadingClass('DarkMode')
    }, [theme]);
    return (
        <span onClick={toggleTheme} className={style.themetogglebtn}>
          <img 
            src={theme === 'light' ? lamp : lightLamp} 
            className={style.Lamp}
          />
        </span>    
    )
}