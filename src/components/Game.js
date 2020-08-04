import React, { useState } from 'react';
import Board from './Board';
import { winCheck } from '../helpers/helper';
import GameHistory from './GameHistory';

const Game = () => {
  const initialHistory = {
    player: 'x',
    board: Array(9).fill(null),
    move: null,
  };

  const [currentPlayer, setCurrentPlayer] = useState('x');
  const [board, setBoard] = useState(Array(9).fill(null));
  const [gameHistory, setgameHistory] = useState([initialHistory]);

  const winner = winCheck(gameHistory[gameHistory.length - 1]);
  const winning = winner ? winner.squares : null;
  console.log(winning);

  const addPlayerMove = (fieldNo) => {
    if (board[fieldNo] !== null || winner) return;

    let tempBoard = [...board];
    tempBoard[fieldNo] = currentPlayer;
    setBoard(tempBoard);

    setgameHistory([
      ...gameHistory,
      { player: currentPlayer, board: tempBoard, move: fieldNo, winning: winning },
    ]);

    setCurrentPlayer(currentPlayer === 'x' ? 'o' : 'x');
  };

  const onResetHandler = () => {
    setBoard(Array(9).fill(null));
    setgameHistory([initialHistory]);
    setCurrentPlayer('x');
  };

  const onMouseEnterHandler = (game) => {
    setBoard(game.board);
  };
  const onMouseLeaveHandler = () => {
    setBoard(gameHistory[gameHistory.length - 1].board);
  };

  return (
    <div className="game">
      <div className='info-text'>
        {!winner ? (
          <h4>
            Ruch wykonuje gracz: <span>{currentPlayer}</span>
          </h4>
        ) : winner == 'remis' ? (
          <>REMIS</>
        ) : (
          <h4>
            Wygral gracz: <span>{winner.winner}</span>
          </h4>
        )}
      </div>

      <div className='game-wrapper'>
        <Board
          board={board}
          winning={winning}
          currentPlayer={currentPlayer}
          addMove={(fieldNo) => addPlayerMove(fieldNo)}
        />

        <div className='history'>
          <GameHistory
            gameHistory={gameHistory}
            winner={winner}
            enter={(x) => onMouseEnterHandler(x)}
            leave={onMouseLeaveHandler}
            reset={onResetHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Game;
