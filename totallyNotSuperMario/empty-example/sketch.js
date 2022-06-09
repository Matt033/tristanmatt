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
    // translate(0,50);
    image(MarioSpriteImage,
        player.x,
        player.y,
        MarioDimensions.width,
        MarioDimensions.height,
        MovementDictionary.leftRun.col[player.currentRunIndex] * MarioDimensions.width,
        MovementDictionary.rightRun.row * MarioDimensions.height,
        MarioDimensions.width,
        MarioDimensions.height
        );
    // image(MarioSpriteImage, 100, 100);

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
            player.facingRight = true;
            player.isRunning = true;
        case LEFT_ARROW:
            player.facingRight = false;
            player.isRunning = true;
    }
}
function keyReleased() {
    switch(keyCode) {
        case RIGHT_ARROW:
            player.isRunning = false;
        case LEFT_ARROW:
            player.isRunning = false;
    }
}


// class Player {
//     constructor() {
//         this.hitBoxWidth = 100;
//         this.hitBoxHeight = 100;
//         this.x = 100;
//         this.y = 400;
//     }
//     show() {
//         console.log("showing");
//         // push();
//         image(playerImage, this.x, this.y, this.hitBoxHeight, this.hitBoxWidth);
//         // pop();
//     }
//     move() {
//         this.x += 1;
//     }
// }