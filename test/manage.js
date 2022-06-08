let img;

function preload() {
    main = loadImage('./data/main.png');
    stage1 = loadImage('./data/stage1.png');
    stage2 = loadImage('./data/stage2.png');
    stage3 = loadImage('./data/stage3.png');
    stage4 = loadImage('./data/stage4.png');
    stage5 = loadImage('./data/stage5.png');
    stage6 = loadImage('./data/stage6.png');
}

function setup() {

    let cnv = createCanvas(1280, 720);
    cnv.parent('screen');
    image(img, 0, 0, 1280, 720);
}