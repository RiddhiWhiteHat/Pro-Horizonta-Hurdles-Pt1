class End {
    constructor(){
        this.gameEnd = createElement('h2');
    }
    display(){
        this.gameEnd.html("GAME ENDED");
        this.gameEnd.position(displayWidth / 2 -200, displayHeight / 4);
        this.gameEnd.style('font-size', '80px');
        this.gameEnd.style( 'color', 'saddleBrown');
    }
}

