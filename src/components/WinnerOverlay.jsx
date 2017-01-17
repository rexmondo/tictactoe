import React, { PropTypes as P } from 'react';

const WinnerOverlay = ({ winner, restart }) => (
  <button 
    className="overlay" 
    onClick={restart}
  >
    Restart Game?
  </button>
);

WinnerOverlay.propTypes =  {
  winner: P.string,
  restart: P.func,
};

export default WinnerOverlay;
