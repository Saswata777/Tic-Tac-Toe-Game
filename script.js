// Constants
const PLAYER_X = 'X';
const PLAYER_O = 'O';
const EMPTY_CELL = '';

// Game state
let currentPlayer = PLAYER_X;
let gameBoard = [
  [EMPTY_CELL, EMPTY_CELL, EMPTY_CELL],
  [EMPTY_CELL, EMPTY_CELL, EMPTY_CELL],
  [EMPTY_CELL, EMPTY_CELL, EMPTY_CELL]
];

// Function to handle player move
function makeMove(row, col) {
  // Check if the cell is empty
  if (gameBoard[row][col] === EMPTY_CELL) {
    // Set the current player's symbol in the selected cell
    gameBoard[row][col] = currentPlayer;

    // Check for a winning condition
    if (checkWinCondition(currentPlayer)) {
      alert('Player ' + currentPlayer + ' wins!');
      resetGame();
      return;
    }

    // Check for a draw condition
    if (checkDrawCondition()) {
      alert('It\'s a draw!');
      resetGame();
      return;
    }

    // Switch to the next player
    currentPlayer = (currentPlayer === PLAYER_X) ? PLAYER_O : PLAYER_X;

    // Display the updated game board
    displayBoard();
  } else {
    alert('Invalid move. Please try again.');
  }
}

// Function to check for a winning condition
function checkWinCondition(player) {
  // Check rows
  for (let row = 0; row < 3; row++) {
    if (
      gameBoard[row][0] === player &&
      gameBoard[row][1] === player &&
      gameBoard[row][2] === player
    ) {
      return true;
    }
  }

  // Check columns
  for (let col = 0; col < 3; col++) {
    if (
      gameBoard[0][col] === player &&
      gameBoard[1][col] === player &&
      gameBoard[2][col] === player
    ) {
      return true;
    }
  }

  // Check diagonals
  if (
    (gameBoard[0][0] === player && gameBoard[1][1] === player && gameBoard[2][2] === player) ||
    (gameBoard[0][2] === player && gameBoard[1][1] === player && gameBoard[2][0] === player)
  ) {
    return true;
  }

  return false;
}

// Function to check for a draw condition
function checkDrawCondition() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (gameBoard[row][col] === EMPTY_CELL) {
        return false;
      }
    }
  }
  return true;
}

// Function to reset the game
function resetGame() {
  currentPlayer = PLAYER_X;
  gameBoard = [
    [EMPTY_CELL, EMPTY_CELL, EMPTY_CELL],
    [EMPTY_CELL, EMPTY_CELL, EMPTY_CELL],
    [EMPTY_CELL, EMPTY_CELL, EMPTY_CELL]
  ];
  displayBoard();
}

// Function to display the game board
function displayBoard() {
  const cells = document.querySelectorAll('.cell');
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const cellIndex = row * 3 + col;
      cells[cellIndex].textContent = gameBoard[row][col];
    }
  }
}

// Initialize the game board
displayBoard();
