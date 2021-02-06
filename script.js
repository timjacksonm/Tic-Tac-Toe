const myModule =((function() {
  'use strict';
  const selectMain = document.querySelector('main');

  let _gameBoard = ["", "", "", "", "", "", "", "", ""];
  let _displayController = [];
  let boxNum = '';
  
  function createBoard() {
    
    for (let i = 1; i < 10; i++) {
      const createBoard = document.createElement('div');
      createBoard.setAttribute('id', `Box${i}`);
      selectMain.appendChild(createBoard);
    };
    const Box1 = document.getElementById('Box1');
    const Box2 = document.getElementById('Box2');
    const Box3 = document.getElementById('Box3');
    const Box4 = document.getElementById('Box4');
    const Box5 = document.getElementById('Box5');
    const Box6 = document.getElementById('Box6');
    const Box7 = document.getElementById('Box7');
    const Box8 = document.getElementById('Box8');
    const Box9 = document.getElementById('Box9');
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
    
    function addEventListeners() {
      Box1.addEventListener('click', (e) => {boxNum = e.target.attributes[0].value; choice();});
      Box2.addEventListener('click', (e) => {boxNum = e.target.attributes[0].value; choice();});
      Box3.addEventListener('click', (e) => {boxNum = e.target.attributes[0].value; choice();}); 
      Box4.addEventListener('click', (e) => {boxNum = e.target.attributes[0].value; choice();}); 
      Box5.addEventListener('click', (e) => {boxNum = e.target.attributes[0].value; choice();}); 
      Box6.addEventListener('click', (e) => {boxNum = e.target.attributes[0].value; choice();}); 
      Box7.addEventListener('click', (e) => {boxNum = e.target.attributes[0].value; choice();}); 
      Box8.addEventListener('click', (e) => {boxNum = e.target.attributes[0].value; choice();}); 
      Box9.addEventListener('click', (e) => {boxNum = e.target.attributes[0].value; choice();});  
    }

    addEventListeners();
  };
  const choice = () => {
    let symbol = '';
    function checkTurn() {
      let symbolX = myModule._gameBoard.filter( string => string.includes("X"))
      let symbolO = myModule._gameBoard.filter(string => string.includes("O"));
      let symbolCountX= symbolX.length;
      let symbolCountO = symbolO.length;

      if(_gameBoard.includes("X" || "O")) {
        if (symbolCountX > symbolCountO) {
          return symbol = "O"
        }else {
          return symbol = "X"
        }

      }else {
        return symbol = "X";
      }
    };

    checkTurn();
    const X = document.createElement('img');
    X.setAttribute('src', "graphics/GoldTypographyX.svg");
    const O = document.createElement('img');
    O.setAttribute('src', "graphics/GoldTypography0.svg");

    if(symbol == 'X') {
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
    }else if(symbol == 'O') {
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
const playerFactory = (name, symbol) => {
    getName = name;
    getSymbol = symbol;
    return {name, symbol};
};
Object.assign(playerFactory, myModule);
const playerOne = playerFactory("tim", 'X');