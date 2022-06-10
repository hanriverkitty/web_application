// Particle Systems with Image Textures (Image Texture)
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/pUhv2CA0omA
// https://thecodingtrain.com/learning/nature-of-code/4.4-image-textures.html

// Texture Maker: https://editor.p5js.org/codingtrain/sketches/NS4rB1Yx-
// Image Texture: https://editor.p5js.org/codingtrain/sketches/TTVoNt58T
// Shader (WEBGL): https://editor.p5js.org/codingtrain/sketches/EXZmcc4m_


// Making it look like a torch: wojtekpaszo


let emitter;
let img;
let img1;
let useMouse = true

function preload() {
  img = loadImage('texture32.png');
  img1 = loadImage('a.png');
}
function setup() {
  createCanvas(600, 600);
  noCursor();
  emitter = new Emitter(width / 2, height * 5 / 6);

}

function draw() {
  clear();
  background(0);
  image(img1, 0, 0, 500, 500)
  blendMode(ADD);

  // let force = createVector(0, -0.1);
  // emitter.applyForce(force);

  // let dir = map(mouseX, 0, width, -0.5, 0.5);
  let wind = createVector(random(-1, 1), -1);
  if (useMouse)
    emitter.changePos(mouseX, mouseY)
  // else{
  //   let move = motion();
  //   emitter.changePos(move.x,move.y)
  // }


  emitter.applyForce(wind);

  emitter.emit(1);
  emitter.show();
  emitter.update();
}

function motion() {
  return createVector(sin(frameCount / 40) * width / 6 + width / 2, height * 6 / 7)
}