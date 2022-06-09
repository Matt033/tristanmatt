// this all seems to work when the player code and class definition is in
// sketch.js but not when its in another file.


class Player {
	constructor() {
		let MarioDimensions = {
			width: 34,
			height: 38
		};
		let MovementDictionary = {
			standRight: {
				row: 2, 
				col: 1
			},
			standLeft: {
				row: 1, 
				col: 1
			},
			leftRun: {
				row: 1,
				col: [1, 0, 2]  
			},
			rightRun: {
				row: 2,
				col: [1, 0, 2]
			},
			rightJump: {
				row: 2, 
				col: [3, 4, 5]
			},
			leftJump: {
				row: 1,
				col: [3, 4, 5]
			}
		};
		this.facingRight = true;
		this.isRunning = false;
		this.currentRunIndex = 0;
		this.x = 100;
        this.y = 400;
		this.playerImage = null;
	}
	show() {
		console.log("showing");
		// push();
		image(playerImage, this.x, this.y, this.MarioDimensions[width], this.MarioDimensions[height]);
		// pop();
	}
	move() {
		this.x += 1;
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
					MovementDictionary.rightRun.col[this.currentRunIndex] * MarioDimensions.width,
					MovementDictionary.rightRun.row * MarioDimensions.height,
					MarioDimensions.width,
					MarioDimensions.height
					);
			}		
			if (this.facingRight == false) {
				return image(MarioSpriteImage,
					MovementDictionary.leftRun.col[this.currentRunIndex] * MarioDimensions.width,
					MovementDictionary.rightRun.row * MarioDimensions.height,
					MarioDimensions.width,
					MarioDimensions.height
					);
			}
		}

	}
}
