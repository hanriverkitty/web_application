function stage2() {
    frameRate(60);
    //noCursor();
    background(0);
    if (door_playing == false) {
        start = millis();
        door_bgm.play();
        door_playing = true;
    }
    current = millis();
    if (current > start + 2000) {
        if (rosie_playing == false) {
            rosie_bgm.play();
            room_bgm.setVolume(0.3);
            room_bgm.loop();
            rosie_playing = true;
        }
        if (rosie_bgm.isPlaying() == false) {
            room_bgm.setVolume(1);
        }


        image(img_stage2, 0, 0, 1280, 720);
        loadPixels();
        //손전등 원크기
        let rad = 200;
        img_stage2.loadPixels();
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                let pos = (x + y * width) * 4;
                let r = img_stage2.pixels[pos];
                let g = img_stage2.pixels[pos + 1];
                let b = img_stage2.pixels[pos + 2];

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



        if (mouseX > 1190 && mouseX < 1260) {
            image(right_g, mouseX - 55, mouseY - 24);
        }

        //deer head
        if (mouseX > 250 && mouseX < 340 && mouseY > 100 && mouseY < 250) {
            glass = true;
        }
        //table
        else if (mouseX > 310 && mouseX < 555 && mouseY > 425 && mouseY < 495) {
            glass = true;
        } else {
            glass = false;
        }

    }
}


