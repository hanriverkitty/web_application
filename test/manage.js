let img_main, img_stage1, img_stage2, img_stage3, img_stage4, img_stage5, img_stage6, check_img, check_img_b, check_img_r;
let stage = 2;
let emitter;
let torch_texture;
let useMouse = true;
let left_g, left, right_g, right, left_w, right_w;

let main_bgm, text_bgm;
function preload() {
    img_main = loadImage('./data/main.png');
    img_stage1 = loadImage('./data/stage1.png');
    img_stage2 = loadImage('./data/stage2.png');
    img_stage3 = loadImage('./data/stage3.png');
    img_stage4 = loadImage('./data/stage4.png');
    img_stage5 = loadImage('./data/stage5.png');
    img_stage6 = loadImage('./data/stage6.png');
    main_bgm = loadSound('./data/true.mp3');
    text_bgm = loadSound('./data/digital_typ_cut.mp3');
    check_img = loadImage('./data/Vector.png');
    check_img_b = loadImage('./data/Vector_b.png');
    check_img_r = loadImage('./data/Vector_r.png');
    torch_texture = loadImage('./data/texture32.png');
    left_g = loadImage('./data/left_g.png');
    left = loadImage('./data/left.png');
    right_g = loadImage('./data/right_g.png');
    right = loadImage('./data/right.png');
    left_w = loadImage('./data/left_w.png');
    right_w = loadImage('./data/right_w.png');

}

function setup() {

    let cnv = createCanvas(1280, 720);
    cnv.parent('screen');
    emitter = new Emitter(width / 2, height * 5 / 6);
    frameRate(30)

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
