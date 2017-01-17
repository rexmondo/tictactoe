import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import { reducer as board } from './actions/board';
import { reducer as game } from './actions/game';
import checkWinner from './middleware/checkWinner';
import switchPlayers from './middleware/switchPlayers';

import './index.css';

const store = createStore(
  combineReducers({
    board,
    game
  }),
  applyMiddleware(
    checkWinner,
    switchPlayers
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
