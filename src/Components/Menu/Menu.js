import React from 'react';
import { Link } from "react-router-dom";

import './Menu.css';

function Menu() {
  return (
    <nav className='nav'>
      <ul className='menu'>
        <Link className='menu__item' to="/">Home</Link>
        <Link className='menu__item' to="/characters">Personajes</Link>
        <Link className='menu__item' to="/episodes">Episodios</Link>
      </ul>
    </nav>
  );
}

export default Menu;
