import React, { PropTypes as P } from 'react';

const Cell = ({ updateCell, value }) => (
  <div 
    className="cell"
    onClick={updateCell}
  >
    {value}
  </div>
);

Cell.propTypes = {
  updateCell: P.func.isRequired,
  value: P.string
};

export default Cell;
