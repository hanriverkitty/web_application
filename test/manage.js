let img_main, img_stage1, img_stage2, img_stage3, img_stage4, img_stage5, img_stage6;
let stage = 0;
function preload() {
    img_main = loadImage('./data/main.png');
    img_stage1 = loadImage('./data/stage1.png');
    img_stage2 = loadImage('./data/stage2.png');
    img_stage3 = loadImage('./data/stage3.png');
    img_stage4 = loadImage('./data/stage4.png');
    img_stage5 = loadImage('./data/stage5.png');
    img_stage6 = loadImage('./data/stage6.png');
}

function setup() {

    let cnv = createCanvas(1280, 720);
    cnv.parent('screen');
}
function draw() {
    if (stage == 0) {
        main();
    } else if (stage == 1) {
        stage1();
    } else if (stage == 2) {
        stage2();
    } else if (stage == 3) {
        stage3();
    } else if (stage == 4) {
        stage4();
    } else if (stage == 5) {
        stage5();
    } else if (stage == 6) {
        stage6();
    }
}