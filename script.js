const playerFactory = (name, symbol, turn) => {
  getName = name;
  getSymbol = symbol;
  getTurn = turn;
  return {name, symbol, turn};
};
const Gameboard = ((function() {
  'use strict';
  const _selectMain = document.querySelector('main');

  let _gameBoard = ["", "", "", "", "", "", "", "", ""];
  let _displayController = [];
  let _boxNum = '';
  let _gameBoardEventToggle = 'off'
  let _Box1 = '';
  let _Box2 = '';
  let _Box3 = '';
  let _Box4 = '';
  let _Box5 = '';
  let _Box6 = '';
  let _Box7 = '';
  let _Box8 = '';
  let _Box9 = '';
  const _playerOne = playerFactory("Tim", 'X', 'First');
  const _playerTwo = playerFactory("Jake", 'O', 'Second');

  let _Box1ClickEvent = (e) => {
    _boxNum = e.target.attributes[0].value;
    _choice();
    Box1.removeEventListener('click', _Box1ClickEvent);
  };
  let _Box2ClickEvent = (e) => {
    _boxNum = e.target.attributes[0].value;
    _choice();
    Box2.removeEventListener('click', _Box2ClickEvent);
  };
  let _Box3ClickEvent = (e) => {
    _boxNum = e.target.attributes[0].value;
    _choice();
    Box3.removeEventListener('click', _Box3ClickEvent);
  };
  let _Box4ClickEvent = (e) => {
    _boxNum = e.target.attributes[0].value;
    _choice();
    Box4.removeEventListener('click', _Box4ClickEvent);
  };
  let _Box5ClickEvent = (e) => {
    _boxNum = e.target.attributes[0].value;
    _choice();
    Box5.removeEventListener('click', _Box5ClickEvent);
  };
  let _Box6ClickEvent = (e) => {
    _boxNum = e.target.attributes[0].value;
    _choice();
    Box6.removeEventListener('click', _Box6ClickEvent);
  };
  let _Box7ClickEvent = (e) => {
    _boxNum = e.target.attributes[0].value;
    _choice();
    Box7.removeEventListener('click', _Box7ClickEvent);
  };
  let _Box8ClickEvent = (e) => {
    _boxNum = e.target.attributes[0].value;
    _choice();
    Box8.removeEventListener('click', _Box8ClickEvent);
  };
  let _Box9ClickEvent = (e) => {
    _boxNum = e.target.attributes[0].value;
    _choice();
    Box9.removeEventListener('click', _Box9ClickEvent);
  };
  
  function createBoard() {
    for (let i = 1; i < 10; i++) {
      const createBoard = document.createElement('div');
      createBoard.setAttribute('id', `Box${i}`);
      _selectMain.appendChild(createBoard);
    };
    _Box1 = document.getElementById('Box1');
    _Box2 = document.getElementById('Box2');
    _Box3 = document.getElementById('Box3');
    _Box4 = document.getElementById('Box4');
    _Box5 = document.getElementById('Box5');
    _Box6 = document.getElementById('Box6');
    _Box7 = document.getElementById('Box7');
    _Box8 = document.getElementById('Box8');
    _Box9 = document.getElementById('Box9');
    _Box1.setAttribute('class', 'top left');
    _Box2.setAttribute('class', 'top');
    _Box3.setAttribute('class', 'top right');
    _Box4.setAttribute('class', 'left');
    _Box5.setAttribute('class', 'center');
    _Box6.setAttribute('class', 'right');
    _Box7.setAttribute('class', 'bot left');
    _Box8.setAttribute('class', 'bot');
    _Box9.setAttribute('class', 'bot right');
    _displayController = [Box1, Box2, Box3, Box4, Box5, Box6, Box7, Box8, Box9];
    _addOrRemoveEvents();
  };
  function _addOrRemoveEvents() {
    switch (_gameBoardEventToggle) {
      case 'off':
      _Box1.addEventListener('click', _Box1ClickEvent);
      _Box2.addEventListener('click', _Box2ClickEvent);
      _Box3.addEventListener('click', _Box3ClickEvent);
      _Box4.addEventListener('click', _Box4ClickEvent);
      _Box5.addEventListener('click', _Box5ClickEvent);
      _Box6.addEventListener('click', _Box6ClickEvent);
      _Box7.addEventListener('click', _Box7ClickEvent);
      _Box8.addEventListener('click', _Box8ClickEvent);
      _Box9.addEventListener('click', _Box9ClickEvent);
      _gameBoardEventToggle = 'on';
      break;
      case 'on':
      _Box1.removeEventListener('click', _Box1ClickEvent);
      _Box2.removeEventListener('click', _Box2ClickEvent);
      _Box3.removeEventListener('click', _Box3ClickEvent);
      _Box4.removeEventListener('click', _Box4ClickEvent);
      _Box5.removeEventListener('click', _Box5ClickEvent);
      _Box6.removeEventListener('click', _Box6ClickEvent);
      _Box7.removeEventListener('click', _Box7ClickEvent);
      _Box8.removeEventListener('click', _Box8ClickEvent);
      _Box9.removeEventListener('click', _Box9ClickEvent);
      _gameBoardEventToggle = 'off';
      default:
        break;
    };
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
          symbol = "O";
          return;
        }else {
          symbol = "X";
          return;
        }
      }else if(_playerOneTurn == 'First' && _playerTwoTurn == 'Second') {
        symbol = "X";
        return;
      }else {
        symbol = "O";
        return;
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
          _checkGameOver();
          break;
        case 'Box2':
          _displayController[1].appendChild(X);
          _gameBoard[1] = 'X';
          _checkGameOver();
          break;
        case 'Box3':
          _displayController[2].appendChild(X);
          _gameBoard[2] = 'X';
          _checkGameOver();
          break;
        case 'Box4':
          _displayController[3].appendChild(X);
          _gameBoard[3] = 'X';
          _checkGameOver();
          break;
        case 'Box5':
          _displayController[4].appendChild(X);
          _gameBoard[4] = 'X';
          _checkGameOver();
          break;
        case 'Box6':
          _displayController[5].appendChild(X);
          _gameBoard[5] = 'X';
          _checkGameOver();
          break;
        case 'Box7':
          _displayController[6].appendChild(X);
          _gameBoard[6] = 'X';
          _checkGameOver();
          break;
        case 'Box8':
          _displayController[7].appendChild(X);
          _gameBoard[7] = 'X';
          _checkGameOver();
          break;
        case 'Box9':
          _displayController[8].appendChild(X);
          _gameBoard[8] = 'X';
          _checkGameOver();
          break;
        default:
          }
    }else if(symbol == 'O') {
      switch (_boxNum) {
        case 'Box1':
          _displayController[0].appendChild(O);
          _gameBoard[0] = 'O';
          _checkGameOver();
          break;
        case 'Box2':
          _displayController[1].appendChild(O);
          _gameBoard[1] = 'O';
          _checkGameOver();
          break;
        case 'Box3':
          _displayController[2].appendChild(O);
          _gameBoard[2] = 'O';
          _checkGameOver();
          break;
        case 'Box4':
          _displayController[3].appendChild(O);
          _gameBoard[3] = 'O';
          _checkGameOver();
          break;
        case 'Box5':
          _displayController[4].appendChild(O);
          _gameBoard[4] = 'O';
          _checkGameOver();
          break;
        case 'Box6':
          _displayController[5].appendChild(O);
          _gameBoard[5] = 'O';
          _checkGameOver();
          break;
        case 'Box7':
          _displayController[6].appendChild(O);
          _gameBoard[6] = 'O';
          _checkGameOver();
          break;
        case 'Box8':
          _displayController[7].appendChild(O);
          _gameBoard[7] = 'O';
          _checkGameOver();
          break;
        case 'Box9':
          _displayController[8].appendChild(O);
          _gameBoard[8] = 'O';
          _checkGameOver();
          break;
        default:
      };
    };
  };
  function _checkGameOver() {
    if(_gameBoard.includes("X" || "O")) {
      if(_gameBoard[0]+_gameBoard[1]+_gameBoard[2] == "XXX" || _gameBoard[0]+_gameBoard[1]+_gameBoard[2] == "OOO") {
        if(_gameBoard[0]+_gameBoard[1]+_gameBoard[2] == "XXX") {
          console.log("GameOver, " + _playerOne.name + " You Win!");
          _addOrRemoveEvents();
          return;
        }else {
          console.log("GameOver " + _playerTwo.name + " Won this round! Try again!");
          _addOrRemoveEvents();
          return;
        }
      }else if(_gameBoard[3]+_gameBoard[4]+_gameBoard[5] == "XXX" || _gameBoard[3]+_gameBoard[4]+_gameBoard[5] == "OOO"){
        if(_gameBoard[3]+_gameBoard[4]+_gameBoard[5] == "XXX") {
          console.log("GameOver, " + _playerOne.name + " You Win!");
          _addOrRemoveEvents();
          return;
        }else {
          console.log("GameOver " + _playerTwo.name + " Won this round! Try again!");
          _addOrRemoveEvents();
          return;
        }
      }else if(_gameBoard[6]+_gameBoard[7]+_gameBoard[8] == "XXX" || _gameBoard[6]+_gameBoard[7]+_gameBoard[8] == "OOO") {
        if(_gameBoard[6]+_gameBoard[7]+_gameBoard[8] == "XXX") {
          console.log("GameOver, " + _playerOne.name + " You Win!");
          _addOrRemoveEvents();
          return;
        }else {
          console.log("GameOver " + _playerTwo.name + " Won this round! Try again!");
          _addOrRemoveEvents();
          return;
        }
      }else if(_gameBoard[0]+_gameBoard[3]+_gameBoard[6] == "XXX" || _gameBoard[0]+_gameBoard[3]+_gameBoard[6] == "OOO") {
        if(_gameBoard[0]+_gameBoard[3]+_gameBoard[6] == "XXX") {
          console.log("GameOver, " + _playerOne.name + " You Win!");
          _addOrRemoveEvents();
          return;
        }else {
          console.log("GameOver " + _playerTwo.name + " Won this round! Try again!");
          _addOrRemoveEvents();
          return;
        }
      }else if(_gameBoard[1]+_gameBoard[4]+_gameBoard[7] == "XXX" || _gameBoard[1]+_gameBoard[4]+_gameBoard[7] == "OOO") {
        if(_gameBoard[1]+_gameBoard[4]+_gameBoard[7] == "XXX") {
          console.log("GameOver, " + _playerOne.name + " You Win!");
          _addOrRemoveEvents();
          return;
        }else {
          console.log("GameOver " + _playerTwo.name + " Won this round! Try again!");
          _addOrRemoveEvents();
          return;
        }
      }else if(_gameBoard[2]+_gameBoard[5]+_gameBoard[8] == "XXX" || _gameBoard[2]+_gameBoard[5]+_gameBoard[8] == "OOO") {
        if(_gameBoard[2]+_gameBoard[5]+_gameBoard[8] == "XXX") {
          console.log("GameOver, " + _playerOne.name + " You Win!");
          _addOrRemoveEvents();
          return;
        }else {
          console.log("GameOver " + _playerTwo.name + " Won this round! Try again!");
          _addOrRemoveEvents();
          return;
        }
      }else if(_gameBoard[0]+_gameBoard[4]+_gameBoard[8] == "XXX" || _gameBoard[0]+_gameBoard[4]+_gameBoard[8] == "OOO") {
        if(_gameBoard[0]+_gameBoard[4]+_gameBoard[8] == "XXX") {
          console.log("GameOver, " + _playerOne.name + " You Win!");
          _addOrRemoveEvents();
          return;
        }else {
          console.log("GameOver " + _playerTwo.name + " Won this round! Try again!");
          _addOrRemoveEvents();
          return;
        }
      }else if(_gameBoard[6]+_gameBoard[4]+_gameBoard[2] == "XXX" || _gameBoard[6]+_gameBoard[4]+_gameBoard[2] == "OOO") {
        if(_gameBoard[6]+_gameBoard[4]+_gameBoard[2] == "XXX") {
          console.log("GameOver, " + _playerOne.name + " You Win!");
          _addOrRemoveEvents();
          return;
        }else {
          console.log("GameOver " + _playerTwo.name + " Won this round! Try again!");
          _addOrRemoveEvents();
          return;
        }
      }else if(_gameBoard.includes("")){
        return console.log("Game stil ongoing");
      }else {
        console.log(_playerOne.name + " vs " + _playerTwo.name + " Result in a Tie!");
        _addOrRemoveEvents();
        return;
      };
    };
  };
  return {
    createBoard: createBoard,
  }
}))();
Gameboard.createBoard();