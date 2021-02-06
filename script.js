const myModule =((function() {
  'use strict';
  const selectMain = document.querySelector('main');

  let _gameBoard = ["", "", "", "", "", "", "", "", ""];
  let _displayController = [];
  
  function createBoard() {
    for (let i = 1; i < 10; i++) {
      const createBoard = document.createElement('div');
      createBoard.setAttribute('id', `box${i}`);
      selectMain.appendChild(createBoard);
    };
    const Box1 = document.getElementById('box1');
    const Box2 = document.getElementById('box2');
    const Box3 = document.getElementById('box3');
    const Box4 = document.getElementById('box4');
    const Box5 = document.getElementById('box5');
    const Box6 = document.getElementById('box6');
    const Box7 = document.getElementById('box7');
    const Box8 = document.getElementById('box8');
    const Box9 = document.getElementById('box9');
    Box1.setAttribute('class', 'top left');
    Box2.setAttribute('class', 'top');
    Box3.setAttribute('class', 'top right');
    Box4.setAttribute('class', 'left');
    Box5.setAttribute('class', 'center');
    Box6.setAttribute('class', 'right');
    Box7.setAttribute('class', 'bot left');
    Box8.setAttribute('class', 'bot');
    Box9.setAttribute('class', 'bot right');
    _displayController = [Box1, Box2, Box3, Box4, Box5, Box6, Box7, Box8, Box9];
  };
  const choice = (player, boxNum) => {
    const X = document.createElement('img');
    X.setAttribute('src', "graphics/GoldTypographyX.svg");
    const O = document.createElement('img');
    O.setAttribute('src', "graphics/GoldTypography0.svg");

    if(player == 'playerOne') {
      switch (boxNum) {
        case 'Box1':
          _displayController[0].appendChild(X);
          _gameBoard[0] = 'X';
          break;
        case 'Box2':
          _displayController[1].appendChild(X);
          _gameBoard[1] = 'X';
          break;
        case 'Box3':
          _displayController[2].appendChild(X);
          _gameBoard[2] = 'X';
          break;
        case 'Box4':
          _displayController[3].appendChild(X);
          _gameBoard[3] = 'X';
          break;
        case 'Box5':
          _displayController[4].appendChild(X);
          _gameBoard[4] = 'X';
          break;
        case 'Box6':
          _displayController[5].appendChild(X);
          _gameBoard[5] = 'X';
          break;
        case 'Box7':
          _displayController[6].appendChild(X);
          _gameBoard[6] = 'X';
          break;
        case 'Box8':
          _displayController[7].appendChild(X);
          _gameBoard[7] = 'X';
          break;
        case 'Box9':
          _displayController[8].appendChild(X);
          _gameBoard[8] = 'X';
          break;
        default:
          }
    }else if(player == 'playerTwo') {
      switch (boxNum) {
        case 'Box1':
          _displayController[0].appendChild(O);
          _gameBoard[0] = 'O';
          break;
        case 'Box2':
          _displayController[1].appendChild(O);
          _gameBoard[1] = 'O';
          break;
        case 'Box3':
          _displayController[2].appendChild(O);
          _gameBoard[2] = 'O';
          break;
        case 'Box4':
          _displayController[3].appendChild(O);
          _gameBoard[3] = 'O';
          break;
        case 'Box5':
          _displayController[4].appendChild(O);
          _gameBoard[4] = 'O';
          break;
        case 'Box6':
          _displayController[5].appendChild(O);
          _gameBoard[5] = 'O';
          break;
        case 'Box7':
          _displayController[6].appendChild(O);
          _gameBoard[6] = 'O';
          break;
        case 'Box8':
          _displayController[7].appendChild(O);
          _gameBoard[7] = 'O';
          break;
        case 'Box9':
          _displayController[8].appendChild(O);
          _gameBoard[8] = 'O';
          break;
        default:
      };
    };
  };
  
  return {
    createBoard: createBoard,
    choice: choice,
    _gameBoard: _gameBoard,
  }
}))();
const playerFactory = (playerOne, playerTwo) => {
    const sayHello = () => console.log('hello');
    return { playerOne, playerTwo, sayHello };
};
