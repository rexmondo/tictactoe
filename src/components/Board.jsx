import React, { Component } from 'react';
import { connect } from 'react-redux';

import { 
  creators as BoardActionCreators,
  actions as BoardActions,
} from '../actions/board';

class Cell extends Component {
  render() {
    const { updateCell, value }  = this.props;
    return (
      <div 
        className="cell"
        onClick={updateCell}
      >
        {value}
      </div>
    );
  }
}

const player = 'x';

class Board extends Component {
  render() {
    const { board, updateBoard } = this.props;
    return (
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
  }
}

export default connect(
  ({ board }) => ({ board }),
  dispatch => ({
    updateBoard: (values) => () => {
      return dispatch(BoardActionCreators[BoardActions.SET_SQUARE](values))
    }
  })
)(Board);
