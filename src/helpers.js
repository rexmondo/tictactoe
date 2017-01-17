import { Players } from './constants';

// identity function
const id = x => x;

/*
 * takes initial state and an object with 
 * action_name => reducer function and makes
 * a redux reducer for the state slice
 */
export const makeReducer = (initialState, strategy) => (state = initialState, action) => (
  (strategy[action.type] || id)(state, action)
);

/*
 * takes an object with action type constants and makes an 
 * object of action creators that pass the payload on unaltered
 */
export const makeCreators = actions => Object.keys(actions)
  .reduce((acc, type) => Object.assign(acc, {
    [type]: payload => ({ type, payload })
  }), {});

/*
 * Determines whether a square is not yet taken
 */
export const isValidMove = cellValue  => (cellValue === Players.UNSET);
