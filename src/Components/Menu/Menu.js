import React from 'react';
import logo from "../../assets/RickAndMortyLogo.png";

import { Link } from "react-router-dom";

import './Menu.css';

function Menu() {
  return (
    <nav className='nav'>
      <ul className='menu'>
        <Link className='menu__item' to={`${process.env.PUBLIC_URL}/`}>
          <img className='logo' src={logo} alt="Rick y Morty" />
        </Link>
        <Link className='menu__item' to={`${process.env.PUBLIC_URL}characters`}>Personajes</Link>
      </ul>
    </nav>
  );
}

export default Menu;
