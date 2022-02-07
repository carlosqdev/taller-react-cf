import React from 'react';
import image from "../../assets/RickAndMorty.jpg"
import "./Home.css";

function Home() {
  return (
    <div className='container'>
      <img
        className="img"
        src={image}
        alt="Rick and Morty"
        width="100%" />
    </div>
  );
}

export default Home;
