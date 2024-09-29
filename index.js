document.addEventListener('DOMContentLoaded', () => {

  const first = document.getElementsByClassName("first-one")[0];
  const second = document.getElementsByClassName("second-one")[0];
  const mutableText = document.querySelector(".mutable-text");
  const tieFlag = '🏳️';
  const winningFlag = '🏁';
  var firstValue = 0, secondValue = 0;

  first.onclick = async function () {
    await playRollingSound();
    firstValue = generateRandom();
    updateDice(this, firstValue);
    isItTime();
  }

  second.onclick = async function () {
    await playRollingSound();
    secondValue = generateRandom();
    updateDice(this, secondValue);
    isItTime();
  }

  function generateRandom() {
    var randomValue = Math.floor(Math.random() * 6) + 1;
    return randomValue;
  }

  function updateDice(dice, value) {
    //now how to update the image src
    switch (value) {
      case 1:
        dice.setAttribute('src', './images/dice1.png');
        break;
      case 2:
        dice.setAttribute('src', './images/dice2.png');
        break;
      case 3:
        dice.setAttribute('src', './images/dice3.png');
        break;
      case 4:
        dice.setAttribute('src', './images/dice4.png');
        break;
      case 5:
        dice.setAttribute('src', './images/dice5.png');
        break;
      case 6:
        dice.setAttribute('src', './images/dice6.png');
        break;

      default:
        console.log('Something went wrong!');
    }
  }

  function isItTime() {
    if (firstValue > 0 && secondValue > 0) {
      decideWinner(firstValue, secondValue);
    }
  }

  function decideWinner(firstValue, secondValue) {
    if (firstValue > secondValue) {
      mutableText.textContent = `Player1 is the Winner ${winningFlag}!`;
    }
    else if (secondValue > firstValue) {
      mutableText.textContent = `Player2 is the Winner ${winningFlag}!`;
    }
    else {
      mutableText.textContent = `It's a tie ${tieFlag}!`;
    }

    setTimeout(function() {
      mutableText.textContent = 'resetting...';
    }, 1800)

    setTimeout(function () {
      reset();
    }, 3000);
  }

  function reset() {
    firstValue = 0, secondValue = 0;

    first.setAttribute('src', './images/dice1.png')
    second.setAttribute('src', './images/dice1.png')

    mutableText.textContent = 'Left dice is Player1 and Right dice is Player2!';
  }

  async function playRollingSound() {
    const rollingSound = new Audio('./sound/dice-roll.mp3');
    await rollingSound.play();
  }

});