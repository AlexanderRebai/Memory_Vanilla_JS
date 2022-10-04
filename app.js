const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];

cardArray.sort(() => 0.5 - Math.random()); //random sorting

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let pickedCards = [];
let pickedCardsIds = [];
let wonCards = [];

function createBoard() {
  let index = 0;
  cardArray.forEach((element) => {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", index++);
    card.addEventListener("click", flipCard);
    gridDisplay.append(card);
  });
}

function checkMatch() {
  console.log("Checking Match", pickedCards, pickedCardsIds, wonCards)
  const cards = document.querySelectorAll("#grid img");
  const optionOne = pickedCardsIds[0];
  const optionTwo = pickedCardsIds[1];

  if (optionOne === optionTwo) {
    cards[optionOne].setAttribute("src", "images/blank.png");
    cards[optionTwo].setAttribute("src", "images/blank.png");
    alert("You have clicked the same image!");
    pickedCards = [];
    pickedCardsIds = [];
  } else if (pickedCards[0] === pickedCards[1]) {
    alert("You found a Match!");
    cards[optionOne].setAttribute("src", "images/white.png");
    cards[optionTwo].setAttribute("src", "images/white.png");
    cards[optionOne].removeEventListener("click", flipCard);
    cards[optionOne].removeEventListener("click", flipCard);
    wonCards.push(pickedCards);
    pickedCards = [];
    pickedCardsIds = [];
  } else {
    cards[optionOne].setAttribute("src", "images/blank.png");
    cards[optionTwo].setAttribute("src", "images/blank.png");
    pickedCards = [];
    pickedCardsIds = [];
    alert("Sorry, Try again!");
  }

  resultDisplay.textContent = wonCards.length;

  if (wonCards.length === cardArray.length/2) {
    resultDisplay.textContent = "Congratulations! You found them All!";
  }
}

function flipCard() {
  let cardId = this.getAttribute("data-id");
  const card = cardArray[cardId];
  pickedCards.push(card.name);
  pickedCardsIds.push(cardId);
  this.setAttribute("src", card.img);
  if (pickedCards.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

createBoard();
