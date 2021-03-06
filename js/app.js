// Enemies our player must avoid
var Enemy = function() {
  'use strict';
  //defines enemy image
  this.sprite = 'images/enemy-bug.png';
  //assigns enemy start position
  this.x = -1;
  this.y = 3;
  //defines enemy speed
  this.speed = Math.floor((Math.random()*2));
};


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  //if enemy moves off canvas, enemy resets to start
  if (this.x > 5) {
      this.x = -1;
  } else {
      this.x += this.speed * dt;
  }
};

//Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 48);
};

var Player = function() {
  //define player image
  this.sprite = 'images/char-pink-girl.png';
  //assign player starting location
  this.x = 2;
  this.y = 0;
};

Player.prototype.update = function() {
  //collision detection
  this.checkCollisions();

  //or player wins!
  if (this.y >= 5) {
    console.log('You Win!');
    this.reset();
  }
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

  default:
    alert("Use arrow keys to move around the board");
  }
};

Player.prototype.checkCollisions = function() {
  for (var i = 0; i < allEnemies.length; i++) {
    /*add calculation to determine row*/
    if (this.x >= enemy.x + 0 && 
        this.x < enemy.x + 44 &&
        this.y >= enemy.y + 0 &&
        this.y < enemy.y + 44) {
          console.log('Splat!');
          
        }
    }
};

Player.prototype.reset = function() {
  console.log('player reset function');
    this.x = 2;
    this.y = 0;
};

//Instantiate all objects
//Place all enemy objects in an array called allEnemies

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
