import { fromJS } from 'immutable';

import { actions as BoardActions } from '../actions/board';
import { creators as GameActionCreators } from '../actions/game';

const linesToCheck = fromJS({
  TOP_ROW:        [[0,0], [0,1], [0,2]],
  MIDDLE_ROW:     [[1,0], [1,1], [1,2]],
  BOTTOM_ROW:     [[2,0], [2,1], [2,2]],
  LEFT_COLUMN:    [[0,0], [1,0], [2,0]],
  CENTER_COLUMN:  [[0,1], [1,1], [2,1]],
  RIGHT_COLUMN:   [[0,2], [1,2], [2,2]],
  LEFT_DIAGONAL:  [[0,0], [1,1], [2,2]],
  RIGHT_DIAGONAL: [[0,2], [1,1], [2,0]],
});

export default store => next => action => {
  // propagate action first
  next(action);

  if (action.type === BoardActions.SET_SQUARE) {
    // capture board state after update
    const { board } = store.getState();
    // get the current player from the payload
    const { player } = action.payload;
    // determine if this player won
    const playerWins = linesToCheck
      .some(line => line.every(cell => (board.getIn(cell) === player)));
    if (playerWins) {
      store.dispatch(GameActionCreators.SET_WINNER({ winner: player }));
    }
  }
}
