import React, { PropTypes as P } from 'react';

const Meta = ({ player, winner }) => (
  <h2 className="game-meta">
    {`${winner ? 'Winner' : 'Current Player'} is ${winner || player}`}
  </h2>
);

Meta.propTypes = {
  player: P.string,
  winner: P.string,
};

export default Meta;
