var animations                          = {};

(function(){
//GUNS
animations['red_gun_idle_left']     = {image: 'gun', sx: 0, sy: 0, w: 164, h: 96, ox: 0, oy: 96, length: 1, time: 100, loop: 'stick'};
animations['red_gun_idle_right']    = {image: 'gun', sx: 164, sy: 0, w: 164, h: 96, ox: 0, oy: 96, length: 1, time: 100, loop: 'stick'};

animations['red_gun_start_left']    = {image: 'gun', sx: 0, sy: 0, w: 164, h: 96, ox: 0, oy: 96, length: 5, time: 100, loop: 'stick'};
animations['red_gun_start_right']   = {image: 'gun', sx: 164, sy: 0, w: 164, h: 96, ox: 0, oy: 96, length: 5, time: 100, loop: 'stick'};

animations['red_gun_fire_left']     = {image: 'gun', sx: 0, sy: 384, w: 164, h: 96, ox: 0, oy: 96, length: 3, time: 100, loop: 'stickFirst'};
animations['red_gun_fire_right']    = {image: 'gun', sx: 164, sy: 384, w: 164, h: 96, ox: 0, oy: 96, length: 3, time: 100, loop: 'stickFirst'};

animations['red_gun_end_left']      = {image: 'gun', sx: 0, sy: 384, w: 164, h: 96, ox: 0, oy: -96, length: 5, time: 100, loop: 'stick'};
animations['red_gun_end_right']     = {image: 'gun', sx: 164, sy: 384, w: 164, h: 96, ox: 0, oy: -96, length: 5, time: 100, loop: 'stick'};

animations['blue_gun_idle_left']    = {image: 'gun', sx: 328, sy: 0, w: 164, h: 96, ox: 0, oy: 96, length: 1, time: 100, loop: 'stick'};
animations['blue_gun_idle_right']   = {image: 'gun', sx: 492, sy: 0, w: 164, h: 96, ox: 0, oy: 96, length: 1, time: 100, loop: 'stick'};

animations['blue_gun_start_left']   = {image: 'gun', sx: 328, sy: 0, w: 164, h: 96, ox: 0, oy: 96, length: 5, time: 100, loop: 'stick'};
animations['blue_gun_start_right']  = {image: 'gun', sx: 492, sy: 0, w: 164, h: 96, ox: 0, oy: 96, length: 5, time: 100, loop: 'stick'};

animations['blue_gun_fire_left']    = {image: 'gun', sx: 328, sy: 384, w: 164, h: 96, ox: 0, oy: 96, length: 3, time: 100, loop: 'stickFirst'};
animations['blue_gun_fire_right']   = {image: 'gun', sx: 492, sy: 384, w: 164, h: 96, ox: 0, oy: 96, length: 3, time: 100, loop: 'stickFirst'};

animations['blue_gun_end_left']     = {image: 'gun', sx: 328, sy: 384, w: 164, h: 96, ox: 0, oy: -96, length: 5, time: 100, loop: 'stick'};
animations['blue_gun_end_right']    = {image: 'gun', sx: 492, sy: 384, w: 164, h: 96, ox: 0, oy: -96, length: 5, time: 100, loop: 'stick'};

animations['green_gun_idle_left']   = {image: 'gun', sx: 656, sy: 0, w: 164, h: 96, ox: 0, oy: 96, length: 1, time: 100, loop: 'stick'};
animations['green_gun_idle_right']  = {image: 'gun', sx: 820, sy: 0, w: 164, h: 96, ox: 0, oy: 96, length: 1, time: 100, loop: 'stick'};

animations['green_gun_start_left']  = {image: 'gun', sx: 656, sy: 0, w: 164, h: 96, ox: 0, oy: 96, length: 5, time: 100, loop: 'stick'};
animations['green_gun_start_right'] = {image: 'gun', sx: 820, sy: 0, w: 164, h: 96, ox: 0, oy: 96, length: 5, time: 100, loop: 'stick'};

animations['green_gun_fire_left']   = {image: 'gun', sx: 656, sy: 384, w: 164, h: 96, ox: 0, oy: 96, length: 3, time: 100, loop: 'stickFirst'};
animations['green_gun_fire_right']  = {image: 'gun', sx: 820, sy: 384, w: 164, h: 96, ox: 0, oy: 96, length: 3, time: 100, loop: 'stickFirst'};

animations['green_gun_end_left']     = {image: 'gun', sx: 656, sy: 384, w: 164, h: 96, ox: 0, oy: -96, length: 5, time: 100, loop: 'stick'};
animations['green_gun_end_right']    = {image: 'gun', sx: 820, sy: 384, w: 164, h: 96, ox: 0, oy: -96, length: 5, time: 100, loop: 'stick'};


//Key
animations['key']                    = {image: 'key', sx: 0, sy: 0, w: 132, h: 84, ox: 0, oy: 104, length: 6, time: 100, loop: 'loop', lMargin: 0.5, rMargin: 0.5, tMargin: 0.3};

//Lens
animations['red_lens']     			 = {image: 'lens', sx: 2, sy: 6, w: 84, h: 172, ox: 0, oy: 178, length: 9, time: 75, loop: 'pingpong'};
animations['blue_lens']    			 = extend(animations['red_lens'], {sx: 86}); //{image: 'lens', sx: 86, sy: 6, w: 84, h: 172, ox: 0, oy: 178, length: 9, time: 75, loop: 'pingpong'};
animations['green_lens']   			 = extend(animations['red_lens'], {sx: 172}); //{image: 'lens', sx: 172, sy: 6, w: 84, h: 172, ox: 0, oy: 178, length: 9, time: 75, loop: 'pingpong'};
animations['empty_lens']   			 = extend(animations['red_lens'], {sx: 260}); //{image: 'lens', sx: 172, sy: 6, w: 84, h: 172, ox: 0, oy: 178, length: 9, time: 75, loop: 'pingpong'};

//Door
animations['blue_door_idle']         = {image: 'doors', sx: 0, sy: 0, w: 172, h: 278, ox: 172, oy: 0, length: 1, time: 100, loop: 'loop'};
animations['blue_door_open']         = {image: 'doors', sx: 0, sy: 0, w: 172, h: 278, ox: 172, oy: 0, length: 16, time: 100, loop: 'stick', sounds: [{f:5, k:'doorOpen'}]};
animations['blue_door_close']        = {image: 'doors', sx: 2580, sy: 0, w: 172, h: 278, ox: -172, oy: 0, length: 16, time: 100, loop: 'stick', sounds: [{f:7, k:'doorShut'}]};

animations['red_door_idle']          = {image: 'doors', sx: 0, sy: 278, w: 172, h: 278, ox: 172, oy: 0, length: 1, time: 100, loop: 'loop'};
animations['red_door_open']          = {image: 'doors', sx: 0, sy: 278, w: 172, h: 278, ox: 172, oy: 0, length: 16, time: 100, loop: 'stick', sounds: [{f:5, k:'doorOpen'}]};
animations['red_door_close']         = {image: 'doors', sx: 2580, sy: 278, w: 172, h: 278, ox: -172, oy: 0, length: 16, time: 100, loop: 'stick', sounds: [{f:7, k:'doorShut'}]};

animations['green_door_idle']        = {image: 'doors', sx: 0, sy: 556, w: 172, h: 278, ox: 172, oy: 0, length: 1, time: 100, loop: 'loop'};
animations['green_door_open']        = {image: 'doors', sx: 0, sy: 556, w: 172, h: 278, ox: 172, oy: 0, length: 16, time: 100, loop: 'stick', sounds: [{f:5, k:'doorOpen'}]};
animations['green_door_close']       = {image: 'doors', sx: 2580, sy: 556, w: 172, h: 278, ox: -172, oy: 0, length: 16, time: 100, loop: 'stick', sounds: [{f:7, k:'doorShut'}]};

animations['grey_door_idle']         = {image: 'doors', sx: 0, sy: 834, w: 172, h: 278, ox: 172, oy: 0, length: 1, time: 100, loop: 'loop'};
animations['grey_door_open']         = {image: 'doors', sx: 0, sy: 834, w: 172, h: 278, ox: 172, oy: 0, length: 16, time: 100, loop: 'stick', sounds: [{f:5, k:'doorOpen'}]};
animations['grey_door_close']        = {image: 'doors', sx: 2580, sy: 834, w: 172, h: 278, ox: -172, oy: 0, length: 16, time: 100, loop: 'stick', sounds: [{f:7, k:'doorShut'}]};

animations['transparent_door_idle']  = {image: 'doors', sx: 0, sy: 1112, w: 172, h: 278, ox: 172, oy: 0, length: 1, time: 100, loop: 'loop'};
animations['transparent_door_open']  = {image: 'doors', sx: 0, sy: 1112, w: 172, h: 278, ox: 172, oy: 0, length: 16, time: 100, loop: 'stick', sounds: [{f:5, k:'doorOpen'}]};
animations['transparent_door_close'] = {image: 'doors', sx: 2580, sy: 1112, w: 172, h: 278, ox: -172, oy: 0, length: 16, time: 100, loop: 'stick', sounds: [{f:7, k:'doorShut'}]};


//Player
var player = {scale: 0.75, oy: 0};


var walk = extend(player, {h: 184, w: 159});
var walk_right = extend(walk, {sy: 1, ox: 159, sx: 0, xCenter: 0.35});
var walk_left = extend(walk, {sy: 186, ox: -159, sx: 4770-159, xCenter: 0.65});

var walkingStart = {length: 6, time: 20*.75, loop: 'switch', switchTo: 'walking'};
var walkingStart_right = extend(walk_right, walkingStart, {rMargin: 0.77});
var walkingStart_left = extend(walk_left, walkingStart, {lMargin: 0.77});

var walking = {length: 24, time: 45*.75, loop: 'loop', sounds: [{f:2, k:"step1"}, {f:15, k:"step2"}]};
var walking_right = extend(walk_right, walking, {sx: 954, rMargin: [{f: 3, v: 0.77}, {f: 16, v: 0}, {f: 21, v: 0.77}]});
var walking_left = extend(walk_left, walking, {sx: 4770-159-954, lMargin: [{f: 3, v: 0.77}, {f: 16, v: 0}, {f: 21, v: 0.77}]});

var standing = {length: 1, time: 3000, loop: 'switch', switchTo: 'looks'};
var standing_right = extend(walk_right, standing, {rMargin: 0.77});
var standing_left = extend(walk_left, standing, {lMargin: 0.77});

var looks = extend(player, {length: 50, time: 100, loop: 'stick', h: 185, w:115, loop: 'switch', switchTo: 'standing'});
var looks_right = extend(looks, {sy: 0, ox: 115, sx:0, rMargin: 0.1});
var looks_left = extend(looks, {sy: 185, ox: -115, sx:5750-115, lMargin: 0.1});


var jump = extend(player, {h: 227, w: 129, length: 8, time: 20});
var jump_right = extend(jump, {sy: 0, ox: 129, rMargin: 0.13});
var jump_left = extend(jump, {sy: 227, ox: -129, lMargin: 0.13});

var jumping = extend(jump, {h: 227, w: 129, loop: 'stick', tMargin: [{f: 0, v: 0.67}, {f: 8, v: 0.13}]});
var jumping_right = extend(jumping, jump_right, {sx: 0});
var jumping_left = extend(jumping, jump_left, {sx: 2064-129});

var landing = extend(jump, {h: 227, w: 129, loop: 'switch', switchTo: 'standing', tMargin: [{f: 0, v: 0.13}, {f: 8, v: 0.67}]});
var landing_right = extend(landing, jump_right, {sx: 1032});
var landing_left = extend(landing, jump_left, {sx: 2064-1032-129});


var death = extend(player, {w: 329, h: 197, length: 54, time: 50, loop: 'stick', sounds:[{f:10, k:"DeathSound"}]});
var death_right = extend(death, {sx: 0, ox: 329, sy: 0, xCenter: 0.27, rMargin: 3/*[{f: 13, v: 2}, {f: 39, v: 0}]*/, lMargin: 0.5});
var death_left = extend(death, {sx: 17766-329, ox: -329, sy: 197, xCenter: 0.73, lMargin: 3/*[{f: 13, v: 2}, {f: 39, v: 0}]*/, rMargin: 0.5});



animations['red_walkingStart_right']              = extend({image: 'Run_Red', sy: 0}, walkingStart_right);
animations['red_walking_right']                   = extend({image: 'Run_Red', sy: 0}, walking_right);
animations['red_standing_right']                  = extend({image: 'Run_Red', sy: 0}, standing_right);
animations['red_looks_right']        = extend({image: 'looks_Red'}, looks_right);
animations['red_jumping_right']                   = extend({image: 'Jump_Red'}, jumping_right);
animations['red_landing_right']                   = extend({image: 'Jump_Red'}, landing_right);
animations['red_death_right']                     = extend({image: 'Death_Red'}, death_right);

animations['red_walkingStart_left']               = extend({image: 'Run_Red', sy: 184}, walkingStart_left);
animations['red_walking_left']                    = extend({image: 'Run_Red', sy: 184}, walking_left);
animations['red_standing_left']                   = extend({image: 'Run_Red', sy: 184}, standing_left);
animations['red_looks_left']        = extend({image: 'looks_Red'}, looks_left);
animations['red_jumping_left']                    = extend({image: 'Jump_Red'}, jumping_left);
animations['red_landing_left']                    = extend({image: 'Jump_Red'}, landing_left);
animations['red_death_left']                      = extend({image: 'Death_Red'}, death_left);

animations['blue_walkingStart_right']             = extend({image: 'Run_Blue'}, walkingStart_right);
animations['blue_walking_right']                  = extend({image: 'Run_Blue'}, walking_right);
animations['blue_standing_right']                 = extend({image: 'Run_Blue'}, standing_right);
animations['blue_looks_right']        = extend({image: 'looks_Blue'}, looks_right);
animations['blue_jumping_right']                  = extend({image: 'Jump_Blue'}, jumping_right);
animations['blue_landing_right']                  = extend({image: 'Jump_Blue'}, landing_right);
animations['blue_death_right']                    = extend({image: 'Death_Blue'}, death_right);

animations['blue_walkingStart_left']    = extend({image: 'Run_Blue'}, walkingStart_left);
animations['blue_walking_left']         = extend({image: 'Run_Blue'}, walking_left);
animations['blue_standing_left']        = extend({image: 'Run_Blue'}, standing_left);
animations['blue_looks_left']        = extend({image: 'looks_Blue'}, looks_left);
animations['blue_jumping_left']         = extend({image: 'Jump_Blue'}, jumping_left);
animations['blue_landing_left']         = extend({image: 'Jump_Blue'}, landing_left);
animations['blue_death_left']           = extend({image: 'Death_Blue'}, death_left);

animations['green_walkingStart_right']  = extend({image: 'Run_Green'}, walkingStart_right);
animations['green_walking_right']       = extend({image: 'Run_Green'}, walking_right);
animations['green_standing_right']      = extend({image: 'Run_Green'}, standing_right);
animations['green_looks_right']        = extend({image: 'looks_Green'}, looks_right);
animations['green_jumping_right']       = extend({image: 'Jump_Green'}, jumping_right);
animations['green_landing_right']       = extend({image: 'Jump_Green'}, landing_right);
animations['green_death_right']         = extend({image: 'Death_Green'}, death_right);

animations['green_walkingStart_left']   = extend({image: 'Run_Green'}, walkingStart_left);
animations['green_walking_left']        = extend({image: 'Run_Green'}, walking_left);
animations['green_standing_left']       = extend({image: 'Run_Green'}, standing_left);
animations['green_looks_left']        = extend({image: 'looks_Green'}, looks_left);
animations['green_jumping_left']        = extend({image: 'Jump_Green'}, jumping_left);
animations['green_landing_left']        = extend({image: 'Jump_Green'}, landing_left);
animations['green_death_left']          = extend({image: 'Death_Green'}, death_left);

animations['white_walkingStart_right']  = extend({image: 'Run_White'}, walkingStart_right);
animations['white_walking_right']       = extend({image: 'Run_White'}, walking_right);
animations['white_standing_right']      = extend({image: 'Run_White'}, standing_right);
animations['white_looks_right']        = extend({image: 'looks_White'}, looks_right);
animations['white_jumping_right']       = extend({image: 'Jump_White'}, jumping_right);
animations['white_landing_right']       = extend({image: 'Jump_White'}, landing_right);
animations['white_death_right']         = extend({image: 'Death_White'}, death_right);

animations['white_walkingStart_left']   = extend({image: 'Run_White'}, walkingStart_left);
animations['white_walking_left']        = extend({image: 'Run_White'}, walking_left);
animations['white_standing_left']       = extend({image: 'Run_White'}, standing_left);
animations['white_looks_left']        = extend({image: 'looks_White'}, looks_left);
animations['white_jumping_left']        = extend({image: 'Jump_White'}, jumping_left);
animations['white_landing_left']        = extend({image: 'Jump_White'}, landing_left);
animations['white_death_left']          = extend({image: 'Death_White'}, death_left);

animations['before_walkingStart_right'] = extend({image: 'Run_Before'}, walkingStart_right);
animations['before_walking_right']      = extend({image: 'Run_Before'}, walking_right);
animations['before_standing_right']     = extend({image: 'Run_Before'}, standing_right);
animations['before_looks_right']        = extend({image: 'looks_Before'}, looks_right);
animations['before_jumping_right']      = extend({image: 'Jump_Before'}, jumping_right);
animations['before_landing_right']      = extend({image: 'Jump_Before'}, landing_right);
animations['before_death_right']        = extend({image: 'Death_White'}, death_right);

animations['before_walkingStart_left']  = extend({image: 'Run_Before'}, walkingStart_left);
animations['before_walking_left']       = extend({image: 'Run_Before'}, walking_left);
animations['before_standing_left']      = extend({image: 'Run_Before'}, standing_left);
animations['before_looks_left']         = extend({image: 'looks_Before'}, looks_left);
animations['before_jumping_left']       = extend({image: 'Jump_Before'}, jumping_left);
animations['before_landing_left']       = extend({image: 'Jump_Before'}, landing_left);
animations['before_death_left']         = extend({image: 'Death_White'}, death_left);

})();

// set_animations();