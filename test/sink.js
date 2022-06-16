function sink() {
    image(sink_img, 0, 0);
    glass = false;
    loadPixels();
    print(mouseX + " " + mouseY);
    //손전등 원크기
    let rad = 300;
    sink_img.loadPixels();
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let pos = (x + y * width) * 4;
            let r = sink_img.pixels[pos];
            let g = sink_img.pixels[pos + 1];
            let b = sink_img.pixels[pos + 2];

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
    } else {
        cursor();
    }
}