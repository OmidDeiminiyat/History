import image from './../../assets/HistoryImage.png';
import style from './Header.module.scss';
import SearchForm from '../search/SearchForm';
import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import { Navbar } from '../Navigation';

export const Header = () => {

    return (
        <>
            <header className={style.header}>
                <img src={image} alt="History" />
            </header>
        </>
    )
}