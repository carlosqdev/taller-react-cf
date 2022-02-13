import React from 'react';
import { Link } from "react-router-dom";

import "./NotFound.css";

function NotFound() {
  return (
    <section className='section__notfound'>
      <h1 className='title'>Recurso no encontrado</h1>
      <Link className='title link' to="/">Ir al inicio</Link>
    </section>
  )
}

export default NotFound