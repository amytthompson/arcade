// Enemies our player must avoid
var Enemy = function() {
   
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
    
    this.x += this.speed * dt; 
    
    if (this.x > 5) {
    //if enemy moves off canvas, resets to start 
        this.x = -1;
    }
};

Enemy.prototype.checkCollisions = function() {

    for (var i = 0; i < allEnemies.length; i++) {
        if (player.x < this.x + 90 &&
           player.x + 90 > this.x &&
           player.y < this.y + 80 &&
           80 + player.y > this.y) {
        // testing checkCollisions
            console.log(player.x, player.y);
            console.log(enemy.x, enemy.y);
      }
    }
};  


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 50);
};

var Player = function() {
    
    //define player image
    this.sprite = 'images/char-pink-girl.png';
    // assign player starting location
    this.x = 2;
    this.y = 5;
};

Player.prototype.update = function() {

  enemy.checkCollisions();

    if (enemy.checkCollisions() === true) {
        console.log('Splat!');
    }
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    
    ctx.drawImage(Resources.get(this.sprite),this.x * 101,this.y * 83);
};

//defines how player moves around the grid
Player.prototype.handleInput = function(allowedKeys) {
    
    switch (allowedKeys) {
    
    //player arrow left
    case 'left':
     if (this.x > 0) {
        this.x--;
     }
     break;
    //player arrow up
    case 'up':
     if (this.y > 0) {
        this.y--;
     }
     break;
    //player arrow right
    case 'right':
     if (this.x < 4) {
        this.x++;
     }
     break;
    //player arrow down
    case 'down':
     if (this.y < 5) {
        this.y++;
     }
     break;
    //player wins
    case 'win':
     if (this.y === 0) {
        this.reset();
     }
     break;

    default:
        alert("Use arrow keys to move around the board");    
    }
};

Player.prototype.reset = function() {
  console.log('You Win!');
  this.x = 2;
  this.y = 5;
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
