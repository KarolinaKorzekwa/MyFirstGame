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
    //ponizej "board" nie jest nazwa id, tylko dowolnie nadaną
 this.board = document.querySelectorAll('section#board div');
 this.furry = new Furry();
 this.coin = new Coin();
 this.score = 0;
 //6 obliczanie pozycji
    var self = this;
    this.startGame = function(){
        this.idSetInterval= setInterval(function () {
            self.moveFurry();
            },250);
        };
        //czyszczenie widoku
    this.hideVisibleFurry = function () {
        document.querySelector('.furry').classList.remove("furry")
    };
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
     this.hideVisibleFurry();
     if(this.furry.direction === "right") {
         this.furry.x = this.furry.x + 1;
     } else if ( this.furry.direction === "left") {
         this.furry.x = this.furry.x - 1;
     } else if (this.furry.direction === "up") {
         this.furry.y = this.furry.y - 1;
     } else if (this.furry.direction === "down") {
         this.furry.y = this.furry.y + 1;
     }
     this.showFurry();
     this.checkCoinCollision();
     this.gameOver();
    };
 //zad 8

    // var self = this;
    // this.startGame = function(){
    //  this.idSetInterval= setInterval(function () {
    //      self.moveFurry()
    //  },250);
    //  };
 // obsluga klawiatury/inny sposob

    this.furryDirection = function (event) {
    if (event.which===37){
        this.furry.direction="left";
        } else if (event.which===39){
        this.furry.direction="right";
    } else if (event.which===38) {
        this.furry.direction="up";
    } else if (event.which===40){
        this.furry.direction="down";
    }
    };
    document.addEventListener('keydown', function(event){
        self.furryDirection(event);
    });
    this.checkCoinCollision = function () {
    if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {
        document.querySelector('.coin').classList.remove('coin');
        var score = document.querySelector('#score div strong');
        //parseInt przerabia stringa na liczbe
        score.textContent=parseInt(score.textContent)+1;
        //textContent - nie innerText (sprawdzic)
        this.coin = new Coin();
        this.showCoin();
}
    };
    this.gameOver = function () {
    if (this.furry.x < 0 || this.furry.x >9 ||this.furry.y<0 || this.furry.y >9){
    clearInterval(this.idSetInterval);
    var over = document.getElementById('over');
    over.classList.remove('invisible');
    var score = document.querySelector('.endScore');
    var strong = document.querySelector('strong');
    console.log('gameOver');
    }
    }
}
//zad7
var newGame = new Game();
newGame.showFurry();
newGame.showCoin();

//odpalam metode startGame na obiekcie newGame
newGame.startGame();








