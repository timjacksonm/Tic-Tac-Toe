const myModule =((function() {
  'use strict';
  const selectMain = document.querySelector('main');

  let _gameBoard = ['X', '', '', '', 'X', 'O', 'O', 'O', 'X'];
  //_gameBoard[#].appendChild(X or O) adds image to grid cell
  let _displayController = [];

  const choice = (player, boxNum) => {
    const X = document.createElement('img');
    X.setAttribute('src', "graphics/GoldTypographyX.svg");
    const O = document.createElement('img');
    O.setAttribute('src', "graphics/GoldTypography0.svg");

    const boxNumber = boxNum;

    if(player == 'playerOne') {
    switch (boxNumber) {
      case 'Box1':
        _displayController[0].appendChild(X);
        break;
      case 'Box2':
        _displayController[1].appendChild(X);
        break;
      case 'Box3':
        _displayController[2].appendChild(X);
        break;
      case 'Box4':
        _displayController[3].appendChild(X);
        break;
      case 'Box5':
        _displayController[4].appendChild(X);
        break;
      case 'Box6':
        _displayController[5].appendChild(X);
        break;
      case 'Box7':
        _displayController[6].appendChild(X);
        break;
      case 'Box8':
        _displayController[7].appendChild(X);
        break;
      case 'Box9':
        _displayController[8].appendChild(X);
        break;
      default:
        }
    }else if(player == 'playerTwo') {
      switch (boxNumber) {
        case 'Box1':
          _displayController[0].appendChild(O);
          break;
        case 'Box2':
          _displayController[1].appendChild(O);
          break;
        case 'Box3':
          _displayController[2].appendChild(O);
          break;
        case 'Box4':
          _displayController[3].appendChild(O);
          break;
        case 'Box5':
          _displayController[4].appendChild(O);
          break;
        case 'Box6':
          _displayController[5].appendChild(O);
          break;
        case 'Box7':
          _displayController[6].appendChild(O);
          break;
        case 'Box8':
          _displayController[7].appendChild(O);
          break;
        case 'Box9':
          _displayController[8].appendChild(O);
          break;
        default:
          }
        }
      }
  function _privateMethod2() {
    console.log(_displayController);
}
  function publicMethod1() {
      _privateMethod();
  }
  function publicMethod2() {
    _privateMethod2();
}
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
  }
  return {
    publicMethod1: publicMethod1,
    publicMethod2: publicMethod2,
    createBoard: createBoard,
    choice: choice,
  }
}))();
const playerFactory = (playerOne, playerTwo) => {
    const sayHello = () => console.log('hello');
    return { playerOne, playerTwo, sayHello };
};
