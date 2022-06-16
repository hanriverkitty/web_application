let sentence = "얼마전 뉴스에 폐가에 들어갔다가 실종된\n사람에 대한 이야기가 나왔다. 평소에\n귀신은 존재하지 않고, 흉가체험을 좋아했던\n나는 가지 않을 수가 없었다. 그래서 나는\n서둘러 흉가를 향해 발걸음을 옮겼다.";
let num = 0;

function stage1() {
    if (text_bgm.isPlaying() == false) {
        text_bgm.setVolume(0.2);
        text_bgm.play();
    }
    image(img_stage1, 0, 0, 1280, 720);
    noStroke();
    fill(219, 219, 219, 105);
    rect(240, 180, 800, 400, 10);
    frameRate(20);
    fill(255);
    textFont(scrollfont);
    textSize(45);
    text(sentence.substring(0, num), 260, 240);
    if (num < sentence.length) {
        num++;
    }
    if (num == sentence.length) {
        text_bgm.stop();
        image(check_img, 940, 480);
        if (mouseX > 930 && mouseX < 1010 && mouseY > 480 && mouseY < 550) {
            image(check_img_r, 940, 480);
        }
    }

}
