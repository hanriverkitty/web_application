function stage6() {
    glass = false;

    room_bgm.pause();
    clear();
    image(img_stage6, 0, 0, 1280, 720);
    // loadPixels();
    // //손전등 원크기
    // let rad = 120;
    // img_stage6.loadPixels();
    // for (let y = 0; y < height; y++) {
    //     for (let x = 0; x < width; x++) {
    //         let pos = (x + y * width) * 4;
    //         let r = img_stage6.pixels[pos];
    //         let g = img_stage6.pixels[pos + 1];
    //         let b = img_stage6.pixels[pos + 2];

    //         let d = dist(x, y, mouseX, mouseY);

    //         //rad 뒤의 값 조절해서 밝기조정
    //         let adjustBrightness = map(d, 0, rad, 2, 0);
    //         r *= adjustBrightness;
    //         g *= adjustBrightness;
    //         b *= adjustBrightness;


    //         r = constrain(r, 0, 255);
    //         g = constrain(g, 0, 255);
    //         b = constrain(b, 0, 255);


    //         pixels[pos] = r;
    //         pixels[pos + 1] = g;
    //         pixels[pos + 2] = b;
    //         pixels[pos + 3] = 255;
    //     }
    // }
    // updatePixels();
    blendMode(ADD);

    // let force = createVector(0, -0.1);
    // emitter.applyForce(force);

    // let dir = map(mouseX, 0, width, -0.5, 0.5);
    let wind = createVector(random(-0.4, 0.4), -0.3);
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
    imageMode(CENTER);
    if (1280 - x > 0 && 720 - y > 0) {
        image(img_ghost, 640, 360, 80 + x, 40 + y);
        x = x + 30 * 2;
        y = y + 30;
        print(x + "  " + y)
    }
    else {
        image(img_ghost, 640, 360, 80 + x, 40 + y);
        colorMode(RGB);

        if (blood < 255) {
            fill(blood, 0, 0);
            rect(0, 0, 1280, 720);
            blood = blood + 10;
        }
        else {
            color(255, 0, 0);
            rect(0, 0, 1280, 720);
        }
    }

    imageMode(CORNER)
    if (final_bgm.isPlaying() == false) {
        final_bgm.loop();
    }




}
function motion() {
    return createVector(sin(frameCount / 40) * width / 6 + width / 2, height * 6 / 7)
}
