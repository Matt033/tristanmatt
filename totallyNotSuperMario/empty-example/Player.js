// this all seems to work when the player code and class definition is in
// sketch.js but not when its in another file.



class Player {
	constructor() {
		this.facingRight = true;
		this.isRunning = false;
		this.currentRunIndex = 0;
		this.x = 300;
        this.y = 400;
		this.playerImage = null;
	}
	Show() {
		// console.log("showing" + MarioDimensions.width);
		
		// push();
		this.getImageToUse();
		// image(playerImage, this.x, this.y, MarioDimensions.width, MarioDimensions.height);
		// pop();
	}
	Update() {
		if (this.isRunning == true) {
			if (this.facingRight == true) {
				this.moveRight();	
			}
			else {
				this.moveLeft();
			}
		}
		else {
			player.currentRunIndex = 0;
		}
	}
	moveRight() {
		console.log(this.x);
		this.x += 5;
		console.log(this.x);
	}
	moveLeft() {
		console.log(this.x);
		this.x -= 5;
		console.log(this.x);
	}

	preload(){
		playerImage = loadImage('./Images/MarioSprite_34x38.png');
	}
	
	// the sprite sheet is only one sheet so you have to define the 
	// images in terms of where their top left corner is and how far 
	// to extend from that to the right and down.
	getImageToUse() {
		if (this.isRunning == true) {
			this.currentRunIndex += 1;
			if (this.currentRunIndex >= 3) {
				this.currentRunIndex = 0;
			}
			if (this.facingRight == true) {
				return image(MarioSpriteImage, 
					this.x,
					this.y,
					MarioDimensions.width,
					MarioDimensions.height,
					MovementDictionary.rightRun.col[this.currentRunIndex] * MarioDimensions.width,
					MovementDictionary.rightRun.row * MarioDimensions.height,
					MarioDimensions.width,
					MarioDimensions.height
					);
			}		
			if (this.facingRight == false) {
				return image(MarioSpriteImage,
					this.x,
					this.y,
					MarioDimensions.width,
					MarioDimensions.height,
					MovementDictionary.leftRun.col[this.currentRunIndex] * MarioDimensions.width,
					MovementDictionary.rightRun.row * MarioDimensions.height,
					MarioDimensions.width,
					MarioDimensions.height
					);
			}
		}

	}
}
