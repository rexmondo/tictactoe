import { fromJS } from 'immutable';
import { makeReducer, makeCreators } from '../helpers';
import { Players } from '../constants';

const initialState = fromJS([
  [Players.UNSET, Players.UNSET, Players.UNSET],
  [Players.UNSET, Players.UNSET, Players.UNSET],
  [Players.UNSET, Players.UNSET, Players.UNSET]
]); 

export const actions = {
  SET_SQUARE: 'SET_SQUARE',
  CLEAR_BOARD: 'CLEAR_BOARD',
};

export const creators = makeCreators(actions);

const reducerStrategy = {
  [actions.SET_SQUARE]: (state, { payload: { x, y, player } }) => state.updateIn(
    [x, y],
    value => value || player
  ),
  [actions.CLEAR_BOARD]: () => initialState,
};

export const reducer = makeReducer(initialState, reducerStrategy);
