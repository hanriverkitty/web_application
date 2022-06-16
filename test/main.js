let texts = 50;
let textx = 150;
function main() {
    if (main_bgm.isPlaying() == false) {
        main_bgm.play();
    }
    image(img_main, 0, 0, 1280, 720);
    // print(mouseX + " " + mouseY);
    textSize(texts);
    fill('#ffffff');
    text("게임시작", textx, 400);


    if (mouseX > 145 && mouseX < 355 && mouseY > 350 && mouseY < 405) {
        if (textx > 120) {
            texts = texts + 1;
            textx = textx - 2;
        }
    } else {
        if (textx < 145) {
            texts = texts - 1;
            textx = textx + 2;
        }
    }


}
function mouseClicked() {
    if (stage == 0) {
        if (mouseX > 145 && mouseX < 355 && mouseY > 350 && mouseY < 405) {
            stage = 1;
        }
    } else if (stage == 1) {
        if (mouseX > 930 && mouseX < 1010 && mouseY > 480 && mouseY < 550 && num == sentence.length) {
            stage = 2;
        }
    }

    if (stage == 2) {
        main_bgm.pause();
        if (mouseX > 1190 && mouseX < 1260) {
            stage = 3;
        }
        //deer.js
        else if (mouseX > 250 && mouseX < 340 && mouseY > 100 && mouseY < 250) {
            stage = 11;
        }
        //table.js 
        else if (mouseX > 310 && mouseX < 555 && mouseY > 425 && mouseY < 495) {
            stage = 13;
        }
    } else if (stage == 3) {
        if (mouseX > 20 && mouseX < 90) {
            stage = 2;
        } else if (mouseX > 1190 && mouseX < 1260) {
            stage = 4;
        }
        //mirror.js
        else if (mouseX > 710 && mouseX < 785 && mouseY > 40 && mouseY < 110) {
            stage = 14;
        }
        //bath.js
        else if (mouseX > 110 && mouseX < 550 && mouseY > 480 && mouseY < 650) {
            stage = 15;
        }
        //sink.js
        else if (mouseX > 690 && mouseX < 880 && mouseY > 310 && mouseY < 440) {
            stage = 17;
        }
    }
    else if (stage == 4) {
        if (mouseX > 20 && mouseX < 90) {
            stage = 3;
        } else if (mouseX > 1190 && mouseX < 1260) {
            stage = 5;
        }
    } else if (stage == 5) {
        if (mouseX > 20 && mouseX < 90) {
            stage = 4;
        } else if (mouseX > 1000 && mouseX < 1220 && mouseY > 130 && mouseY < 580 && locked_sound.isPlaying() == false) {
            locked_sound.play();
        }
    } else if (stage == 6) {
        if (mouseX > 20 && mouseX < 90) {
            stage = 5;
        }
    } else if (stage == 11) {
        if (mouseX > 490 && mouseX < 790 && mouseY > 270 && mouseY < 320) {
            stage = 12;
        }

    }
    //deer
    else if (stage == 12) {
        if (mouseX > 930 && mouseX < 1010 && mouseY > 560 && mouseY < 630 && num == sentence.length) {
            stage = 2;
        }
    }
    //table
    else if (stage == 13) {
        if (mouseX > 1160 && mouseX < 1240 && mouseY > 600 && mouseY < 680) {
            stage = 2;
        }
    }
    else if (stage == 14) {
        if (mouseX > 1160 && mouseX < 1240 && mouseY > 600 && mouseY < 680) {
            stage = 3;
        }
    }
    else if (stage == 15) {
        if (mouseX > 590 && mouseX < 685 && mouseY > 170 && mouseY < 225) {
            stage = 16;
        } else if (mouseX > 1160 && mouseX < 1240 && mouseY > 600 && mouseY < 680) {
            stage = 3;
        }
    } else if (stage == 16) {
        if (mouseX > 1160 && mouseX < 1240 && mouseY > 600 && mouseY < 680) {
            stage = 3;
        }
    }
    else if (stage == 17) {
        if (mouseX > 1160 && mouseX < 1240 && mouseY > 600 && mouseY < 680) {
            stage = 3;
        }
    }
}