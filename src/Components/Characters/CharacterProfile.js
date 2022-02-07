import React from 'react';
import PropTypes from "prop-types";

import "./CharacterProfile.css";

function CharacterProfile({photography, name, gender, origin, species, status }) {
  return (
    <section className='card'>
      <img className='card__img' loading='lazy' src={photography} alt={name} />
      <div className='card__wrapper'>
        <h2 className='card__title'>Nombre: {name}</h2>
        <p className='card__paragraph'>Genero: {gender}</p>
        <p className='card__paragraph'>Origen: {origin}</p>
        <p className='card__paragraph'>Especie: {species}</p>
        <p className='card__paragraph'>Estado: {status}</p>
      </div>
    </section>
  )
}

CharacterProfile.propTypes = {
  photography: PropTypes.string,
  name: PropTypes.string,
  gender: PropTypes.string,
  origin: PropTypes.string,
  species: PropTypes.string,
  status: PropTypes.string,
}
export default CharacterProfile;
