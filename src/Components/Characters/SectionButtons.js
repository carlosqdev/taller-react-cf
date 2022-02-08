import React from 'react';
import PropTypes from "prop-types";

import "./SectionButtons.css";

function SectionButtons({decrement, increment, minMaxCounter, counter}) {
  return (
    <section className='wrapper_button'>
        <button
          className={counter === minMaxCounter.min ? "button disabled" : "button"}
          onClick={decrement}
          type="button"
          disabled={counter === minMaxCounter.min ? true : false}
        >
          Anterior
        </button>
        <button
          className={counter === minMaxCounter.max ? "button disabled" : "button"}
          onClick={increment}
          type="button"
          disabled={counter === minMaxCounter.max ? true : false}
        >
          Siguiente
        </button>
      </section>
  )
}

SectionButtons.propTypes = {
  decrement: PropTypes.func,
  increment: PropTypes.func,
  minMaxCounter: PropTypes.object,
  counter: PropTypes.number,
}
export default SectionButtons;
