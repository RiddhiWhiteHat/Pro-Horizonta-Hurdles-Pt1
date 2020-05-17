class Game {
  constructor(){}
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
        gameState = data.val();
    });
  }
  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    
  }
  play(){
    form.hide();
    Player.getPlayerInfo();
    player.getCarsAtEnd();
    
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(track,0,360,displayWidth*4, displayHeight+500);
      var index = 0;
      var y = 430 ;
      var x = 0;

      for(var plr in allPlayers){
        index = index + 1 ;
        y = y + 180;

        x = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;

        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x, y, 70, 70);
          cars[index - 1].shapeColor = "black";
          camera.position.y = cars[index-1].y;
          camera.position.x = cars[index-1].x;
        }
      }
    }

    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distance -=10;
      player.update();
    }
    if(keyIsDown(LEFT_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }
    if(player.distance <= -4460){
      gameState = 2;
      player.rank += 1;
      Player.updateCarsAtEnd(player.rank);
    }
    drawSprites();
  }
}
  