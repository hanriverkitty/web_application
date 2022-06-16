sentence = "dawdwawddawdadawdwwdawdaw";
num = 0;
function scroll() {
    frameRate(20);
    image(deerhead_c1, 0, 0);
    glass = false;
    noStroke();
    fill(219, 219, 219, 105);
    rect(240, 60, 800, 600, 15);
    fill(255);
    textSize(40);
    text(sentence.substring(0, num), 260, 240);
    if (text_bgm.isPlaying() == false) {
        text_bgm.setVolume(0.2);
        text_bgm.play();
    }
    if (num < sentence.length) {
        num++;
    }
    if (num == sentence.length) {
        text_bgm.stop();
        image(check_img, 940, 560);
        if (mouseX > 930 && mouseX < 1010 && mouseY > 560 && mouseY < 630) {
            image(check_img_r, 940, 560);
        }
    }
}