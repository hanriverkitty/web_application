function ghost() {
    blendMode(BLEND);
    image(img_stage6, 0, 0, 1280, 720);
    imageMode(CENTER);
    if (1280 - x > 0 && 720 - y > 0) {
        image(img_ghost, 640, 360, 80 + x, 40 + y);
        x = x + 50 * 2;
        y = y + 50;
        print(x + "  " + y)
    }
    else {
        image(img_ghost, 640, 360, 80 + x, 40 + y);
        colorMode(RGB);

        if (blood < 255) {
            fill(blood, 0, 0);
            rect(0, 0, 1280, 720);
            blood = blood + 4;

        }
        else {
            fill(255, 0, 0);
            rect(0, 0, 1280, 720);
            fill(255, 255, 255, opacity);
            textStyle(BOLD);
            textSize(128);
            textAlign(CENTER);
            text("GAME OVER", 640, 400);
            opacity = opacity + 5;
        }
    }
    imageMode(CORNER);
}