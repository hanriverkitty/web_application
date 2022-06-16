function stage5() {
    noCursor();
    image(img_stage5, 0, 0, 1280, 720);
    loadPixels();
    //손전등 원크기
    let rad = 150;
    img_stage5.loadPixels();
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let pos = (x + y * width) * 4;
            let r = img_stage5.pixels[pos];
            let g = img_stage5.pixels[pos + 1];
            let b = img_stage5.pixels[pos + 2];

            let d = dist(x, y, mouseX, mouseY);

            //rad 뒤의 값 조절해서 밝기조정
            if (spacepress == true) {
                let adjustBrightness = map(d, 100, rad, 1, 0);
                r *= adjustBrightness;
                g *= adjustBrightness;
                b *= adjustBrightness + 1;

            } else {
                let adjustBrightness = map(d, 0, rad, 2, 0);
                r *= adjustBrightness;
                g *= adjustBrightness;
                b *= adjustBrightness;
            }


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
    print(mouseX + "   " + mouseY);
    if (mouseX > 20 && mouseX < 90) {
        image(left_g, mouseX - 55, mouseY - 24);
    }
    //door
    else if (mouseX > 1000 && mouseX < 1220 && mouseY > 130 && mouseY < 580) {
        glass = true;
    }
    //wheelchair
    else if (mouseX > 180 && mouseX < 410 && mouseY > 340 && mouseY < 670) {
        glass = true;
    }
    //frame
    else if (mouseX > 530 && mouseX < 655 && mouseY > 50 && mouseY < 210) {
        glass = true;
    }
    //table
    else if (mouseX > 510 && mouseX < 890 && mouseY > 415 && mouseY < 485) {
        glass = true;
    }
    else {
        glass = false
    }
}