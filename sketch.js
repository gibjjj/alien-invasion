let boy;
let bImg;
let aImg;
let eImg;
let aliens = [];

function preload() {
  bImg = loadImage("boy.png");
  aImg = loadImage("alien.png");
  eImg = loadImage("enviornment.jpg");
}

function setup() {
  createCanvas(600, 450);
  boy = new Boy();
}

function keyPressed() {
  if (key == " ") {
    boy.jump();
  }
}

function draw() {
  if (random(1) < 0.005) {
    aliens.push(new Alien());
  }

  

  background(eImg);
  boy.show();
  boy.move();
 
  for (let a of aliens) {
    a.move();
    a.show();
  if (boy.hits(a)) {
    console.log('game over');
    noLoop();
  }
  }

}
