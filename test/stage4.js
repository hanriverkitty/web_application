function stage4() {
    if (b_knock == false) {
        room_bgm.setVolume(0.5);
        knock_bgm.setVolume(1);
        if (knock_ms == false) {
            start = millis();
            knock_ms = true;
        }

        current = millis();
        if (current > 5000 + start) {
            knock_bgm.play();
            b_knock = true;
        }


    }

    room_bgm.setVolume(1);
    image(img_stage4, 0, 0, 1280, 720);
    loadPixels();
    //손전등 원크기
    let rad = 150;
    img_stage4.loadPixels();
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let pos = (x + y * width) * 4;
            let r = img_stage4.pixels[pos];
            let g = img_stage4.pixels[pos + 1];
            let b = img_stage4.pixels[pos + 2];

            let d = dist(x, y, mouseX, mouseY);

            //rad 뒤의 값 조절해서 밝기조정
            let adjustBrightness = map(d, 0, rad, 2, 0);
            r *= adjustBrightness;
            g *= adjustBrightness;
            b *= adjustBrightness;


            r = constrain(r, 0, 255);
            g = constrain(g, 0, 255);
            b = constrain(b, 0, 255);


            pixels[pos] = r;
            pixels[pos + 1] = g;
            pixels[pos + 2] = b;
            pixels[pos + 3] = 255;
        }
    }

    updatePixels();
    if (mouseX > 20 && mouseX < 90) {
        image(left_g, mouseX - 55, mouseY - 24);
    } else if (mouseX > 1190 && mouseX < 1260) {
        image(right_g, mouseX - 55, mouseY - 24);
    }


}