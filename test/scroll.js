let sentence1 = "2022-05-14 토\n갇힌지 1일째, 누군가 문을 두드리지만 문을 열리지 않는다 이대로 죽는건가......\n\n2022-05-15 일\n갇힌지 2일째, 테이블 위의 고기는 점점 썩어가고,\n물만 나온다 어떻게 해야 나갈 수 있을까\n\n2022-05-16 월\n갇힌지 3일째, 드디어 진짜 문을 찾았다.\n하지만 밖에는 이상한 것이 날 기다리고 있었고, 너무 무서워서 다시 들어왔다\n결국 여기서 죽는건가....\n\n2022-05-17 화\n갇힌지 4일째, 방을 둘러보다 벽에 뭔가가 써있는 것을 발견했다.\n벽을 자세히 보려는 순간 문이 열리는 소리가났다\n여기까지가 내 마지막인가보다..";
let num1 = 0;
function scroll() {
    cursor();
    frameRate(60);
    image(deerhead_c1, 0, 0);
    glass = false;
    noStroke();
    fill(219, 219, 219, 105);
    rect(240, 60, 800, 600, 15);
    fill(255);
    textSize(20);
    textLeading(32);
    text(sentence1.substring(0, num1), 260, 100);
    if (text_bgm.isPlaying() == false) {
        text_bgm.setVolume(0.2);
        text_bgm.play();
    }
    if (num1 < sentence1.length) {
        num1++;
    }
    if (num1 == sentence1.length) {
        text_bgm.stop();
        image(check_img, 940, 560);
        if (mouseX > 930 && mouseX < 1010 && mouseY > 560 && mouseY < 630) {
            cursor('grab');
            image(check_img_r, 940, 560);
        } else {
            cursor();
        }
    }
    if (b_scroll_bgm == false) {
        scroll_bgm.play(2);
        b_scroll_bgm = true;
    }
}