import React, { useState, useEffect } from 'react';
import backToTopIcon from './../../assets/icons8-arrow-up-50.png'; 
import style from './BackToTop.module.scss';

 export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  useEffect(() => {
   
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={style.backToTop}>
      {isVisible && (
        <div onClick={scrollToTop} className="back-to-top-btn">
          <img src={backToTopIcon} alt="Go to top" className="back-to-top-icon" />
        </div>
      )}
    </div>
  );
};

