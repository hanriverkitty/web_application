
function drawer() {
    print(mouseX + " " + mouseY);
    image(door_img, 0, 0);
    imageMode(CENTER);
    image(drawer_img, 640 - drawer_x, 385);
    imageMode(CORNER);
    glass = false;

    image(check_img, 1160, 600);
    if (mouseX > 1160 && mouseX < 1240 && mouseY > 600 && mouseY < 680) {
        cursor('grab');
        image(check_img_r, 1160, 600);
    } else if (drawer_x > 444 && mouseX > 470 && mouseX < 790 && mouseY > 140 && mouseY < 715) {
        cursor('grab');
    }
    else {
        cursor();
    }

}