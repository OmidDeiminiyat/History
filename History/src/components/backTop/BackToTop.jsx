import React, { useState, useEffect } from 'react';
import backToTopIcon from './../../assets/icons8-arrow-up-50.png'; 

 export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the window to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll effect
    });
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', toggleVisibility);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="back-to-top">
      {isVisible && (
        <div onClick={scrollToTop} className="back-to-top-btn">
          <img src={backToTopIcon} alt="Go to top" className="back-to-top-icon" />
        </div>
      )}
    </div>
  );
};

