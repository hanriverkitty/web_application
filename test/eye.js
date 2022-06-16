let spacepress = false;
let eyeimg;
function eye() {


    if (spacepress == false) {
        image(eye_img, 0, 0);
        eyeimg = eye_img;
    } else {
        image(eye_b_img, 0, 0);
        eyeimg = eye_b_img;
    }

    glass = false;
    loadPixels();
    //손전등 원크기
    let rad = 300;
    eyeimg.loadPixels();
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let pos = (x + y * width) * 4;
            let r = eyeimg.pixels[pos];
            let g = eyeimg.pixels[pos + 1];
            let b = eyeimg.pixels[pos + 2];

            let d = dist(x, y, mouseX, mouseY);

            //rad 뒤의 값 조절해서 밝기조정


            if (spacepress == true) {
                let adjustBrightness = map(d, 100, rad, 2, 0);
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
    image(check_img, 1160, 600);
    if (mouseX > 1160 && mouseX < 1240 && mouseY > 600 && mouseY < 680) {
        cursor('grab');
        image(check_img_r, 1160, 600);
    } else {
        cursor();
    }
    //let adjustBrightness1 = map(d, 100, rad, 2, 0);
    //b *= adjustBrightness1 + 1
}
