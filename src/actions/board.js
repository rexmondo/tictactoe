import { fromJS } from 'immutable';

const id = x => x;

const makeReducer = (initialState, strategy) => (state = initialState, action) => (
  (strategy[action.type] || id)(state, action)
);

const makeCreators = actions => Object.keys(actions)
  .reduce((acc, type) => Object.assign(acc, {
    [type]: payload => ({ type, payload })
  }), {});

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
