import React from 'react';

const Square = ({ click, squareClass }) => {
  return (
    <div 
      className={`square ${squareClass}`} 
      onClick={click}>
    </div>);
};

export default Square;
