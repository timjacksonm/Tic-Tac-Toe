const playerFactory = (name, symbol, turn) => {
  getName = name;
  getSymbol = symbol;
  getTurn = turn;
  return {name, symbol, turn};
};
let _playerOne = playerFactory("", '', ''); 
let _playerTwo = playerFactory("", '', '');
let _gameBoard = ["", "", "", "", "", "", "", "", ""]; // current score
let _turnSymbol = '';
let _boxSelector = []; // array of each box on game screen. used to select.

const displayController = (function() {
  'use strict';
  // reads data from a gameState for multiple things & manipulates the DOM
  const _selectNav = document.querySelector('nav');

  const placeSymbol = (boxNum,turnSymbol) => {
    const X = document.createElement('img');
    X.setAttribute('src', "graphics/GoldTypographyX.svg");

    const O = document.createElement('img');
    O.setAttribute('src', "graphics/GoldTypography0.svg");

    if(turnSymbol == 'X') {
      switch (boxNum) {
        case 'Box1':
          _boxSelector[0].appendChild(X);
          gameFlow._checkGameOver();
          break;
        case 'Box2':
          _boxSelector[1].appendChild(X);
          gameFlow._checkGameOver();
          break;
        case 'Box3':
          _boxSelector[2].appendChild(X);
          gameFlow._checkGameOver();
          break;
        case 'Box4':
          _boxSelector[3].appendChild(X);
          gameFlow._checkGameOver();
          break;
        case 'Box5':
          _boxSelector[4].appendChild(X);
          gameFlow._checkGameOver();
          break;
        case 'Box6':
          _boxSelector[5].appendChild(X);
          gameFlow._checkGameOver();
          break;
        case 'Box7':
          _boxSelector[6].appendChild(X);
          gameFlow._checkGameOver();
          break;
        case 'Box8':
          _boxSelector[7].appendChild(X);
          gameFlow._checkGameOver();
          break;
        case 'Box9':
          _boxSelector[8].appendChild(X);
          gameFlow._checkGameOver();
          break;
        default:
          }
    }else if(turnSymbol == 'O') {
      switch (boxNum) {
        case 'Box1':
          _boxSelector[0].appendChild(O);
          gameFlow._checkGameOver();
          break;
        case 'Box2':
          _boxSelector[1].appendChild(O);
          gameFlow._checkGameOver();
          break;
        case 'Box3':
          _boxSelector[2].appendChild(O);
          gameFlow._checkGameOver();
          break;
        case 'Box4':
          _boxSelector[3].appendChild(O);
          gameFlow._checkGameOver();
          break;
        case 'Box5':
          _boxSelector[4].appendChild(O);
          gameFlow._checkGameOver();
          break;
        case 'Box6':
          _boxSelector[5].appendChild(O);
          gameFlow._checkGameOver();
          break;
        case 'Box7':
          _boxSelector[6].appendChild(O);
          gameFlow._checkGameOver();
          break;
        case 'Box8':
          _boxSelector[7].appendChild(O);
          gameFlow._checkGameOver();
          break;
        case 'Box9':
          _boxSelector[8].appendChild(O);
          gameFlow._checkGameOver();
          break;
        default:
      };
    };
  };
  const endGameDisplay = (symbol, result, position) => {
  let color = '';
  let playerName = '';

  symbol == 'X' ? color = 'forestgreen' : color = 'maroon';

  symbol == 'X' ? playerName = _playerOne.name : playerName = _playerTwo.name
  
  if(result == 'Win') {
    _selectNav.textContent = "Game Over. " + playerName + " You Win!";
  }else if(result == 'Lose') {
    _selectNav.textContent = "Game Over. " + playerName + " You Win!";
    _selectNav.textContent = "Game Over. " + playerName + " Won this round! Try again!";
  }else {
    _selectNav.textContent = _playerOne.name + " vs " + _playerTwo.name + " Result in a Tie!";
  }

  switch (position) {
    case '012':
      Box1.setAttribute('class', 'topBorder leftBorder winBackground');
      Box2.setAttribute('class', 'topBorder winBackground');
      Box3.setAttribute('class', 'topBorder rightBorder winBackground');
      _selectNav.style.backgroundColor = color;
      break;
    case '345':
      Box4.setAttribute('class', 'leftBorder winBackground');
      Box5.setAttribute('class', 'winBackground');
      Box6.setAttribute('class', 'rightBorder winBackground');
      _selectNav.style.backgroundColor = color;
      break;
    case '678':
      Box7.setAttribute('class', 'leftBorder botBorder winBackground');
      Box8.setAttribute('class', 'botBorder winBackground');
      Box9.setAttribute('class', 'botBorder rightBorder winBackground');
      _selectNav.style.backgroundColor = color;
      break;
    case '036':
      Box1.setAttribute('class', 'topBorder leftBorder winBackground');
      Box4.setAttribute('class', 'leftBorder winBackground');
      Box7.setAttribute('class', 'leftBorder botBorder winBackground');
      _selectNav.style.backgroundColor = color;
      break;
    case '147':
      Box2.setAttribute('class', 'topBorder winBackground');
      Box5.setAttribute('class', 'winBackground');
      Box8.setAttribute('class', 'botBorder winBackground');
      _selectNav.style.backgroundColor = color;
      break;
    case '258':
      Box3.setAttribute('class', 'topBorder rightBorder winBackground');
      Box6.setAttribute('class', 'rightBorder winBackground');
      Box9.setAttribute('class', 'botBorder rightBorder winBackground');
      _selectNav.style.backgroundColor = color;
      break;
    case '048':
      Box1.setAttribute('class', 'topBorder leftBorder winBackground');
      Box5.setAttribute('class', 'winBackground');
      Box9.setAttribute('class', 'botBorder rightBorder winBackground');
      _selectNav.style.backgroundColor = color;
      break;
    case '642':
      Box7.setAttribute('class', 'leftBorder botBorder winBackground');
      Box5.setAttribute('class', 'winBackground');
      Box3.setAttribute('class', 'topBorder rightBorder winBackground');
      _selectNav.style.backgroundColor = color;
      break;
    default:
      _selectNav.style.backgroundColor = 'darkslategrey';
      break;
    };
  };
  return {
    placeSymbol: placeSymbol,
    endGameDisplay: endGameDisplay,
  };
})();
const settingsForm = (function() {
  'use strict';
  //opens settings form before game starts
  const _selectMain = document.querySelector('main');
  const _selectNav = document.querySelector('nav');
  const onePlayerButton = document.getElementById('onePlayerSelect');
  const twoPlayerButton = document.getElementById('twoPlayerSelect');
  const form = document.getElementById('formContainer');

  const onePlayer = ''; //disabled, not written yet.
  const twoPlayer = function fadeOutButtons() {
    twoPlayerButton.style.opacity = '0';
    onePlayerButton.style.opacity = '0';
    setTimeout(function() {
      onePlayerButton.remove();
      twoPlayerButton.remove();
      _selectNav.replaceChildren();
    }, 700);
    setTimeout(function wait(){
      //0.7 seconds for transition fadeout
      _openForm();
      gameFlow.startGameEvent();
    }, 700);
  };
  function _openForm() {
    const createSpan = document.createElement('span');
    const createH2 = document.createElement('h2');
    const createButton = document.createElement('button');
    const createDiv = document.createElement('div');

    _selectMain.firstElementChild.appendChild(createSpan);
    createSpan.setAttribute('class', 'formBox fadeIn');
   
    _selectMain.querySelector('span').appendChild(createH2);
    createH2.textContent = "You chose a 2 Player Game";
  
    const textP1 = _selectMain.querySelector('span').appendChild(document.createElement('p'));
    textP1.textContent = "Player 1 Name?";
    const nameInput1 = _selectMain.querySelector('span').appendChild(document.createElement('input'));
    nameInput1.setAttribute('autocomplete', 'off');
    nameInput1.setAttribute('name', 'player1Name');

    const textP2 = _selectMain.querySelector('span').appendChild(document.createElement('p'));
    textP2.textContent = "Player 2 Name?";
    const nameInput2 = _selectMain.querySelector('span').appendChild(document.createElement('input'));
    nameInput2.setAttribute('autocomplete', 'off');
    nameInput2.setAttribute('name', 'player2Name');

    const textP3 = _selectMain.querySelector('span').appendChild(document.createElement('p'));
    textP3.textContent = "Which player should go first?";

    _selectMain.querySelector('span').appendChild(createDiv);
    createDiv.setAttribute('class', 'radioContainer');

    const op1 = _selectMain.querySelector('div').appendChild(document.createElement('input'));
    op1.setAttribute('id', 'turnChoice1');
    op1.setAttribute('name', 'firstChoice');
    op1.setAttribute('type', 'radio');
    op1.setAttribute('value','Player 1');

    const label1 = _selectMain.querySelector('div').appendChild(document.createElement('label'));
    label1.setAttribute('for', 'turnChoice1');
    label1.setAttribute('id', 'label1');
    label1.textContent = 'Player 1';

    const op2 = _selectMain.querySelector('div').appendChild(document.createElement('input'));
    op2.setAttribute('id', 'turnChoice2');
    op2.setAttribute('name', 'firstChoice');
    op2.setAttribute('type', 'radio');
    op2.setAttribute('value','Player 2');

    const label2 = _selectMain.querySelector('div').appendChild(document.createElement('label'));
    label2.setAttribute('for', 'turnChoice2');
    label2.setAttribute('id', 'label2');
    label2.textContent = 'Player 2';

    _selectMain.querySelector('span').appendChild(createButton);
    createButton.setAttribute('id', 'startGameButton')
    createButton.setAttribute('type', 'submit')
    createButton.textContent = "Start Game!";
  };
  function formVerify() {
    if (form.player1Name.value == '' || form.player2Name.value ==  '') {
      alert("Names must be filled out");
      form.player1Name.style.border = "red 1px solid";
      form.player2Name.style.border = "red 1px solid";
      return false; 
    }else if(form.firstChoice.value == '') {
      alert("Please select whos turn is first.");
      return false;
  }else {
    gameFlow.startGame();
  };
};
  return {
    twoPlayer: twoPlayer,
    formVerify: formVerify,
  };
})();
const gameBoard = (function() {
  'use strict';
  //creates gameBoard with divs - assigns ID's & classes
  const _selectMain = document.querySelector('main');
  // let _boxSelector = []; // array of each box on game screen. used to select.
  let _gameBoardEventToggle = 'off' // toggle to turn off / on eventListeners. Win & lose screen uses this.
  let _boxNum = ''; //Last box that was clicked on game screen.

//below are game screen box event listeners that execute once when clicked.
  let _Box1ClickEvent = (e) => {
     _boxNum = e.target.attributes[0].value;
     gameFlow._choice(_boxNum, '0');
     _boxSelector[0].removeEventListener('click', _Box1ClickEvent);
  };
  let _Box2ClickEvent = (e) => {
    _boxNum = e.target.attributes[0].value;
    gameFlow._choice(_boxNum, '1');
    _boxSelector[1].removeEventListener('click', _Box2ClickEvent);
  };
  let _Box3ClickEvent = (e) => {
    _boxNum = e.target.attributes[0].value;
    gameFlow._choice(_boxNum, '2');
    _boxSelector[2].removeEventListener('click', _Box3ClickEvent);
  };
  let _Box4ClickEvent = (e) => {
    _boxNum = e.target.attributes[0].value;
    gameFlow._choice(_boxNum, '3');
    _boxSelector[3].removeEventListener('click', _Box4ClickEvent);
  };
  let _Box5ClickEvent = (e) => {
    _boxNum = e.target.attributes[0].value;
    gameFlow._choice(_boxNum, '4');
    _boxSelector[4].removeEventListener('click', _Box5ClickEvent);
  };
  let _Box6ClickEvent = (e) => {
    _boxNum = e.target.attributes[0].value;
    gameFlow._choice(_boxNum, '5');
    _boxSelector[5].removeEventListener('click', _Box6ClickEvent);
  };
  let _Box7ClickEvent = (e) => {
    _boxNum = e.target.attributes[0].value;
    gameFlow._choice(_boxNum, '6');
    _boxSelector[6].removeEventListener('click', _Box7ClickEvent);
  };
  let _Box8ClickEvent = (e) => {
    _boxNum = e.target.attributes[0].value;
    gameFlow._choice(_boxNum, '7');
    _boxSelector[7].removeEventListener('click', _Box8ClickEvent);
  };
  let _Box9ClickEvent = (e) => {
    _boxNum = e.target.attributes[0].value;
    gameFlow._choice(_boxNum, '8');
    _boxSelector[8].removeEventListener('click', _Box9ClickEvent);
  };

  function createBoard() {
    for (let i = 1; i < 10; i++) {
      const createBoard = document.createElement('div');
      createBoard.setAttribute('id', `Box${i}`);
      _selectMain.appendChild(createBoard);
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
    _boxSelector = [Box1, Box2, Box3, Box4, Box5, Box6, Box7, Box8, Box9];
    _boxSelector[0].setAttribute('class', 'topBorder leftBorder fadeInBoard');
    _boxSelector[1].setAttribute('class', 'topBorder fadeInBoard');
    _boxSelector[2].setAttribute('class', 'topBorder rightBorder fadeInBoard');
    _boxSelector[3].setAttribute('class', 'leftBorder fadeInBoard');
    _boxSelector[4].setAttribute('class', 'center fadeInBoard');
    _boxSelector[5].setAttribute('class', 'rightBorder fadeInBoard');
    _boxSelector[6].setAttribute('class', 'botBorder leftBorder fadeInBoard');
    _boxSelector[7].setAttribute('class', 'botBorder fadeInBoard');
    _boxSelector[8].setAttribute('class', 'botBorder rightBorder fadeInBoard');
    
    
    _selectMain.setAttribute('class', 'gameBoard');
  
    _addOrRemoveEvents();
  };
  function _addOrRemoveEvents() {
    switch (_gameBoardEventToggle) {
      case 'off': // used at beginning of game. adds to each Box on game board.
        _boxSelector[0].addEventListener('click', _Box1ClickEvent);
        _boxSelector[1].addEventListener('click', _Box2ClickEvent);
        _boxSelector[2].addEventListener('click', _Box3ClickEvent);
        _boxSelector[3].addEventListener('click', _Box4ClickEvent);
        _boxSelector[4].addEventListener('click', _Box5ClickEvent);
        _boxSelector[5].addEventListener('click', _Box6ClickEvent);
        _boxSelector[6].addEventListener('click', _Box7ClickEvent);
        _boxSelector[7].addEventListener('click', _Box8ClickEvent);
        _boxSelector[8].addEventListener('click', _Box9ClickEvent);
        _gameBoardEventToggle = 'on';
        break;
      case 'on': // used on win or loss screen - prevent further adding symbols to the game board.
        _boxSelector[0].removeEventListener('click', _Box1ClickEvent);
        _boxSelector[1].removeEventListener('click', _Box2ClickEvent);
        _boxSelector[2].removeEventListener('click', _Box3ClickEvent);
        _boxSelector[3].removeEventListener('click', _Box4ClickEvent);
        _boxSelector[4].removeEventListener('click', _Box5ClickEvent);
        _boxSelector[5].removeEventListener('click', _Box6ClickEvent);
        _boxSelector[6].removeEventListener('click', _Box7ClickEvent);
        _boxSelector[7].removeEventListener('click', _Box8ClickEvent);
        _boxSelector[8].removeEventListener('click', _Box9ClickEvent);
        _gameBoardEventToggle = 'off';
        break;
      default:
        break;
      };
    };
  return {
    createBoard: createBoard,
    _addOrRemoveEvents: _addOrRemoveEvents,
  };
})();
const gameFlow = (function() {
  'use strict';
  //controls flow of game. runs other modules
  const onePlayerButton = document.getElementById('onePlayerSelect');
  const twoPlayerButton = document.getElementById('twoPlayerSelect');
  const _selectMain = document.querySelector('main');

  //first screen menu - 1 player & 2 player buttons
  onePlayerButton.addEventListener('click', () => {});
  twoPlayerButton.addEventListener('click', (e) => {settingsForm.twoPlayer(), e.preventDefault()});
  //second screen | settings form

  function startGameEvent() {
    const startGameButton = document.getElementById('startGameButton');
    startGameButton.addEventListener('click', (e) => {e.preventDefault(), settingsForm.formVerify()});
  };
  function startGame() {
    const form = document.getElementById('formContainer');
    let p1Turn = '';
    let p2Turn = '';

    switch (form.firstChoice.value) {
      case "Player 1":
        p1Turn = 'First';
        p2Turn = 'Second';
        break;
      case "Player 2":
        p1Turn = 'Second';
        p2Turn = 'First';
        break;
      default:
        console.log("something went wrong");
        break;
    };

    _playerOne = playerFactory(`${form.player1Name.value}`, 'X', `${p1Turn}`);
    _playerTwo = playerFactory(`${form.player2Name.value}`, 'O', `${p2Turn}`);

    form.style.opacity = '0';
    setTimeout(function() {
       //0.7 seconds for transition fadeout of form
      _selectMain.replaceChildren();
    }, 700);
    setTimeout(function wait(){
      //wait 0.7 seconds for fadeout to end. Then run code.
      gameBoard.createBoard();
    }, 700);
  };
  function checkTurn(_playerOneTurn, _playerTwoTurn) {
  
    if(_gameBoard.includes('X') || _gameBoard.includes('O')) {
      if (_turnSymbol == 'X') {
        _turnSymbol = 'O';
        return;
      }else {
        _turnSymbol = 'X';
        return;
      }
    }else if(_playerOneTurn == 'First' && _playerTwoTurn == 'Second') {
      _turnSymbol = 'X';
      return;
    }else {
      _turnSymbol = 'O';
      return;
    }
  };
  const _choice = (_boxNum, index) => {
    checkTurn(_playerOne.turn, _playerTwo.turn);
    _gameBoard[index] = _turnSymbol;
    displayController.placeSymbol(_boxNum,_turnSymbol);
  };
  function _checkGameOver() {
      let symbol = '';
      let result = '';
      let position = '';
    if(_gameBoard.includes("X" || "O")) {
      if(_gameBoard[0]+_gameBoard[1]+_gameBoard[2] == "XXX" || _gameBoard[0]+_gameBoard[1]+_gameBoard[2] == "OOO") {
        if(_gameBoard[0]+_gameBoard[1]+_gameBoard[2] == "XXX") {
          symbol = 'X';
          position = '012';
          result = 'Win';
          displayController.endGameDisplay(symbol, result, position);
          gameBoard._addOrRemoveEvents();
          return;
        }else {
          symbol = 'O';
          position = '012';
          result = 'Lose';
          displayController.endGameDisplay(symbol, result, position);
          gameBoard._addOrRemoveEvents();
          return;
        }
      }else if(_gameBoard[3]+_gameBoard[4]+_gameBoard[5] == "XXX" || _gameBoard[3]+_gameBoard[4]+_gameBoard[5] == "OOO"){
        if(_gameBoard[3]+_gameBoard[4]+_gameBoard[5] == "XXX") {
          symbol = 'X';
          position = '345';
          result = 'Win';
          displayController.endGameDisplay(symbol, result, position);
          gameBoard._addOrRemoveEvents();
          return;
        }else {
          symbol = 'O'
          position = '345';
          result = 'Lose';
          displayController.endGameDisplay(symbol, result, position);
          gameBoard._addOrRemoveEvents();
          return;
        }
      }else if(_gameBoard[6]+_gameBoard[7]+_gameBoard[8] == "XXX" || _gameBoard[6]+_gameBoard[7]+_gameBoard[8] == "OOO") {
        if(_gameBoard[6]+_gameBoard[7]+_gameBoard[8] == "XXX") {
          symbol = 'X';
          position = '678';
          result = 'Win';
          displayController.endGameDisplay(symbol, result, position);
          gameBoard._addOrRemoveEvents();
          return;
        }else {
          symbol = 'O'
          position = '678';
          result = 'Lose';
          displayController.endGameDisplay(symbol, result, position);
          gameBoard._addOrRemoveEvents();o
          return;
        }
      }else if(_gameBoard[0]+_gameBoard[3]+_gameBoard[6] == "XXX" || _gameBoard[0]+_gameBoard[3]+_gameBoard[6] == "OOO") {
        if(_gameBoard[0]+_gameBoard[3]+_gameBoard[6] == "XXX") {
          symbol = 'X';
          position = '036';
          result = 'Win';
          displayController.endGameDisplay(symbol, result, position);
          gameBoard._addOrRemoveEvents();
          return;
        }else {
          symbol = 'O'
          position = '036';
          result = 'Lose';
          displayController.endGameDisplay(symbol, result, position);
          gameBoard._addOrRemoveEvents();
          return;
        }
      }else if(_gameBoard[1]+_gameBoard[4]+_gameBoard[7] == "XXX" || _gameBoard[1]+_gameBoard[4]+_gameBoard[7] == "OOO") {
        if(_gameBoard[1]+_gameBoard[4]+_gameBoard[7] == "XXX") {
          symbol = 'X';
          position = '147';
          result = 'Win';
          displayController.endGameDisplay(symbol, result, position);
          gameBoard._addOrRemoveEvents();
          return;
        }else {
          symbol = 'O'
          position = '147';
          result = 'Lose';
          displayController.endGameDisplay(symbol, result, position);
          gameBoard._addOrRemoveEvents();
          return;
        }
      }else if(_gameBoard[2]+_gameBoard[5]+_gameBoard[8] == "XXX" || _gameBoard[2]+_gameBoard[5]+_gameBoard[8] == "OOO") {
        if(_gameBoard[2]+_gameBoard[5]+_gameBoard[8] == "XXX") {
          symbol = 'X';
          position = '258';
          result = 'Win';
          displayController.endGameDisplay(symbol, result, position);
          gameBoard._addOrRemoveEvents();
          return;
        }else {
          symbol = 'O'
          position = '258';
          result = 'Lose';
          displayController.endGameDisplay(symbol, result, position);
          gameBoard._addOrRemoveEvents();
          return;
        }
      }else if(_gameBoard[0]+_gameBoard[4]+_gameBoard[8] == "XXX" || _gameBoard[0]+_gameBoard[4]+_gameBoard[8] == "OOO") {
        if(_gameBoard[0]+_gameBoard[4]+_gameBoard[8] == "XXX") {
          symbol = 'X';
          position = '048';
          result = 'Win';
          displayController.endGameDisplay(symbol, result, position);
          gameBoard._addOrRemoveEvents();
          return;
        }else {
          symbol = 'O'
          position = '048';
          result = 'Lose';
          displayController.endGameDisplay(symbol, result, position);
          gameBoard._addOrRemoveEvents();
          return;
        }
      }else if(_gameBoard[6]+_gameBoard[4]+_gameBoard[2] == "XXX" || _gameBoard[6]+_gameBoard[4]+_gameBoard[2] == "OOO") {
        if(_gameBoard[6]+_gameBoard[4]+_gameBoard[2] == "XXX") {
          symbol = 'X';
          position = '642';
          result = 'Win';
          displayController.endGameDisplay(symbol, result, position);
          gameBoard._addOrRemoveEvents();
          return;
        }else {
          symbol = 'O'
          position = '642';
          result = 'Lose';
          displayController.endGameDisplay(symbol, result, position);
          gameBoard._addOrRemoveEvents();
          return;
        }
      }else if(_gameBoard.includes("")){
        console.log("Game stil ongoing");
        return;
      }else {
        symbol = 'Tie';
        position = 'Tie';
        result = 'Tie';
        displayController.endGameDisplay(symbol, result, position);
        return;
      };
    };
  };

  return {
    startGameEvent: startGameEvent,
    startGame: startGame,
    _choice: _choice,
    _checkGameOver: _checkGameOver,
  };
})();