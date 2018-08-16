// furry & coin

function Furry() {
    this.x = 0;
    this.y = 0;
    this.direction = "right";
};

Furry();

function Coin() {
    this.x = Math.floor(Math.random() * 10);
    this.y = Math.floor(Math.random() * 10);
};

Coin();

// konstruktor Game

function Game() {
    //ponizej board nie jest nazwa id, tylko dowolnie nadaną
 this.board = querySelectorAll('section#board div');
 this.furry = new Furry();
 this.coin = new Coin();


}

console.log('karo');