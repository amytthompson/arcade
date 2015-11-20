// Enemies our player must avoid
var Enemy = function() {   
  //defines enemy image
  this.sprite = 'images/enemy-bug.png';
  //assigns enemy start position
  //this.loc();
  this.x = -1;
  this.y = 3;
  //defines enemy speed
  this.speed = Math.floor((Math.random()*2));
};


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

  player.checkCollisions();
    
  if (this.x > 5) {
  // if enemy moves off canvas, resets to start 
      //this.loc();
      this.x = -1;
  } else {
      this.x += this.speed * dt; 
  }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {   
  ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 48);
};

/*Enemy.prototype.loc = function() {
this.x = -1;
this.y = 3;
}*/

var Player = function() {   
  // define player image
  this.sprite = 'images/char-pink-girl.png';
  // assign player starting location
  this.x = 2;
  this.y = 0;
};

Player.prototype.update = function() {
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {    
  ctx.drawImage(Resources.get(this.sprite),this.x * 101, -(this.y * 80) + 400);
};

// defines how player moves around the grid
Player.prototype.handleInput = function(allowedKeys) {
    
  switch (allowedKeys) {
  
  // player arrow left
  case 'left':
   if (this.x > 0) {
      this.x--;
   }
   break;
  // player arrow up
  case 'down':
   if (this.y > 0) {
      this.y--;
   }
   break;
  // player arrow right
  case 'right':
   if (this.x < 4) {
      this.x++;
   }
   break;
  // player arrow down
  case 'up':
   if (this.y < 5) {
      this.y++;
   }
   break;
  case 'win':
  //player wins!
  if (this.y >= 5) {
    console.log('win');
    this.reset();
   }
   break;

  default:
    alert("Use arrow keys to move around the board");    
  }
};

Player.prototype.checkCollisions = function() {

  for (var i = 0; i < allEnemies.length; i++) {
    if (this.x < enemy.x + 50 &&
        this.x + 50 > enemy.x &&
        this.y < enemy.y + 50 &&
        this.y + 50 > enemy.y) {

        console.log('checkCollisions');
        this.reset();
    } 
  }
};  

Player.prototype.reset = function() {
    console.log('player reset function');
      this.x = 2;
      this.y = 0;
}; 

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

var allEnemies = [];
var enemy = function () {   
  for (var i = 0; i < 3; i++) {
  enemy = new Enemy();
  allEnemies.push(enemy);
  }
};
enemy();

// Place the player object in a variable called player
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down'
  };

    player.handleInput(allowedKeys[e.keyCode]);
});
