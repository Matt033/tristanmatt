// let playerImage = null;
let player = null;
let playerImage = null;
let MarioSpriteImage;
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

function preload() {
    console.log("Preloading");
    MarioSpriteImage = loadImage('./Images/MarioSprite_34x38.png');
}

function setup() {
    // put setup code here
    createCanvas(1200, 950);
    player = new Player();
}
let x = 0;
function draw() {
    // console.log("Drawing");
    // put drawing code here
    background(220);

    // scale(2);
    if (player.facingRight == true) {
        image(MarioSpriteImage, 
            player.x,
            player.y,
            MarioDimensions.width * 2,
            MarioDimensions.height * 2,
            MovementDictionary.rightRun.col[player.currentRunIndex] * MarioDimensions.width,
            MovementDictionary.rightRun.row * MarioDimensions.height,
            MarioDimensions.width,
            MarioDimensions.height
            );
    }		
    else {
        image(MarioSpriteImage,
            player.x,
            player.y,
            MarioDimensions.width * 2,
            MarioDimensions.height * 2,
            MovementDictionary.leftRun.col[player.currentRunIndex] * MarioDimensions.width,
            MovementDictionary.leftRun.row * MarioDimensions.height,
            MarioDimensions.width,
            MarioDimensions.height
            );
    }
    player.Show();
    player.Update();
    // player.move();
    ellipse(mouseX, height / 2, 20, 20);

    // player.Update();
    // image(playerImage, x, 400, 100, 100);


    // push();

    // if (mouseIsPressed) {
    //   fill(0);
    // } else {
    //   fill(255);
    // }
    // ellipse(mouseX, mouseY, 80, 80);
    // pop();
}

function keyPressed() {
    switch(keyCode) {
        case RIGHT_ARROW:
            console.log("right arrow pressed");
            player.facingRight = true;
            player.isRunning = true;
            break;
        case LEFT_ARROW:
            console.log("left arrow pressed");
            player.facingRight = false;
            player.isRunning = true;
            break;
    }
}
function keyReleased() {
    switch(keyCode) {
        case RIGHT_ARROW:
            console.log("right arrow released");
            player.isRunning = false;
            break;
        case LEFT_ARROW:
            console.log("left arrow released");
            player.isRunning = false;
            break;
    }
}

