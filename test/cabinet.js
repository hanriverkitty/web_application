let kk;
function cabinet() {
    glass = false;
    print(mouseX + "  " + mouseY);
    image(cabinet_img, 0, 0);
    image(key_img, 0, 0);
    image(check_img, 1160, 600);
    if (takekey == false) {
        kk = key_img;
    } else {
        kk = cabinet_img;
    }
    loadPixels();
    //손전등 원크기
    let rad = 500;
    kk.loadPixels();
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let pos = (x + y * width) * 4;
            let r = kk.pixels[pos];
            let g = kk.pixels[pos + 1];
            let b = kk.pixels[pos + 2];

            let d = dist(x, y, 640, 360);

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
    image(check_img, 1160, 600);
    if (mouseX > 1160 && mouseX < 1240 && mouseY > 600 && mouseY < 680) {
        cursor('grab');
        image(check_img_r, 1160, 600);
    }
    //key
    else if (mouseX > 745 && mouseX < 910 && mouseY > 360 && mouseY < 550 && takekey == false) {
        cursor('grab');
    }
    else {
        cursor();
    }
}