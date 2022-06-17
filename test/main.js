let texts = 60;
let textx = 150;
let t_color = 255;
function main() {
    if (main_bgm.isPlaying() == false) {
        main_bgm.play();
    }
    image(img_main, 0, 0, 1280, 720);
    textFont(scrollfont);
    textSize(100);
    fill('#ffffff');
    text("Escape Room", 100, 150);
    textSize(texts);
    fill(255, t_color, t_color);
    text("게임시작", textx, 350);



    if (mouseX > 145 && mouseX < 355 && mouseY > 300 && mouseY < 355) {
        if (textx > 120) {
            texts = texts + 1;
            textx = textx - 2;
            t_color = t_color - 30;

        }
    } else {
        if (textx < 145) {
            texts = texts - 1;
            textx = textx + 2;
            t_color = t_color + 30;

        }
    }



}
function mouseClicked() {
    if (stage == 0) {
        if (mouseX > 145 && mouseX < 355 && mouseY > 300 && mouseY < 355) {
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
        }//cabinet
        else if (mouseX > 100 && mouseX < 250 && mouseY > 190 && mouseY < 675) {
            stage = 18;
        }
        //painting
        else if (mouseX > 635 && mouseX < 750 && mouseY > 120 && mouseY < 245) {
            stage = 19;
        }
        //drawer
        else if (mouseX > 935 && mouseX < 1140 && mouseY > 230 && mouseY < 610) {
            stage = 20;
        }
    } else if (stage == 5) {
        if (mouseX > 20 && mouseX < 90) {
            stage = 4;
        } else if (mouseX > 1000 && mouseX < 1220 && mouseY > 130 && mouseY < 580 && locked_sound.isPlaying() == false) {
            locked_sound.play();
        } else if (mouseX > 530 && mouseX < 655 && mouseY > 50 && mouseY < 210) {
            stage = 21;
        } else if (mouseX > 180 && mouseX < 410 && mouseY > 340 && mouseY < 670) {
            stage = 22;
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
        if (mouseX > 930 && mouseX < 1010 && mouseY > 560 && mouseY < 630 && num1 == sentence1.length) {
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
    else if (stage == 18) {
        if (mouseX > 1160 && mouseX < 1240 && mouseY > 600 && mouseY < 680) {
            stage = 4;
        }
        else if (mouseX > 745 && mouseX < 910 && mouseY > 360 && mouseY < 550) {
            takekey = true;
        }
    } else if (stage == 19) {
        if (mouseX > 1160 && mouseX < 1240 && mouseY > 600 && mouseY < 680) {
            stage = 4;
        }
    } else if (stage == 20) {
        if (mouseX > 1160 && mouseX < 1240 && mouseY > 600 && mouseY < 680) {
            stage = 4;
        } else if (drawer_x > 444 && mouseX > 470 && mouseX < 790 && mouseY > 140 && mouseY < 715) {
            stage = 6;
        }
    } else if (stage == 21) {
        if (mouseX > 1160 && mouseX < 1240 && mouseY > 600 && mouseY < 680) {
            stage = 5;
        } else if (mouseX > 440 && mouseX < 815 && mouseY > 180 && mouseY < 600) {
            if (children_bgm.isPlaying() == false) {
                children_bgm.play();
            }
        }
    } else if (stage == 22) {
        if (mouseX > 1160 && mouseX < 1240 && mouseY > 600 && mouseY < 680) {
            stage = 5;
        }
    }
}
function keyPressed() {

    if (keyCode == 32 && takekey == true && spacepress == false) {
        spacepress = true;
    } else if (keyCode == 32 && spacepress == true) {
        spacepress = false;

    } else if (stage == 20 && keyCode == LEFT_ARROW && takekey == true) {
        if (drawermove.isPlaying() == false) {
            drawermove.play();
        }
        else if (drawermove.isPlaying() == true) {
            drawermove.stop();
            drawermove.play();
        }
        drawer_x = drawer_x + 12;

    }
}