function stage4() {
    noCursor();
    if (b_knock == false) {
        room_bgm.setVolume(0.5);
        if (knock_ms == false) {
            start = millis();
            knock_ms = true;
        }

        current = millis();
        if (current > 5000 + start) {
            knock_bgm.setVolume(1);
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
    //painting
    else if (mouseX > 635 && mouseX < 750 && mouseY > 120 && mouseY < 245) {
        glass = true;
    }
    //drawer
    else if (mouseX > 935 && mouseX < 1140 && mouseY > 230 && mouseY < 560) {
        glass = true;
    }
    //cabinet
    else if (mouseX > 100 && mouseX < 250 && mouseY > 190 && mouseY < 675) {
        glass = true;
    }
    //doll
    else if (mouseX > 600 && mouseX < 850 && mouseY > 620 && mouseY < 685) {
        glass = true;
    }
    //knife
    else if (mouseX > 380 && mouseX < 540 && mouseY > 610 && mouseY < 650) {
        glass = true;
    }
    else {
        glass = false;
    }


}