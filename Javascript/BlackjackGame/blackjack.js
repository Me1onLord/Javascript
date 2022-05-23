let hasBlackJack = false;
let isAlive = true;
let message = "";


min = Math.ceil(1);
max = Math.floor(13);

let player = {
    name: "Per",
    chips: 145
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $ " + player.chips;

function getRandomCard() {
    let randomNumber = Math.floor(Math.random()*(max-min)+min);
    if (randomNumber > 10) {
        randomNumber = 10;
    } else if (randomNumber === 1) {
        randomNumber = 11;
    } else {
        randomNumber = randomNumber;
    }
    return randomNumber;
}

let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [];
let sum = 0;
console.log(sum);

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    renderGame();
}

function renderGame() {
    
    if (sum <= 20) {
        message = "Do you want to draw a new card ? 😋";
        isAlive = true;
    } else if (sum === 21) {
        message = "Wohoo You've got Blackjack! 😎";
        hasBlackJack = true;
    } else {
        message = "You're out of the game! 🤦‍♂️";
        isAlive = false;
    }
    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;
    cardEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i += 1 ) {
        cardEl.textContent += cards[i] + " ";
    }
     
}

function newCard() {
    if ( isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        cards.push(card);
        sum += card;
        renderGame();
    }
}


