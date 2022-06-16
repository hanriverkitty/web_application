function stage6() {
    frameRate(20);
    glass = false;
    noCursor();
    room_bgm.pause();
    clear();
    if (torch_on1 == false && torch_count == 0) {
        stage = 7;
    } else if (torch_count == 0) {
        image(img_stage6, 0, 0, 1280, 720);
    } else if (torch_count == 1) {
        image(img_stage6_1, 0, 0, 1280, 720);
    } else if (torch_count == 2) {
        image(img_stage6_2, 0, 0, 1280, 720);
    } else if (torch_count == 3) {
        image(img_stage6_3, 0, 0, 1280, 720);
    } else if (torch_count == 4) {
        image(img_stage6_4, 0, 0, 1280, 720);
    } else if (torch_count == 5) {
        image(img_stage6_5, 0, 0, 1280, 720);
    } else if (torch_count == 6) {
        image(img_stage6_6, 0, 0, 1280, 720);
    }
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

    emitter.emit(1, 48);
    emitter.show();
    emitter.update();

    //torch1
    if (mouseX < 1180 && mouseX > 1060 && mouseY < 280 && mouseY > 160) {
        if (is_emitter1 == false) {
            start_torch1 = millis();
            is_emitter1 = true;
            torch_on1 = true;

        }
        current_torch1 = millis();

    }

    if (current_torch1 > 1000 + start_torch1 && torch_on1 == true) {


        emitter1.changePos(1120, 220);
        emitter1.applyForce(wind);
        emitter1.emit(1, 48);
        emitter1.show();
        emitter1.update();
        if (take_torch1_millis == true) {
            start_Ontorch1 = millis();
            torch1_random = random(random_num);
            take_torch1_millis = false;
            torch_count++;
        }
        current_Ontorch1 = millis();
        if (current_Ontorch1 > start_Ontorch1 + torch1_random) {
            torch_on1 = false;
            is_emitter1 = false;
            take_torch1_millis = true;
            torch_count--;
        }
    }

    //torch2
    if (mouseX < 985 && mouseX > 895 && mouseY < 345 && mouseY > 255) {

        if (is_emitter2 == false) {
            start_torch2 = millis();
            is_emitter2 = true;
            torch_on2 = true;

        }
        current_torch2 = millis();

    }

    if (current_torch2 > 1000 + start_torch2 && torch_on2 == true) {

        emitter2.changePos(940, 300);
        emitter2.applyForce(wind);
        emitter2.emit(1, 32);
        emitter2.show();
        emitter2.update();
        if (take_torch2_millis == true) {
            start_Ontorch2 = millis();
            torch2_random = random(random_num);
            take_torch2_millis = false;
            torch_count++;
        }
        current_Ontorch2 = millis();
        if (current_Ontorch2 > start_Ontorch2 + torch2_random) {
            torch_on2 = false;
            is_emitter2 = false;
            take_torch2_millis = true;
            torch_count--;
        }
    }

    //torch3
    if (mouseX < 800 && mouseX > 740 && mouseY < 380 && mouseY > 320) {

        if (is_emitter3 == false) {
            start_torch3 = millis();
            is_emitter3 = true;
            torch_on3 = true;

        }
        current_torch3 = millis();

    }

    if (current_torch3 > 1000 + start_torch3 && torch_on3 == true) {

        emitter3.changePos(770, 350);
        emitter3.applyForce(wind);
        emitter3.emit(1, 16);
        emitter3.show();
        emitter3.update();
        if (take_torch3_millis == true) {
            start_Ontorch3 = millis();
            torch3_random = random(random_num);
            take_torch3_millis = false;
            torch_count++;
        }
        current_Ontorch3 = millis();
        if (current_Ontorch3 > start_Ontorch3 + torch3_random) {
            torch_on3 = false;
            is_emitter3 = false;
            take_torch3_millis = true;
            torch_count--;
        }
    }
    //torch4
    if (mouseX < 540 && mouseX > 480 && mouseY < 380 && mouseY > 320) {

        if (is_emitter4 == false) {
            start_torch4 = millis();
            is_emitter4 = true;
            torch_on4 = true;

        }
        current_torch4 = millis();

    }

    if (current_torch4 > 1000 + start_torch4 && torch_on4 == true) {

        emitter4.changePos(510, 350);
        emitter4.applyForce(wind);
        emitter4.emit(1, 16);
        emitter4.show();
        emitter4.update();
        if (take_torch4_millis == true) {
            start_Ontorch4 = millis();
            torch4_random = random(random_num);
            take_torch4_millis = false;
            torch_count++;
        }
        current_Ontorch4 = millis();
        if (current_Ontorch4 > start_Ontorch4 + torch4_random) {
            torch_on4 = false;
            is_emitter4 = false;
            take_torch4_millis = true;
            torch_count--;
        }
    }
    //torch5
    if (mouseX < 375 && mouseX > 295 && mouseY < 345 && mouseY > 255) {

        if (is_emitter5 == false) {
            start_torch5 = millis();
            is_emitter5 = true;
            torch_on5 = true;

        }
        current_torch5 = millis();

    }

    if (current_torch5 > 1000 + start_torch5 && torch_on5 == true) {

        emitter5.changePos(335, 300);
        emitter5.applyForce(wind);
        emitter5.emit(1, 32);
        emitter5.show();
        emitter5.update();
        if (take_torch5_millis == true) {
            start_Ontorch5 = millis();
            torch5_random = random(random_num);
            take_torch5_millis = false;
            torch_count++;
        }
        current_Ontorch5 = millis();
        if (current_Ontorch5 > start_Ontorch5 + torch5_random) {
            torch_on5 = false;
            is_emitter5 = false;
            take_torch5_millis = true;
            torch_count--;
        }
    }
    //torch6
    if (mouseX < 210 && mouseX > 90 && mouseY < 280 && mouseY > 160) {
        if (is_emitter6 == false) {
            start_torch6 = millis();
            is_emitter6 = true;
            torch_on6 = true;

        }
        current_torch6 = millis();

    }

    if (current_torch6 > 1000 + start_torch6 && torch_on6 == true) {

        emitter6.changePos(155, 220);
        emitter6.applyForce(wind);
        emitter6.emit(1, 48);
        emitter6.show();
        emitter6.update();
        if (take_torch6_millis == true) {
            start_Ontorch6 = millis();
            torch6_random = random(random_num);
            take_torch6_millis = false;
            torch_count++;
        }
        current_Ontorch6 = millis();
        if (current_Ontorch6 > start_Ontorch6 + torch6_random) {
            torch_on6 = false;
            is_emitter6 = false;
            take_torch6_millis = true;
            torch_count--;
        }
    }

    if (torch_on1 == true && torch_on2 == true && torch_on3 == true && torch_on4 == true && torch_on5 == true && torch_on6 == true) {
        if (current_Ontorch6 < start_Ontorch6 + torch6_random - 1000 && current_Ontorch5 < start_Ontorch5 + torch5_random - 1000 && current_Ontorch4 < start_Ontorch4 + torch4_random - 1000 && current_Ontorch3 < start_Ontorch3 + torch3_random - 1000 && current_Ontorch2 < start_Ontorch2 + torch2_random - 1000 && current_Ontorch1 < start_Ontorch1 + torch1_random - 1000) {
            stage = 8;
        }
    }
    //ellipse(1120, 220, 60);
    //ellipse(940, 300, 45);
    //ellipse(770, 350, 30);
    //ellipse(510, 350, 30);
    //ellipse(330,300,45);
    //ellipse(150,220,60);






    // imageMode(CENTER);
    // if (1280 - x > 0 && 720 - y > 0) {
    //     image(img_ghost, 640, 360, 80 + x, 40 + y);
    //     x = x + 50 * 2;
    //     y = y + 50;
    // }
    // else {
    //     image(img_ghost, 640, 360, 80 + x, 40 + y);
    //     colorMode(RGB);

    //     if (blood < 255) {
    //         fill(blood, 0, 0);
    //         rect(0, 0, 1280, 720);
    //         blood = blood + 10;
    //     }
    //     else {
    //         color(255, 0, 0);
    //         rect(0, 0, 1280, 720);
    //     }
    // }
    // imageMode(CORNER);
    if (final_bgm.isPlaying() == false) {
        final_bgm.loop();
    }




}
function motion() {
    return createVector(sin(frameCount / 40) * width / 6 + width / 2, height * 6 / 7)
}
