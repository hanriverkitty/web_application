let x_size = 354;
let y_size = 180;
let b_waterdrink = false;
function bathwater() {
    image(bathwater_img, 0, 0)
    imageMode(CENTER);
    image(water, 640, 380, x_size, y_size);
    if (x_size < 610 && y_size < 310) {
        if (waterfill.isPlaying() == false) {
            waterfill.play();
        }
        x_size = x_size + 1;
        y_size = y_size + 1;
    } else {
        waterfill.pause();
        if (b_waterdrink == false) {
            waterdrink.play();
            b_waterdrink = true;
        }
    }

    imageMode(CORNER);
    image(check_img, 1160, 600);
    if (mouseX > 1160 && mouseX < 1240 && mouseY > 600 && mouseY < 680) {
        cursor('grab');
        image(check_img_r, 1160, 600);
    } else {
        cursor();
    }
}