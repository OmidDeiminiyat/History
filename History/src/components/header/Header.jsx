import image from './../../assets/mr-cup-fabien-barral-Fo5dTm6ID1Y-unsplash.jpg';
import style from './Header.module.scss';
import SearchForm from '../search/SearchForm';
import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';


export const Header = () => {

    return (
        <>
            <header className={style.header}>
                <img src={image} alt="History" />
               
            </header>
        </>
    )
}