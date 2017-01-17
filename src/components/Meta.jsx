import React, { PropTypes as P } from 'react';
import { TIE } from '../constants';

const Meta = ({ player, winner }) => {
  const text = (winner === TIE)
    ? TIE
    : `${winner ? 'Winner' : 'Current Player'} is ${winner || player}`;
  return <h2>{text}</h2>;
};

Meta.propTypes = {
  player: P.string,
  winner: P.string,
};

export default Meta;
