const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const winCheck = ({ player, board }) => {
  let winner = null;
  for (let arr of winningCombinations) {
    if (arr.every((index) => board[index] === player)) {
      winner= { winner: player, squares: arr };
      return winner;
    }
  }

  console.log(winner)

  if (winner) return player;
  if (board.every((square) => square !== null)) return 'remis';
};

export const winCheck2 = ({ player, board }) => {
  const winner = winningCombinations.some((arr) => {
    return arr.every((index) => board[index] === player);
  });

  if (winner) return player;
  if (board.every((square) => square !== null)) return 'remis';
};
