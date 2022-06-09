let sentence = "A rose is a rose is a rose\nA rose is a rose is a rose\nA rose is a rose is a rose\nA rose is a rose is a rose";
let num = 0;

function stage1() {
    if (text_bgm.isPlaying() == false) {
        text_bgm.setVolume(0.2);
        text_bgm.play();
    }
    image(img_stage1, 0, 0, 1280, 720);
    noStroke();
    fill(219, 219, 219, 105);
    print(mouseX + " " + mouseY);
    rect(240, 180, 800, 400, 10);
    frameRate(20);
    fill(255);
    textSize(40);
    text(sentence.substring(0, num), 260, 240);
    if (num < sentence.length) {
        num++;
    }
    if (num == sentence.length) {
        text_bgm.pause();
        image(check_img, 940, 480);
        if (mouseX > 930 && mouseX < 1010 && mouseY > 480 && mouseY < 550) {
            image(check_img_r, 940, 480);
        }
    }

}
