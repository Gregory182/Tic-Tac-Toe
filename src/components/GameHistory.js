import React from 'react';
import { ReactComponent as ArrowIcon } from '../helpers/arrow.svg'

const GameHistory = ({ gameHistory, enter, leave, reset }) => {
  return (
    <ul>
      {gameHistory.map((game, index) => {
        return index == 0 ? (
          <li
            key={index}
            className='reset-btn'
            onClick={reset}

          >
            Rozpocznij od nowa
          </li>
        ) : (
          <li
            key={index}
            onMouseEnter={() => enter(game)}
            onMouseLeave={() => leave()}
          >
            {' '}
            Ruch #{index}
            <ArrowIcon className='go-back-icon'/>
          </li>
        );
      })}
    </ul>
  );
};

export default GameHistory;
