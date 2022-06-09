// let playerImage = null;
let player = null;
let playerImage = null;
let MarioSpriteImage;


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
    player.show();
    player.move();
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