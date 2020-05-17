var canvas, backgroundImage;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var form, player, game;
var cars, car1, car2, car3, car4;
var track, car1_img, car2_img, car3_img, car4_img;
var end;
var ground1,ground2,ground3,ground4;

function preload(){
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/player1.png");
  car2_img = loadImage("images/player2.png");
  car3_img = loadImage("images/player3.png");
  car4_img = loadImage("images/player4.png");
  back_img = loadImage("images/background.jpg");
 
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight);
  database = firebase.database();
  game = new Game();
  end = new End();
  game.getState();
  game.start();
}
function draw(){
  background(back_img);
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    end.display();
  }
}