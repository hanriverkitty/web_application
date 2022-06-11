function stage6() {
    glass = false;

    room_bgm.pause();
    clear();
    image(img_stage6, 0, 0, 1280, 720);
    blendMode(ADD);
    //print(mouseX + "   " + mouseY);
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
    if (mouseX < 1130 && mouseX > 1110 && mouseY < 230 && mouseY > 210) {
        if (is_emitter1 == false) {
            start = millis();
            is_emitter1 = true;
        }
        current = millis();
    }

    if (current > 1000 + start && torch_on1 == true) {
        print("fire")
        emitter1.changePos(1120, 220);
        emitter1.applyForce(wind);
        emitter1.emit(1);
        emitter1.show();
        emitter1.update();
        if (torch_on1 == true) {
            start_torch1 = millis();
        }
        current_torch1 = millis();
        torch_random = random()
    }



    emitter.applyForce(wind);

    emitter.emit(1);
    emitter.show();
    emitter.update();


    imageMode(CENTER);
    if (1280 - x > 0 && 720 - y > 0) {
        image(img_ghost, 640, 360, 80 + x, 40 + y);
        x = x + 50 * 2;
        y = y + 50;
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
    imageMode(CORNER);
    if (final_bgm.isPlaying() == false) {
        final_bgm.loop();
    }




}
function motion() {
    return createVector(sin(frameCount / 40) * width / 6 + width / 2, height * 6 / 7)
}
