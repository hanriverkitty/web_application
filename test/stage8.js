let num2 = 0;
let sentence2 = "역시 이번에도 귀신은 보지 못했다.\n어떤 흉가를 가봐도 귀신은 없는 것 같다.\n다른 흉가에서는 귀신을 볼 수 있기를....";
function stage8() {
    blendMode(BLEND);
    colorMode(RGB);
    image(img_stage1, 0, 0, 1280, 720);
    noStroke();
    fill(219, 219, 219, 105);
    rect(240, 180, 800, 400, 10);
    frameRate(20);
    fill(255);
    textFont(scrollfont);
    textSize(45);
    text(sentence2.substring(0, num2), 260, 240);
    if (num2 < sentence2.length) {
        num2++;
    }
    if (num2 == sentence2.length) {
        text_bgm.stop();


    }
}