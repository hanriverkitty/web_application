let img_main, img_stage1, img_stage2, img_stage3, img_stage4, img_stage5, img_stage6, check_img, check_img_b, check_img_r, img_ghost, img_family;
let stage = 15;
let emitter, emitter1, emitter2, emitter3, emitter4, emitter5, emitter6;
let is_emitter1 = false, is_emitter2 = false, is_emitter3 = false, is_emitter4 = false, is_emitter5 = false, is_emitter6 = false;
let torch_on1 = true, torch_on2 = true, torch_on3 = true, torch_on4 = true, torch_on5 = true, torch_on6 = true;
let take_torch1_millis = true, take_torch2_millis = true, take_torch3_millis = true, take_torch4_millis = true, take_torch5_millis = true, take_torch6_millis = true;
let start_Ontorch1, start_Ontorch2, start_Ontorch3, start_Ontorch4, start_Ontorch5, start_Ontorch6;
let current_torch1, current_torch2, current_torch3, current_torch4, current_torch5, current_torch6;
let current_Ontorch1, current_Ontorch2, current_Ontorch3, current_Ontorch4, current_Ontorch5, current_Ontorch6;
let start_torch1, start_torch2, start_torch3, start_torch4, start_torch5, start_torch6;
let torch_count = 0;
let torch1_random, torch2_random, torch3_random, torch4_random, torch5_random, torch6_random;
let torch_texture, random_num = [9000, 10000, 11000, 12000, 13000];
let useMouse = true;
let left_g, left, right_g, right, left_w, right_w;
let main_bgm, text_bgm, room_bgm, final_bgm, door_bgm, knock_bgm, rosie_bgm, scream_sound_b, locked_sound, scroll_bgm, waterfill, waterdrink;
let img_stage6_1, img_stage6_2, img_stage6_3, img_stage6_4, img_stage6_5, img_stage6_6;
let deerhead_c, deerhead_c1, table, mirror_img, bath_img, bathwater_img, water, sink_img;
let cursor_img;
let glass = false;
let door_playing = false, b_knock = false, rosie_playing = false, scream = false, stage1_door = false, b_scroll_bgm = false;
let ms, knock_ms = false;
let start, current;
let x = 0, y = 0, blood = 0, opacity = 0;

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
    check_img_r = loadImage('./data/Vector_r1.png');
    torch_texture = loadImage('./data/texture32.png');
    left_g = loadImage('./data/left_g.png');
    left = loadImage('./data/left.png');
    right_g = loadImage('./data/right_g.png');
    right = loadImage('./data/right.png');
    // left_w = loadImage('./data/left_w.png');
    // right_w = loadImage('./data/right_w.png');
    room_bgm = loadSound('./data/착신아리1.mp3');
    final_bgm = loadSound('./data/deadsilence.mp3');
    cursor_img = loadImage('./data/magnifying_glass1.png');
    door_bgm = loadSound('./data/dooropen.mp3');
    knock_bgm = loadSound('./data/knock.mp3');
    img_ghost = loadImage('./data/ghost.png');
    img_stage6_1 = loadImage('./data/stage6-1.png');
    img_stage6_2 = loadImage('./data/stage6-2.png');
    img_stage6_3 = loadImage('./data/stage6-3.png');
    img_stage6_4 = loadImage('./data/stage6-4.png');
    img_stage6_5 = loadImage('./data/stage6-5.png');
    img_stage6_6 = loadImage('./data/stage6-6.png');
    rosie_bgm = loadSound('./data/rosie.mp3');
    scream_sound_b = loadSound('./data/scream.mp3');
    img_family = loadImage('./data/family_pic.png');
    locked_sound = loadSound('./data/locked.mp3');
    deerhead_c = loadImage('./data/deer_head_c.png');
    deerhead_c1 = loadImage('./data/deer_head_c(1).png');
    scroll_bgm = loadSound('./data/horror.mp3');
    table = loadImage('./data/table.png');
    mirror_img = loadImage('./data/mirror.png');
    bath_img = loadImage('./data/bath.png');
    bathwater_img = loadImage('./data/bath(1).png');
    water = loadImage('./data/water.png');
    waterfill = loadSound('./data/waterfill.mp3');
    waterdrink = loadSound('./data/waterdrink.mp3');
    sink_img = loadImage('./data/sink.png');
}

function setup() {

    let cnv = createCanvas(1280, 720);
    cnv.parent('screen');
    emitter = new Emitter(1280, 720);
    emitter1 = new Emitter(1280, 720);
    emitter2 = new Emitter(1280, 720);
    emitter3 = new Emitter(1280, 720);
    emitter4 = new Emitter(1280, 720);
    emitter5 = new Emitter(1280, 720);
    emitter6 = new Emitter(1280, 720);
    //emitter6 = new Emitter(width / 2, height * 5 / 6);
    pixelDensity(1);


}
function draw() {
    if (stage == 0) {
        main();
    } else if (stage == 1) {
        stage1();
    } else if (stage == 2) {
        stage2();
        ms = millis();
    } else if (stage == 3) {
        stage3();
    } else if (stage == 4) {
        stage4();

    } else if (stage == 5) {
        stage5();
    } else if (stage == 6) {
        stage6();
    } else if (stage == 7) {
        ghost();
    } else if (stage == 11) {
        deerhead();
    } else if (stage == 12) {
        scroll();
    } else if (stage == 13) {
        table_view();
    }
    else if (stage == 14) {
        mirror();
    }
    else if (stage == 15) {
        bath();
    } else if (stage == 16) {
        bathwater();
    }
    else if (stage == 17) {
        sink();
    }
    if (glass == true) {
        image(cursor_img, mouseX - 20, mouseY - 20, 40, 40);
    }

}
