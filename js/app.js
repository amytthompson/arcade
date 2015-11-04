// Enemies our player must avoid
var Enemy = function() {
    //defines enemy image
    this.sprite = 'images/enemy-bug.png';
    //set 500 bugs off the map by 10 spaces
    this.x = Math.floor((Math.random()*500) -10);
    //set bugs to rows 1, 2, or 3
    this.y = Math.floor((Math.random()*3)+2);
    //set speed between 2 and 3
    this.speed = Math.floor((Math.random()*3)*2);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x = this.x + this.speed * dt;
}

    //checkCollisions = function() {
    //for(var i = 0; i < allEnemies.length; i++) { 
    //if 

        //(allEnemies[i].x < player.x + 75 &&
        //allEnemies[i].x + 65 > player.x &&
        //allEnemies[i].y < player.y + 50 &&
        //allEnemies[i].y + 70 > player.y) {
        //console.log('Game Over');
        //} 
    //}
    //};    

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x * 110, this.y * 50);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    //Choose character to start
    this.sprite = 'images/char-pink-girl.png';
    // Assign player's starting location
    this.x = 2;
    this.y = 5;
};

Player.prototype.update = function() {
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite),this.x * 100,this.y * 80);
};
Player.prototype.handleInput = function(allowedKeys) {
    switch (allowedKeys) {
    
    //Player arrow left
    case 'left':
     if (this.x > 0) {
        this.x--;
     }
     break;
    //Player arrow up
    case 'up':
     if (this.y > 0) {
        this.y--;
     }
     break;
    //Player arrow right
    case 'right':
     if (this.x < 4) {
        this.x++;
     }
     break;
    //Player arrow down
    case 'down':
     if (this.y < 5) {
        this.y++;
     }
     break;

    default:
        console.log("Use arrow keys to move around the board");    
}
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
for (var i = 0; i < 500; i++) {
    allEnemies.push(new Enemy());
};


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
