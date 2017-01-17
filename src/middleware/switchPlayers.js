import { actions as BoardActions } from '../actions/board';
import { creators as GameActionCreators } from '../actions/game';
import { isValidMove } from '../helpers';

export default store => next => action => {
  // capture the current board value
  const { board } = store.getState();

  // let the reducer decide how to handle action
  next(action);

  if (action.type === BoardActions.SET_SQUARE) {
    const { x, y } = action.payload;
    if (isValidMove(board.getIn([x, y]))) {
      // switch player if move is valid
      store.dispatch(GameActionCreators.TOGGLE_PLAYER());
    }
  }
}
