const playerFactory = (name, symbol, turn) => {
  getName = name;
  getSymbol = symbol;
  getTurn = turn;
  return {name, symbol, turn};
};
let _gameBoard = ["", "", "", "", "", "", "", "", ""];
const Gameboard = ((function() {
  'use strict';
  const _selectMain = document.querySelector('main');
  const _selectNav = document.querySelector('nav');

  let _playerOne = playerFactory("", '', '');
  let _playerTwo = playerFactory("", '', '');
  // let _gameBoard = ["", "", "", "", "", "", "", "", ""];
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
  const openSettings = (e) => {
    function openForm() {
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
      createDiv.style.display = 'flex';

      const op1 = _selectMain.querySelector('div').appendChild(document.createElement('input'));
      op1.setAttribute('id', 'turnChoice1');
      op1.setAttribute('class', 'radio_input');
      op1.setAttribute('name', 'firstChoice');
      op1.setAttribute('type', 'radio');
      op1.setAttribute('value','Player 1');

      const label1 = _selectMain.querySelector('div').appendChild(document.createElement('label'));
      label1.setAttribute('for', 'turnChoice1');
      label1.setAttribute('id', 'label1');
      label1.textContent = 'Player 1';

      const op2 = _selectMain.querySelector('div').appendChild(document.createElement('input'));
      op2.setAttribute('id', 'turnChoice2');
      op2.setAttribute('class', 'radio_input');
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
    }


    if(e.target.textContent == '2 Player') {
      twoPlayerButton.style.opacity = '0';
      onePlayerButton.style.opacity = '0';
      setTimeout(function() {
        onePlayerButton.remove();
        twoPlayerButton.remove();
        _selectNav.replaceChildren();
      }, 700);
    }
    e.preventDefault();
    setTimeout(function wait(){
      //0.7 seconds for transition fadeout
      openForm();
      formButtonEvent(); //adds event listener to Start Game Button on form.
    }, 700);
  };
  const onePlayerButton = document.getElementById('onePlayerSelect');
  const twoPlayerButton = document.getElementById('twoPlayerSelect');
  //first screen menu buttons -eventListeners
  onePlayerButton.addEventListener('click', openSettings);
  twoPlayerButton.addEventListener('click', openSettings);

  function formButtonEvent() {
    //had to add to funciton scope so this wouldn't try and run my variables until called
    const startGameButton = document.getElementById('startGameButton');
    const form = document.getElementById('formContainer');

    startGameButton.addEventListener('click', (event) => {
    event.preventDefault();
    
    if (form.player1Name.value == '' || form.player2Name.value ==  '') {
      alert("Names must be filled out");
      form.player1Name.style.border = "red 1px solid";
      form.player2Name.style.border = "red 1px solid";
      return false; 
    }else if(form.firstChoice.value == '') {
      alert("Please select whos turn is first.");
      return false;
    }

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
      createBoard();
    }, 700);
  });
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
    _Box1.setAttribute('class', 'top left fadeInBoard');
    _Box2.setAttribute('class', 'top fadeInBoard');
    _Box3.setAttribute('class', 'top right fadeInBoard');
    _Box4.setAttribute('class', 'left fadeInBoard');
    _Box5.setAttribute('class', 'center fadeInBoard');
    _Box6.setAttribute('class', 'right fadeInBoard');
    _Box7.setAttribute('class', 'bot left fadeInBoard');
    _Box8.setAttribute('class', 'bot fadeInBoard');
    _Box9.setAttribute('class', 'bot right fadeInBoard');
    _displayController = [Box1, Box2, Box3, Box4, Box5, Box6, Box7, Box8, Box9];
    _selectMain.setAttribute('class', 'gameBoard');
  
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
      
      if(_gameBoard.includes("X") || _gameBoard.includes("O")) {
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
          _selectNav.textContent = "GameOver, " + _playerOne.name + " You Win!";
          _addOrRemoveEvents();
          _displayController[0].setAttribute('class', 'winBackground');
          _displayController[1].setAttribute('class', 'winBackground');
          _displayController[2].setAttribute('class', 'winBackground');
          _selectNav.style.backgroundColor = 'forestgreen';
          return;
        }else {
          _selectNav.textContent = "GameOver " + _playerTwo.name + " Won this round! Try again!";
          _addOrRemoveEvents();
          _displayController[0].setAttribute('class', 'winBackground');
          _displayController[1].setAttribute('class', 'winBackground');
          _displayController[2].setAttribute('class', 'winBackground');
          _selectNav.style.backgroundColor = 'maroon';
          return;
        }
      }else if(_gameBoard[3]+_gameBoard[4]+_gameBoard[5] == "XXX" || _gameBoard[3]+_gameBoard[4]+_gameBoard[5] == "OOO"){
        if(_gameBoard[3]+_gameBoard[4]+_gameBoard[5] == "XXX") {
          _selectNav.textContent = "GameOver, " + _playerOne.name + " You Win!";
          _addOrRemoveEvents();
          _displayController[3].setAttribute('class', 'winBackground');
          _displayController[4].setAttribute('class', 'winBackground');
          _displayController[5].setAttribute('class', 'winBackground');
          _selectNav.style.backgroundColor = 'forestgreen';
          return;
        }else {
          _selectNav.textContent = "GameOver " + _playerTwo.name + " Won this round! Try again!";
          _addOrRemoveEvents();
          _displayController[3].setAttribute('class', 'winBackground');
          _displayController[4].setAttribute('class', 'winBackground');
          _displayController[5].setAttribute('class', 'winBackground');
          _selectNav.style.backgroundColor = 'maroon';
          return;
        }
      }else if(_gameBoard[6]+_gameBoard[7]+_gameBoard[8] == "XXX" || _gameBoard[6]+_gameBoard[7]+_gameBoard[8] == "OOO") {
        if(_gameBoard[6]+_gameBoard[7]+_gameBoard[8] == "XXX") {
          _selectNav.textContent = "Game over. " + _playerOne.name + " You Win!";
          _addOrRemoveEvents();
          _displayController[6].setAttribute('class', 'winBackground');
          _displayController[7].setAttribute('class', 'winBackground');
          _displayController[8].setAttribute('class', 'winBackground');
          _selectNav.style.backgroundColor = 'forestgreen';
          return;
        }else {
          _selectNav.textContent = "Game over. " + _playerTwo.name + " Won this round! Try again!";
          _addOrRemoveEvents();
          _displayController[6].setAttribute('class', 'winBackground');
          _displayController[7].setAttribute('class', 'winBackground');
          _displayController[8].setAttribute('class', 'winBackground');
          _selectNav.style.backgroundColor = 'maroon';
          return;
        }
      }else if(_gameBoard[0]+_gameBoard[3]+_gameBoard[6] == "XXX" || _gameBoard[0]+_gameBoard[3]+_gameBoard[6] == "OOO") {
        if(_gameBoard[0]+_gameBoard[3]+_gameBoard[6] == "XXX") {
          _selectNav.textContent = "Game over. " + _playerOne.name + " You Win!";
          _addOrRemoveEvents();
          _displayController[0].setAttribute('class', 'winBackground');
          _displayController[3].setAttribute('class', 'winBackground');
          _displayController[6].setAttribute('class', 'winBackground');
          _selectNav.style.backgroundColor = 'forestgreen';
          return;
        }else {
          _selectNav.textContent = "Game over. " + _playerTwo.name + " Won this round! Try again!";
          _addOrRemoveEvents();
          _displayController[0].setAttribute('class', 'winBackground');
          _displayController[3].setAttribute('class', 'winBackground');
          _displayController[6].setAttribute('class', 'winBackground');
          _selectNav.style.backgroundColor = 'maroon';
          return;
        }
      }else if(_gameBoard[1]+_gameBoard[4]+_gameBoard[7] == "XXX" || _gameBoard[1]+_gameBoard[4]+_gameBoard[7] == "OOO") {
        if(_gameBoard[1]+_gameBoard[4]+_gameBoard[7] == "XXX") {
          _selectNav.textContent = "Game over. " + _playerOne.name + " You Win!";
          _addOrRemoveEvents();
          _displayController[1].setAttribute('class', 'winBackground');
          _displayController[4].setAttribute('class', 'winBackground');
          _displayController[7].setAttribute('class', 'winBackground');
          _selectNav.style.backgroundColor = 'forestgreen';
          return;
        }else {
          _selectNav.textContent = "Game over. " + _playerTwo.name + " Won this round! Try again!";
          _addOrRemoveEvents();
          _displayController[1].setAttribute('class', 'winBackground');
          _displayController[4].setAttribute('class', 'winBackground');
          _displayController[7].setAttribute('class', 'winBackground');
          _selectNav.style.backgroundColor = 'maroon';
          return;
        }
      }else if(_gameBoard[2]+_gameBoard[5]+_gameBoard[8] == "XXX" || _gameBoard[2]+_gameBoard[5]+_gameBoard[8] == "OOO") {
        if(_gameBoard[2]+_gameBoard[5]+_gameBoard[8] == "XXX") {
          _selectNav.textContent = "Game over. " + _playerOne.name + " You Win!";
          _addOrRemoveEvents();
          _displayController[2].setAttribute('class', 'winBackground');
          _displayController[5].setAttribute('class', 'winBackground');
          _displayController[8].setAttribute('class', 'winBackground');
          _selectNav.style.backgroundColor = 'forestgreen';
          return;
        }else {
          _selectNav.textContent = "Game over. " + _playerTwo.name + " Won this round! Try again!";
          _addOrRemoveEvents();
          _displayController[2].setAttribute('class', 'winBackground');
          _displayController[5].setAttribute('class', 'winBackground');
          _displayController[8].setAttribute('class', 'winBackground');
          _selectNav.style.backgroundColor = 'maroon';
          return;
        }
      }else if(_gameBoard[0]+_gameBoard[4]+_gameBoard[8] == "XXX" || _gameBoard[0]+_gameBoard[4]+_gameBoard[8] == "OOO") {
        if(_gameBoard[0]+_gameBoard[4]+_gameBoard[8] == "XXX") {
          _selectNav.textContent = "Game over. " + _playerOne.name + " You Win!";
          _addOrRemoveEvents();
          _displayController[0].setAttribute('class', 'winBackground');
          _displayController[4].setAttribute('class', 'winBackground');
          _displayController[8].setAttribute('class', 'winBackground');
          _selectNav.style.backgroundColor = 'forestgreen';
          return;
        }else {
          _selectNav.textContent = "Game over. " + _playerTwo.name + " Won this round! Try again!";
          _addOrRemoveEvents();
          _displayController[0].setAttribute('class', 'winBackground');
          _displayController[4].setAttribute('class', 'winBackground');
          _displayController[8].setAttribute('class', 'winBackground');
          _selectNav.style.backgroundColor = 'maroon';
          return;
        }
      }else if(_gameBoard[6]+_gameBoard[4]+_gameBoard[2] == "XXX" || _gameBoard[6]+_gameBoard[4]+_gameBoard[2] == "OOO") {
        if(_gameBoard[6]+_gameBoard[4]+_gameBoard[2] == "XXX") {
          _selectNav.textContent = "Game over. " + _playerOne.name + " You Win!";
          _addOrRemoveEvents();
          _displayController[6].setAttribute('class', 'winBackground');
          _displayController[4].setAttribute('class', 'winBackground');
          _displayController[2].setAttribute('class', 'winBackground');
          _selectNav.style.backgroundColor = 'forestgreen';
          return;
        }else {
          _selectNav.textContent = "Game over. " + _playerTwo.name + " Won this round! Try again!";
          _addOrRemoveEvents();
          _displayController[6].setAttribute('class', 'winBackground');
          _displayController[4].setAttribute('class', 'winBackground');
          _displayController[2].setAttribute('class', 'winBackground');
          _selectNav.style.backgroundColor = 'maroon';
          return;
        }
      }else if(_gameBoard.includes("")){
        // console.log("Game stil ongoing");
        return;
      }else {
        _selectNav.textContent = _playerOne.name + " vs " + _playerTwo.name + " Result in a Tie!";
        _addOrRemoveEvents();
        _selectNav.style.backgroundColor = 'darkslategrey';
        return;
      };
    };
  };
  return {
    //nothing currently...
  }
}))();