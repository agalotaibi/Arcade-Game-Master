// Enemies our player must avoid
// This Class contain all the Enemy Variables
class Enemy {
	constructor(x, y, speed) {
		// Variables applied to each of our instances go here,
		// we've provided one for you to get started
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.speed = (Math.random() + 1) * this.speed * 150;


		// The image/sprite for our enemies, this uses
		// a helper we've provided to easily load images
		this.sprite = 'images/enemy-bug.png';
	}
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
	// You should multiply any movement by the dt parameter
	// which will ensure the game runs at the same speed for
	// all computers.
	if (this.x < 500) {
		this.x += this.speed * (dt);
	}
	else {
		this.x = -300;
	}
	// Check the Collusion between the Enemy and the Player
	if (player.x <= this.x + 70 &&
        player.x + 30 > this.x &&
        player.y <= this.y + 20 &&
        40 + player.y >= this.y) {
        player.x = 200;
        player.y = 500;}

};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now write your own player class
// This Class contain all the Player Variables
class Player {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.speed = 1;
		//this.speed = (Math.random() + 1) * this.speed * 200;
		this.sprite = 'images/char-boy.png';
	}
};
// Prevent the player to go off the screen
Player.prototype.update = function(dt) {
	if (this.y > 300) {
		this.y = 300;
	}
	if (this.x > 400) {
		this.x = 400;
	}
	if (this.x < 0) {
		this.x = 0;
	}
	if (this.y < 0) {
		this.x = 200;
        this.y = 500;
	}
 };

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);}

// This function responsible for the movement of the player with the arrow
Player.prototype.handleInput = function(movement) {
    switch (movement) {
        case 'left':
		case this.x >= 100:
            this.x = (this.x - 100);
            break;
        case 'up':
		case this.y >= 100:
            this.y = (this.y - 80);
            break;
        case 'right':
		case this.x <= 400:
            this.x = (this.x + 100);
            break;
        case 'down':
		case this.y <= 50:
            this.y = (this.y + 50);
            break;
        }
};


// This class requires an update(), render() and
// a handleInput() method.
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// Initial new Enemies
const allEnemies = [
	new Enemy(-50, 50, 1.5),
	new Enemy(200, 130, 1),
	new Enemy(400, 220, 2)
];
// Initial new Player
const player = new Player(200, 500, 1);

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
