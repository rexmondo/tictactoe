import { fromJS } from 'immutable';
import { makeReducer, makeCreators } from '../helpers';

import { Players } from '../constants';

const initialState = fromJS({
  player: Players.X,
  winner: Players.UNSET,
});

export const actions = {
  TOGGLE_PLAYER: 'TOGGLE_PLAYER', 
  RESET_GAME: 'RESET_GAME',
  SET_WINNER: 'SET_WINNER',
}

export const creators = makeCreators(actions);

const reducerStrategy = {
  [actions.TOGGLE_PLAYER]: state => state.update('player', current => (
    (current === Players.X) ? Players.O: Players.X
  )),
  [actions.RESET_GAME]: state => initialState,
  [actions.SET_WINNER]: (state, { payload: { winner } }) => state.set('winner', winner),
};

export const reducer = makeReducer(initialState, reducerStrategy);
