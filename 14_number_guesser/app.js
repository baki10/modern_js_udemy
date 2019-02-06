// game values
let min = 1,
  max = 10,
  winningNumber = getRandomNumber(min, max),
  guessesLeft = 3;

// UI elements
const game = document.getElementById('game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

// assign min and max
minNum.textContent = min;
maxNum.textContent = max;

// play again event listener
game.addEventListener('mousedown', function (e) {
  if(e.target.className === 'play-again'){
    reload();    
  }
});

// listen for guess
guessBtn.addEventListener('click', function () {
  const guess = parseInt(guessInput.value);
  // validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    return;
  }
  // check if won
  if (guess === winningNumber) {
    gameOver(true, `${winningNumber} is correct, you win!`);
  } else {
    guessesLeft--;
    if (guessesLeft === 0) {
      gameOver(false, `Game over, You Lost! The correct number was ${winningNumber}`);
    } else {
      guessInput.value = '';
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
    }
  }

});

function gameOver(won, msg) {
  guessInput.disabled = true;
  const color = won ? 'green' : 'red';
  guessInput.style.borderColor = color;
  setMessage(msg, color);

  // play again
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

function reload() {
  window.location.reload();
}

function getRandomNumber(min, max) {
  return Math.round(Math.random()*(max - min)) + min;  
}

function setMessage(msg, color = 'green') {
  message.style.color = color
  message.textContent = msg;
}