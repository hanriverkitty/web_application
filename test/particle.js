// Particle Systems with Image Textures (Image Texture)
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/pUhv2CA0omA
// https://thecodingtrain.com/learning/nature-of-code/4.4-image-textures.html

// Texture Maker: https://editor.p5js.org/codingtrain/sketches/NS4rB1Yx-
// Image Texture: https://editor.p5js.org/codingtrain/sketches/TTVoNt58T
// Shader (WEBGL): https://editor.p5js.org/codingtrain/sketches/EXZmcc4m_

class Particle {
  constructor(x, y, size1) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(0.5, 2));
    this.acc = createVector(0, 0);
    this.size = size1;
    this.lifetime = 255;
  }

  finished() {
    return this.lifetime < 0;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);

    this.lifetime -= 7;
  }

  setColor() {
    let H;
    // H = random(0,this.lifetime)
    H = random((this.lifetime / 255) ** 20, 30)
    // H = random(0,30)

    let S = (255 - this.lifetime) * 10
    let B = this.lifetime * 7

    colorMode(HSB, 255);
    tint(H, S, B, this.lifetime);
    noStroke()
  }

  getSize() {
    let size;
    size = this.size * 2;
    return size
  }

  show() {
    this.setColor();
    image(torch_texture, this.pos.x - this.size / 2, this.pos.y - this.size / 2, this.getSize() / 2, this.getSize() / 2);
    // ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}
