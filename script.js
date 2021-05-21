'use strict';

const playerFactory = (playerNumber, playerSymbol) => {
  return { playerNumber, playerSymbol };
};

const gameBoard = (() => {
  let arrayBoard = ['', '', '', '', '', '', '', '', ''];
  let sqs = [];

  //Array of sqs elements of the HTML
  for (let i = 0; i < 9; i++) {
    sqs[i] = document.querySelector(`.sq-${i}`);
  }

  //Copy elements of arraBoard and render it in the dom
  const renderArray = function () {
    for (let i = 0; i < 9; i++) {
      this.sqs[i].textContent = this.arrayBoard[i];
    }
  };
  return { arrayBoard, sqs, renderArray };
})();

const player0 = playerFactory(0, 'x');
const player1 = playerFactory(1, 'o');

//array of the squares in HTML
const squares = document.querySelectorAll('.squares');

//Event listener for every square
squares.forEach((square) => {
  square.addEventListener('click', function (e) {
    const target = e.target;
    const targetIdNumber = target.id.match(/\d+/);

    // overwrite the board array

    if (target.textContent == false && gameStateObject.gameState >= 0) {
      if (gameStateObject.gameState % 2 === 0) {
        gameBoard.arrayBoard[targetIdNumber] = 'x';
        gameBoard.renderArray();
        gameStateObject.checkWinner();
        if (gameStateObject.gameState === 8) checkDraw();

        if (gameStateObject.gameState !== -1) {
          gameStateObject.gameState++;
          gameStateObject.playerMessage.textContent = 'Player O turn';
        }
      } else {
        // target.textContent = "o";
        gameBoard.arrayBoard[targetIdNumber] = 'o';
        gameBoard.renderArray();
        gameStateObject.checkWinner();
        if (gameStateObject.gameState === 8) checkDraw();
        if (gameStateObject.gameState !== -1) {
          gameStateObject.gameState++;
          gameStateObject.playerMessage.textContent = 'Player X turn';
        }
      }
    }
  });
});

const gameStateObject = {
  gameState: 0,
  playerMessage: document.querySelector('.player-message'),
  displayWinner: function () {
    if (gameStateObject.gameState % 2 === 0) {
      this.gameState = -1;
      this.playerMessage.textContent = `Player X wins`;
    } else {
      gameStateObject.gameState = -1;
      this.playerMessage.textContent = `Player O wins`;
    }
  },

  checkWinner: function () {
    let winnerSymbol;
    if (this.gameState % 2 === 0) {
      winnerSymbol = player0.playerSymbol;
    } else {
      winnerSymbol = player1.playerSymbol;
    }
    //Check possibilites for winning
    if (
      gameBoard.arrayBoard[0] === winnerSymbol &&
      gameBoard.arrayBoard[1] === winnerSymbol &&
      gameBoard.arrayBoard[2] === winnerSymbol
    ) {
      this.displayWinner();
      squares[0].style.backgroundColor = '#fc5185';
      squares[1].style.backgroundColor = '#fc5185';
      squares[2].style.backgroundColor = '#fc5185';
    } else if (
      gameBoard.arrayBoard[0] === winnerSymbol &&
      gameBoard.arrayBoard[3] === winnerSymbol &&
      gameBoard.arrayBoard[6] === winnerSymbol
    ) {
      this.displayWinner();
      squares[0].style.backgroundColor = '#fc5185';
      squares[3].style.backgroundColor = '#fc5185';
      squares[6].style.backgroundColor = '#fc5185';
    } else if (
      gameBoard.arrayBoard[1] === winnerSymbol &&
      gameBoard.arrayBoard[4] === winnerSymbol &&
      gameBoard.arrayBoard[7] === winnerSymbol
    ) {
      this.displayWinner();
      squares[1].style.backgroundColor = '#fc5185';
      squares[4].style.backgroundColor = '#fc5185';
      squares[7].style.backgroundColor = '#fc5185';
    } else if (
      gameBoard.arrayBoard[2] === winnerSymbol &&
      gameBoard.arrayBoard[5] === winnerSymbol &&
      gameBoard.arrayBoard[8] === winnerSymbol
    ) {
      this.displayWinner();
      squares[2].style.backgroundColor = '#fc5185';
      squares[5].style.backgroundColor = '#fc5185';
      squares[8].style.backgroundColor = '#fc5185';
    } else if (
      gameBoard.arrayBoard[3] === winnerSymbol &&
      gameBoard.arrayBoard[4] === winnerSymbol &&
      gameBoard.arrayBoard[5] === winnerSymbol
    ) {
      this.displayWinner();
      squares[3].style.backgroundColor = '#fc5185';
      squares[4].style.backgroundColor = '#fc5185';
      squares[5].style.backgroundColor = '#fc5185';
    } else if (
      gameBoard.arrayBoard[6] === winnerSymbol &&
      gameBoard.arrayBoard[7] === winnerSymbol &&
      gameBoard.arrayBoard[8] === winnerSymbol
    ) {
      this.displayWinner();
      squares[6].style.backgroundColor = '#fc5185';
      squares[7].style.backgroundColor = '#fc5185';
      squares[8].style.backgroundColor = '#fc5185';
    } else if (
      gameBoard.arrayBoard[0] === winnerSymbol &&
      gameBoard.arrayBoard[4] === winnerSymbol &&
      gameBoard.arrayBoard[8] === winnerSymbol
    ) {
      this.displayWinner();
      squares[0].style.backgroundColor = '#fc5185';
      squares[4].style.backgroundColor = '#fc5185';
      squares[8].style.backgroundColor = '#fc5185';
    } else if (
      gameBoard.arrayBoard[2] === winnerSymbol &&
      gameBoard.arrayBoard[4] === winnerSymbol &&
      gameBoard.arrayBoard[6] === winnerSymbol
    ) {
      this.displayWinner();
      squares[2].style.backgroundColor = '#fc5185';
      squares[4].style.backgroundColor = '#fc5185';
      squares[6].style.backgroundColor = '#fc5185';
    }
  },
};

const checkDraw = () => {
  let emptySquare = false;
  gameBoard.arrayBoard.forEach((square) => {
    if (square == true) {
      emptySquare = true;
      return emptySquare;
    }
  });
  if (emptySquare == false) {
    gameStateObject.playerMessage.textContent = 'Draw';
    gameStateObject.gameState = -1;
  }
};

//RESTART

document.querySelector('.restart-btn').addEventListener('click', () => {
  gameBoard.arrayBoard = ['', '', '', '', '', '', '', '', ''];
  const squaresArray = [...squares];
  squaresArray.forEach((square) => {
    square.style.backgroundColor = '#fff';
  });
  gameBoard.renderArray();
  gameStateObject.gameState = 0;
  gameStateObject.playerMessage.textContent = 'Player X turn';
});
