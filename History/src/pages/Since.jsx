
import React, { useState, useEffect } from 'react';
import {Lamp} from './../components/lamp/Lamp';
import { Navbar } from '../components/Navigation';
import './TimeLine.scss';
import style from './../pages/box.module.scss';
import AboutStyle from './About.module.scss';
import { BackToTop } from '../components/backTop/BackToTop';


export const Since = () => {
    


  return (
   <>
    <Lamp />
      <div className={style.box}>
                    <hgroup>
                        <span>
                            <h1>About us</h1>   
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
   <div className={AboutStyle.about}>
        <h1>About Us</h1>
        <article>
            <p>
                Welcome to <strong>History Hub</strong>, where we take the past seriously... well, sort of. 
                From ancient pyramids to that weird hat Napoleon wore, we've got you covered.
            </p>
            <p>
                We started this website because, well, we needed a way to convince people 
                that we know what we're talking about when we yell at historical inaccuracies in movies. 
                Spoiler alert: <em>Gladiator</em> was totally off.
            </p>
            <p>
                Our team of time-traveling experts (okay, not really, but we wish!) is dedicated 
                to bringing you the quirkiest, funnest, and occasionally true historical facts 
                from across the centuries. Prepare for a journey back in time—just don’t forget 
                your snacks. History is long, and we don’t take intermissions.
            </p>
            <p>
                So, whether you're a casual fan of history or someone who can name all of Henry VIII's 
                wives in order (we see you, Tudor fans), you're in the right place. 
                Just don’t ask us to build a time machine—we're still working on that.
            </p>
            <p class="signature">Sincerely, The History Buffs You Never Asked For</p>
        </article>
    </div>
    <BackToTop />
   </>
    
  );
};


