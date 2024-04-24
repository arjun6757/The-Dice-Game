
function myFunction(){
var firstDice = 0;
var secondDice = 0;

firstDice = generateRandom();
secondDice = generateRandom();

setAttribute(firstDice, secondDice);
decide(firstDice, secondDice);
}

function generateRandom() {
  var random_value = (Math.random() * 6)+1;
  var value = Math.floor(random_value);
  return value;
}

function setAttribute(firstDice, secondDice){
  switch (firstDice) {
    case 1:
      document.firstElementChild.lastElementChild.querySelector(".first-one").setAttribute("src", './images/dice1.png');      
      break;
    case 2:
      document.firstElementChild.lastElementChild.querySelector(".first-one").setAttribute("src", './images/dice2.png');
      break;
    case 3:
      document.firstElementChild.lastElementChild.querySelector(".first-one").setAttribute("src", './images/dice3.png');
      break;
    case 4:
      document.firstElementChild.lastElementChild.querySelector(".first-one").setAttribute("src", './images/dice4.png');
      break;
    case 5:
      document.firstElementChild.lastElementChild.querySelector(".first-one").setAttribute("src", './images/dice5.png');
      break;
    case 6:
      document.firstElementChild.lastElementChild.querySelector(".first-one").setAttribute("src", './images/dice6.png');
      break;
  
    default: console.log("try again!");
      break;
  }

  switch (secondDice) {
    case 1:
      document.firstElementChild.lastElementChild.querySelector(".second-one").setAttribute("src", './images/dice1.png');
      break;
    case 2:
      document.firstElementChild.lastElementChild.querySelector(".second-one").setAttribute("src", './images/dice2.png');
      break;
    case 3:
      document.firstElementChild.lastElementChild.querySelector(".second-one").setAttribute("src", './images/dice3.png');
      break;
    case 4:
      document.firstElementChild.lastElementChild.querySelector(".second-one").setAttribute("src", './images/dice4.png');
      break;
    case 5:
      document.firstElementChild.lastElementChild.querySelector(".second-one").setAttribute("src", './images/dice5.png');
      break;
    case 6:
      document.firstElementChild.lastElementChild.querySelector(".second-one").setAttribute("src", './images/dice6.png');
      break;
    default: console.log("try again!");
      break;
  }
}

function decide(firstDice, secondDice){
  if (firstDice > secondDice) {
    document.firstElementChild.querySelector(".mutable-text").textContent = "Player 1 Wins 🏁";
  }
  else if(firstDice == secondDice){
    document.firstElementChild.querySelector(".mutable-text").textContent = "It's a tie 🏳️!";
  }
  else{
    document.firstElementChild.querySelector(".mutable-text").textContent = "Player 2 Wins 🏁";
  }
}