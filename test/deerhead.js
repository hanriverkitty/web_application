function deerhead() {
    cursor();
    image(deerhead_c, 0, 0, 1280, 720);
    glass = false;
    loadPixels();
    //손전등 원크기
    let rad = 300;
    deerhead_c.loadPixels();
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let pos = (x + y * width) * 4;
            let r = deerhead_c.pixels[pos];
            let g = deerhead_c.pixels[pos + 1];
            let b = deerhead_c.pixels[pos + 2];

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

    //scroll
    if (mouseX > 490 && mouseX < 790 && mouseY > 270 && mouseY < 320) {
        noCursor();
        glass = true;
    }
}