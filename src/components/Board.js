import React from 'react';
import Square from './Square';

const Board = ({ board, addMove, winning }) => {
  const fields = board.map((field, index) => {
    let endGameClass = '';
    if (winning) {
      if (!winning.some((x) => x == index)) {
        endGameClass = 'loser-square';
      } else {
        endGameClass = 'winning-square';
      }
    }
    return (
      <Square
        squareClass={`${field}-mark ${endGameClass}`}
        key={index}
        click={() => addMove(index)}
      ></Square>
    );
  });

  return <div className='board'>{fields}</div>;
};

export default Board;
