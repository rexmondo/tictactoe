import React, { PropTypes as P } from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';

import Cell from './Cell';
import { 
  creators as BoardActionCreators,
  actions as BoardActions,
} from '../actions/board';

const Board = ({ board, updateBoard, player }) => (
  <div className="board">
    {
      board.flatMap((row, x) => row.map((currentValue, y) => (
        <Cell 
          key={`cell: [${x},${y}]`}
          updateCell={updateBoard({ x, y, player })} 
          value={currentValue} 
        />
      )))
    }
  </div>
);

Board.propTypes = {
  board: P.instanceOf(List).isRequired,
  updateBoard: P.func.isRequired,
  player: P.string,
}

export default connect(
  ({ board }) => ({ board }),
  dispatch => ({
    updateBoard: (values) => () => (
      dispatch(BoardActionCreators[BoardActions.SET_SQUARE](values))
    )
  })
)(Board);
