function ghost() {
    image(img_stage6, 0, 0, 1280, 720);
    imageMode(CENTER);
    if (1280 - x > 0 && 720 - y > 0) {
        image(img_ghost, 640, 360, 80 + x, 40 + y);
        x = x + 20 * 2;
        y = y + 20;
        print(x + "  " + y)
    }
    else {
        image(img_ghost, 640, 360, 80 + x, 40 + y);
        colorMode(RGB);

        if (blood < 255) {
            fill(blood, 0, 0);
            rect(0, 0, 1280, 720);
            blood = blood + 8;
        }
        else {
            color(255, 0, 0);
            rect(0, 0, 1280, 720);
        }
    }
    imageMode(CORNER);
}