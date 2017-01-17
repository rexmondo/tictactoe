import React, { PropTypes as P } from 'react';
import { connect } from 'react-redux';

import { creators as GameActionCreators } from './actions/game';
import { creators as BoardActionCreators } from './actions/board';

import Board from './components/Board';
import WinnerOverlay from './components/WinnerOverlay';
import Meta from './components/Meta';
import './App.css';

const App = ({ player, winner, restart }) => (
  <div className="game">
    <div className="header">
      <h1>Tic Tac Toe</h1>
      <Meta player={player} winner={winner}/>
    </div>
    <div className="board-wrapper"> 
      { winner &&  <WinnerOverlay winner={winner} restart={restart} /> }
      <Board player={player} />
    </div>
  </div>
)

App.propTypes =  {
  player: P.string,
  winner: P.string,
  restart: P.func.isRequired,
};

export default connect(
  ({ game }) => ({ 
    player: game.get('player'),
    winner: game.get('winner')
  }),
  dispatch => ({
    restart: () => {
      dispatch(BoardActionCreators.CLEAR_BOARD());
      dispatch(GameActionCreators.RESET_GAME());
    }
  })
)(App);
