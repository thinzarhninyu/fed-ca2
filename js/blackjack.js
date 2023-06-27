// 'use strict';

let bj_firstCard = Math.floor((Math.random()*13))+1;
let bj_secondCard = Math.floor((Math.random()*13))+1;
let sum = bj_firstCard + bj_secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let bj_cards = [bj_firstCard,bj_secondCard];
let prize = 0;

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el")

function startGame(){
    window.alert("The game has started!")
    window.alert("Generating the first two cards...")
    renderGame();
}

function renderGame(){
    document.querySelector('.startBtn').disabled = true;
    let s = "";
    for(i=0;i<bj_cards.length;i++){
        s+=bj_cards[i]+" ";
    }
    cardsEl.textContent = "Cards: " + s;
    sumEl.textContent = "Sum: " + sum;
    if(sum<21){
        message = "Do you want to draw a new card?"
    }
    else if(sum===21){
        hasBlackjack = true;
        message = "Woohoo! You've got Blackjack! Congrats!"
        document.querySelector('.newBtn').disabled = true;
        document.querySelector('.blackjack').style.backgroundColor = "#42f5b0";
    }
    else {
        isAlive = false;
        message = "Oops.. you're out of the game!"
        document.querySelector('.newBtn').disabled = true;
        document.querySelector('.blackjack').style.backgroundImage = "url('https://ak.picdn.net/shutterstock/videos/26123588/thumb/9.jpg')"
        document.querySelector('.blackjack').style.backgroundSize = "100% 100%";
        
        setTimeout(gameOver(),10000)
    }
    messageEl.textContent = message;
}

function gameOver(){
    document.querySelector(".hide-game-over").style.visibility = "hidden";
    document.querySelector('.blackjack-intro').textContent = message;
    document.querySelector('.blackjack-intro').style.color = "white";
}

function newCard(){
    if(isAlive){
        window.alert("Drawing new card...");
        let card = Math.floor((Math.random()*13))+1;
        if(card==1){
            cardSymbol="A";
        }
        else if(card==11){
            cardSymbol="J"
        }
        else if(card==12){
            cardSymbol="Q"
        }
        else if(card==13){
            cardSymbol="K"
        }
        else{
            cardSymbol = card;
        }
        if(cardSymbol=="J" || cardSymbol=="Q" || cardSymbol=="K"){
            card = 10;
        }
        sum+=card;
        bj_cards.push(cardSymbol);
        renderGame();
    }
    else{
        window.alert("You are out of the game!");
        document.getElementById("newcard-btn").style.backgroundColor = "grey"
    }
}

function restartGame(){
    window.confirm("You will be given a new game after the window is refreshed!")
    location.reload();
}