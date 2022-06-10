function stage2() {
    image(img_stage2, 0, 0, 1280, 720);
    if (mouseX > 20 && mouseX < 90) {
        image(left_g, mouseX - 55, mouseY - 24);
    } else if (mouseX > 1190 && mouseX < 1260) {
        image(right_g, mouseX - 55, mouseY - 24);
    }
}


