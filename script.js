const playerFactory = (name, symbol, turn) => {
  getName = name;
  getSymbol = symbol;
  getTurn = turn;
  return {name, symbol, turn};
};
const Gameboard =((function() {
  'use strict';
  const selectMain = document.querySelector('main');

  let _gameBoard = ["", "", "", "", "", "", "", "", ""];
  let _displayController = [];
  let _boxNum = '';
  const _playerOne = playerFactory("Tim", 'X', 'First');
  const _playerTwo = playerFactory("Jake", 'O', 'Second');
  
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
      let Box1ClickEvent = (e) => {
        _boxNum = e.target.attributes[0].value;
        _choice();
        Box1.removeEventListener('click', Box1ClickEvent);
      };
      let Box2ClickEvent = (e) => {
        _boxNum = e.target.attributes[0].value;
        _choice();
        Box2.removeEventListener('click', Box2ClickEvent);
      };
      let Box3ClickEvent = (e) => {
        _boxNum = e.target.attributes[0].value;
        _choice();
        Box3.removeEventListener('click', Box3ClickEvent);
      };
      let Box4ClickEvent = (e) => {
        _boxNum = e.target.attributes[0].value;
        _choice();
        Box4.removeEventListener('click', Box4ClickEvent);
      };
      let Box5ClickEvent = (e) => {
        _boxNum = e.target.attributes[0].value;
        _choice();
        Box5.removeEventListener('click', Box5ClickEvent);
      };
      let Box6ClickEvent = (e) => {
        _boxNum = e.target.attributes[0].value;
        _choice();
        Box6.removeEventListener('click', Box6ClickEvent);
      };
      let Box7ClickEvent = (e) => {
        _boxNum = e.target.attributes[0].value;
        _choice();
        Box7.removeEventListener('click', Box7ClickEvent);
      };
      let Box8ClickEvent = (e) => {
        _boxNum = e.target.attributes[0].value;
        _choice();
        Box8.removeEventListener('click', Box8ClickEvent);
      };
      let Box9ClickEvent = (e) => {
        _boxNum = e.target.attributes[0].value;
        _choice();
        Box9.removeEventListener('click', Box9ClickEvent);
      };

      Box1.addEventListener('click', Box1ClickEvent);
      Box2.addEventListener('click', Box2ClickEvent);
      Box3.addEventListener('click', Box3ClickEvent);
      Box4.addEventListener('click', Box4ClickEvent);
      Box5.addEventListener('click', Box5ClickEvent);
      Box6.addEventListener('click', Box6ClickEvent);
      Box7.addEventListener('click', Box7ClickEvent);
      Box8.addEventListener('click', Box8ClickEvent);
      Box9.addEventListener('click', Box9ClickEvent);
    };

    addEventListeners();
  };
  const _choice = () => {

    let symbol = '';
  
    function checkTurn(_playerOneTurn, _playerTwoTurn) {
      let symbolX = _gameBoard.filter( string => string.includes("X"))
      let symbolO = _gameBoard.filter(string => string.includes("O"));
      let symbolCountX= symbolX.length;
      let symbolCountO = symbolO.length;

      if(_gameBoard.includes("X" || "O")) {
        if (symbolCountX > symbolCountO) {
          return symbol = "O"
        }else {
          return symbol = "X"
        }

      }else if(_playerOneTurn == 'First' && _playerTwoTurn == 'Second') {
        return symbol = "X";
      }else {
        return symbol = "O";
      }
    };

    checkTurn(_playerOne.turn, _playerTwo.turn);
    const X = document.createElement('img');
    X.setAttribute('src', "graphics/GoldTypographyX.svg");
    const O = document.createElement('img');
    O.setAttribute('src', "graphics/GoldTypography0.svg");

    if(symbol == 'X') {
      switch (_boxNum) {
        case 'Box1':
          _displayController[0].appendChild(X);
          _gameBoard[0] = 'X';
          Gameboard.checkGameOver();
          break;
        case 'Box2':
          _displayController[1].appendChild(X);
          _gameBoard[1] = 'X';
          Gameboard.checkGameOver();
          break;
        case 'Box3':
          _displayController[2].appendChild(X);
          _gameBoard[2] = 'X';
          Gameboard.checkGameOver();
          break;
        case 'Box4':
          _displayController[3].appendChild(X);
          _gameBoard[3] = 'X';
          Gameboard.checkGameOver();
          break;
        case 'Box5':
          _displayController[4].appendChild(X);
          _gameBoard[4] = 'X';
          Gameboard.checkGameOver();
          break;
        case 'Box6':
          _displayController[5].appendChild(X);
          _gameBoard[5] = 'X';
          Gameboard.checkGameOver();
          break;
        case 'Box7':
          _displayController[6].appendChild(X);
          _gameBoard[6] = 'X';
          Gameboard.checkGameOver();
          break;
        case 'Box8':
          _displayController[7].appendChild(X);
          _gameBoard[7] = 'X';
          Gameboard.checkGameOver();
          break;
        case 'Box9':
          _displayController[8].appendChild(X);
          _gameBoard[8] = 'X';
          Gameboard.checkGameOver();
          break;
        default:
          }
    }else if(symbol == 'O') {
      switch (_boxNum) {
        case 'Box1':
          _displayController[0].appendChild(O);
          _gameBoard[0] = 'O';
          Gameboard.checkGameOver();
          break;
        case 'Box2':
          _displayController[1].appendChild(O);
          _gameBoard[1] = 'O';
          Gameboard.checkGameOver();
          break;
        case 'Box3':
          _displayController[2].appendChild(O);
          _gameBoard[2] = 'O';
          Gameboard.checkGameOver();
          break;
        case 'Box4':
          _displayController[3].appendChild(O);
          _gameBoard[3] = 'O';
          Gameboard.checkGameOver();
          break;
        case 'Box5':
          _displayController[4].appendChild(O);
          _gameBoard[4] = 'O';
          Gameboard.checkGameOver();
          break;
        case 'Box6':
          _displayController[5].appendChild(O);
          _gameBoard[5] = 'O';
          Gameboard.checkGameOver();
          break;
        case 'Box7':
          _displayController[6].appendChild(O);
          _gameBoard[6] = 'O';
          Gameboard.checkGameOver();
          break;
        case 'Box8':
          _displayController[7].appendChild(O);
          _gameBoard[7] = 'O';
          Gameboard.checkGameOver();
          break;
        case 'Box9':
          _displayController[8].appendChild(O);
          _gameBoard[8] = 'O';
          Gameboard.checkGameOver();
          break;
        default:
      };
    };
  };

  function checkGameOver() {
    if(_gameBoard.includes("X" || "O")) {
      if(_gameBoard[0]+_gameBoard[1]+_gameBoard[2] == "XXX" || _gameBoard[0]+_gameBoard[1]+_gameBoard[2] == "OOO") {
        if(_gameBoard[0]+_gameBoard[1]+_gameBoard[2] == "XXX") {
          console.log("GameOver, " + _playerOne.name + " You Win!")
        }else {
          console.log("GameOver " + _playerTwo.name + " Won this round! Try again!")
        }
      }else if(_gameBoard[3]+_gameBoard[4]+_gameBoard[5] == "XXX" || _gameBoard[3]+_gameBoard[4]+_gameBoard[5] == "OOO"){
        if(_gameBoard[3]+_gameBoard[4]+_gameBoard[5] == "XXX") {
          console.log("GameOver, " + _playerOne.name + " You Win!")
        }else {
          console.log("GameOver " + _playerTwo.name + " Won this round! Try again!")
        }
      }else if(_gameBoard[6]+_gameBoard[7]+_gameBoard[8] == "XXX" || _gameBoard[6]+_gameBoard[7]+_gameBoard[8] == "OOO") {
        if(_gameBoard[6]+_gameBoard[7]+_gameBoard[8] == "XXX") {
          console.log("GameOver, " + _playerOne.name + " You Win!")
        }else {
          console.log("GameOver " + _playerTwo.name + " Won this round! Try again!")
        }
      }else if(_gameBoard[0]+_gameBoard[3]+_gameBoard[6] == "XXX" || _gameBoard[0]+_gameBoard[3]+_gameBoard[6] == "OOO") {
        if(_gameBoard[0]+_gameBoard[3]+_gameBoard[6] == "XXX") {
          console.log("GameOver, " + _playerOne.name + " You Win!")
        }else {
          console.log("GameOver " + _playerTwo.name + " Won this round! Try again!")
        }
      }else if(_gameBoard[1]+_gameBoard[4]+_gameBoard[7] == "XXX" || _gameBoard[1]+_gameBoard[4]+_gameBoard[7] == "OOO") {
        if(_gameBoard[1]+_gameBoard[4]+_gameBoard[7] == "XXX") {
          console.log("GameOver, " + _playerOne.name + " You Win!")
        }else {
          console.log("GameOver " + _playerTwo.name + " Won this round! Try again!")
        }
      }else if(_gameBoard[2]+_gameBoard[5]+_gameBoard[8] == "XXX" || _gameBoard[2]+_gameBoard[5]+_gameBoard[8] == "OOO") {
        if(_gameBoard[2]+_gameBoard[5]+_gameBoard[8] == "XXX") {
          console.log("GameOver, " + _playerOne.name + " You Win!")
        }else {
          console.log("GameOver " + _playerTwo.name + " Won this round! Try again!")
        }
      }else if(_gameBoard[0]+_gameBoard[4]+_gameBoard[8] == "XXX" || _gameBoard[0]+_gameBoard[4]+_gameBoard[8] == "OOO") {
        if(_gameBoard[0]+_gameBoard[4]+_gameBoard[8] == "XXX") {
          console.log("GameOver, " + _playerOne.name + " You Win!")
        }else {
          console.log("GameOver " + _playerTwo.name + " Won this round! Try again!")
        }
      }else if(_gameBoard[6]+_gameBoard[4]+_gameBoard[2] == "XXX" || _gameBoard[6]+_gameBoard[4]+_gameBoard[2] == "OOO") {
        if(_gameBoard[6]+_gameBoard[4]+_gameBoard[2] == "XXX") {
          console.log("GameOver, " + _playerOne.name + " You Win!")
        }else {
          console.log("GameOver " + _playerTwo.name + " Won this round! Try again!")
        }
      }else if(_gameBoard.includes("")){
        return console.log("Game stil ongoing");
      }else {
        return console.log(_playerOne.name + " vs " + _playerTwo.name + " Result in a Tie!");
      };
    };
  };
  
  return {
    createBoard: createBoard,
    _gameBoard: _gameBoard,
    checkGameOver: checkGameOver,
  }
}))();
Gameboard.createBoard();