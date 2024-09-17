import { NavLink } from "react-router-dom";
import React from 'react';
import style from './Navigation.module.scss';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';



export function Navbar(){
    const location = useLocation();
  const [activePath, setActivePath] = useState('active');


  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

    return(
        <>
            <nav className={style.mainNav}>
                <ul>
                    <li>
                        <NavLink to="/ByDate" className={({isActive}) => isActive ? style.active : '' }> By Date </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className={({isActive}) => isActive ? style.active : '' } > Today </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Since" className={({isActive}) => isActive ? style.active : '' }  > Since </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
} 