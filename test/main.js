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
        if (mouseX > 930 && mouseX < 1010 && mouseY > 480 && mouseY < 550) {
            stage = 2;
        }
    }

    else if (stage == 2) {
        main_bgm.pause();
    }


}