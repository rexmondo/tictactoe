import { fromJS } from 'immutable';
import { makeReducer, makeCreators } from '../helpers';

const initialState = fromJS([
  [null, null, null],
  [null, null, null],
  [null, null, null]
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
