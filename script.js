'use strict';
//TODO

//boton de restart

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
gameBoard.renderArray();

const gameStateObject = {
  gameState: 0,
  displayWinner: function () {
    let winningMessage = document.querySelector('.win-message').textContent;

    if (gameStateObject.gameState === 0) {
      this.gameState = -1;
      winningMessage = `${winningMessage} X wins`;
      document.querySelector('.win-message').textContent = winningMessage;
      document.getElementById('winning').classList.toggle('hide');
    } else {
      gameStateObject.gameState = -1;
      winningMessage = `${winningMessage} O wins`;
      document.querySelector('.win-message').textContent = winningMessage;
      document.getElementById('winning').classList.toggle('hide');
    }
  },

  checkWinner: function () {
    let winnerSymbol;
    if (this.gameState === 0) {
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
    } else if (
      gameBoard.arrayBoard[0] === winnerSymbol &&
      gameBoard.arrayBoard[3] === winnerSymbol &&
      gameBoard.arrayBoard[6] === winnerSymbol
    ) {
      this.displayWinner();
    } else if (
      gameBoard.arrayBoard[1] === winnerSymbol &&
      gameBoard.arrayBoard[4] === winnerSymbol &&
      gameBoard.arrayBoard[7] === winnerSymbol
    ) {
      this.displayWinner();
    } else if (
      gameBoard.arrayBoard[2] === winnerSymbol &&
      gameBoard.arrayBoard[5] === winnerSymbol &&
      gameBoard.arrayBoard[8] === winnerSymbol
    ) {
      this.displayWinner();
    } else if (
      gameBoard.arrayBoard[3] === winnerSymbol &&
      gameBoard.arrayBoard[4] === winnerSymbol &&
      gameBoard.arrayBoard[5] === winnerSymbol
    ) {
      this.displayWinner();
    } else if (
      gameBoard.arrayBoard[6] === winnerSymbol &&
      gameBoard.arrayBoard[7] === winnerSymbol &&
      gameBoard.arrayBoard[8] === winnerSymbol
    ) {
      this.displayWinner();
    } else if (
      gameBoard.arrayBoard[0] === winnerSymbol &&
      gameBoard.arrayBoard[4] === winnerSymbol &&
      gameBoard.arrayBoard[8] === winnerSymbol
    ) {
      this.displayWinner();
    } else if (
      gameBoard.arrayBoard[2] === winnerSymbol &&
      gameBoard.arrayBoard[4] === winnerSymbol &&
      gameBoard.arrayBoard[6] === winnerSymbol
    ) {
      this.displayWinner();
    }
  },
};

//array of the squares in HTML
const squares = document.querySelectorAll('.squares');

//Event listener for every square
squares.forEach((square) => {
  square.addEventListener('click', function (e) {
    const target = e.target;
    const targetId = e.target.id;
    console.log(e.target.id);

    // overwrite the board array

    if (target.textContent == false && gameStateObject.gameState >= 0) {
      if (gameStateObject.gameState === 0) {
        gameBoard.arrayBoard[targetId] = 'x';
        gameBoard.renderArray();
        gameStateObject.checkWinner();
        if (gameStateObject.gameState !== -1) gameStateObject.gameState++;
      } else {
        // target.textContent = "o";
        gameBoard.arrayBoard[targetId] = 'o';
        gameBoard.renderArray();
        gameStateObject.checkWinner();
        if (gameStateObject.gameState !== -1) gameStateObject.gameState--;
      }
    }
  });
});

document.querySelector('.restart-btn').addEventListener('click', () => {});
