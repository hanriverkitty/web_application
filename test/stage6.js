function stage6() {

    clear();
    background(0);
    image(img_stage6, 0, 0, 1280, 720);
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
}
function motion() {
    return createVector(sin(frameCount / 40) * width / 6 + width / 2, height * 6 / 7)
}
