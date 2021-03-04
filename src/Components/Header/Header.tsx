import React from 'react';
import logo from './logo.svg';
import s from './Header.module.css';

function Header() {
  return (
    <header className={s.header}>
        <img src={logo} alt=""/>
    </header>
  );
}

export default Header;
