// 4 furry & coin

function Furry() {
    this.x = 0;
    this.y = 0;
    this.direction = "right";
}

// new Furry();

function Coin() {
    this.x = Math.floor(Math.random() * 10);
    this.y = Math.floor(Math.random() * 10);
}

// new Coin();


// 5 konstruktor Game

function Game() {
    //ponizej board nie jest nazwa id, tylko dowolnie nadaną
 this.board = document.querySelectorAll('section #board div');
 this.furry = new Furry();
 this.coin = new Coin();
 this.score = 0;
 //6 obliczanie pozycji
 this.index = function(x,y) {
     return x + (y * 10);
 };
 this.showFurry = function () {
     this.board[ this.index(this.furry.x,this.furry.y) ].classList.add('furry');
 };
 this.showCoin = function () {
     this.board[ this.index(this.coin.x,this.coin.y) ].classList.add("coin");
 };
 this.moveFurry = function () {
     if(this.furry.direction === "right") {
         this.furry.x = this.furry.x + 1;
     } else if ( this.furry.direction === "left") {
         this.furry.x = this.furry.x - 1;
     } else if (this.furry.direction === "bottom") {
         this.furry.y = this.furry.y + 1;
     } else if (this.furry.direction === "down") {
         this.furry.y = this.furry.y - 1;
     }

 };
 //czyszczenie widoku
    this.hideVisibleFurry = function () {
        document.querySelector('.furry').classList.remove('furry')
    };

 //zad 8

    var self = this;
 this.startGame = function(){
     this.idSetInterval= setInterval(function () {
         self.moveFurry()
     },250);
 }
this.furryDirection = function (event) {
    
}
 
}
//zad7
var newGame = new Game();
newGame.showFurry();
newGame.showCoin();

console.log('domi');


//


