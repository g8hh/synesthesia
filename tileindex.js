// {fromY:7, toY:7,c:1,fromX:14,toX:11,roundTime:6000}

var colorBlue = 1, colorGreen = 2, colorRed = 3, colorGrey = 4;

var tilesIndex = [
// Basics
{c: 0},
{c: 1},
{c: 2},
{c: 3},
{c: 4},

// Border
{i: 'tile_neutral', u: 0, v: 0},
{i: 'tile_neutral', u: 1, v: 0},
{i: 'tile_neutral', u: 2, v: 0},
{i: 'tile_neutral', u: 0, v: 1},
{i: 'tile_neutral', u: 1, v: 1},
{i: 'tile_neutral', u: 0, v: 2},
{i: 'tile_neutral', u: 1, v: 2},
{i: 'tile_neutral', u: 2, v: 2},

// Simple
{i: 'tile_neutral', u: 1, v: 5},
{i: 'tile_neutral', u: 2, v: 1},
{i: 'tile_neutral', u: 3, v: 1},
{i: 'tile_neutral', u: 1, v: 3},
{i: 'tile_neutral', u: 0, v: 4},
{i: 'tile_neutral', u: 3, v: 4},
{i: 'tile_neutral', u: 0, v: 5},
{i: 'tile_neutral', u: 3, v: 5},

{i: 'tile_neutral', u: 0, v: 3},
{i: 'tile_neutral', u: 3, v: 3},
{i: 'tile_neutral', u: 0, v: 6},
{i: 'tile_neutral', u: 3, v: 6},

//Color
{i: 'tile_color', u: 0, v: 0, c: colorRed},
{i: 'tile_color', u: 1, v: 0, c: colorRed},
{i: 'tile_color', u: 2, v: 0, c: colorRed},
{i: 'tile_color', u: 0, v: 1, c: colorRed},
{i: 'tile_color', u: 1, v: 1, c: colorRed},
{i: 'tile_color', u: 2, v: 1, c: colorRed},

{i: 'tile_color', u: 0, v: 2, c: colorGreen},
{i: 'tile_color', u: 1, v: 2, c: colorGreen},
{i: 'tile_color', u: 2, v: 2, c: colorGreen},
{i: 'tile_color', u: 0, v: 3, c: colorGreen},
{i: 'tile_color', u: 1, v: 3, c: colorGreen},
{i: 'tile_color', u: 2, v: 3, c: colorGreen},

{i: 'tile_color', u: 0, v: 4, c: colorBlue},
{i: 'tile_color', u: 1, v: 4, c: colorBlue},
{i: 'tile_color', u: 2, v: 4, c: colorBlue},
{i: 'tile_color', u: 0, v: 5, c: colorBlue},
{i: 'tile_color', u: 1, v: 5, c: colorBlue},
{i: 'tile_color', u: 2, v: 5, c: colorBlue},

//Spikes
{i: 'spikes', u: 0, v: 0, c: colorRed, dangerousUp: true},
{i: 'spikes', u: 0, v: 1, c: colorGreen, dangerousUp: true},
{i: 'spikes', u: 0, v: 2, c: colorBlue, dangerousUp: true},
{i: 'spikes', u: 0, v: 3, c: colorGrey, dangerousUp: true},

{i: 'spikes', u: 1, v: 3, c: colorRed, dangerousDown: true},
{i: 'spikes', u: 1, v: 2, c: colorGreen, dangerousDown: true},
{i: 'spikes', u: 1, v: 1, c: colorBlue, dangerousDown: true},
{i: 'spikes', u: 1, v: 0, c: colorGrey, dangerousDown: true},

//tile neutral missing
{i: 'tile_neutral', u: 2, v: 6},
{i: 'tile_neutral', u: 2, v: 5},
{i: 'tile_neutral', u: 2, v: 3},
{i: 'tile_neutral', u: 3, v: 2},

//tile green platform  verticalMove 55
{i: 'tile_color', u: 1, v: 2, c: colorGreen, moveY: -6.5, roundTime: 5000},
{i: 'tile_color', u: 0, v: 2, c: colorGreen, moveY: -6.5, roundTime: 5000},
{i: 'tile_color', u: 2, v: 2, c: colorGreen, moveY: -6.5, roundTime: 5000},

//tile red platform  horizontalMove LtR 58
{i: 'tile_color', u: 1, v: 0, c: colorRed, moveX: +5, roundTime: 6000},
{i: 'tile_color', u: 0, v: 0, c: colorRed, moveX: +5, roundTime: 6000},
{i: 'tile_color', u: 2, v: 0, c: colorRed, moveX: +5, roundTime: 6000},

//tile red platform  horizontalMove RtL 61
{i: 'tile_color', u: 1, v: 0, c: colorRed, moveX: -5, roundTime: 6000},
{i: 'tile_color', u: 0, v: 0, c: colorRed, moveX: -5, roundTime: 6000},
{i: 'tile_color', u: 2, v: 0, c: colorRed, moveX: -5, roundTime: 6000},

//tile green platform  verticalMove 64
{i: 'tile_color', u: 1, v: 2, c: colorGreen, moveY: -14, roundTime: 4000},
{i: 'tile_color', u: 0, v: 2, c: colorGreen, moveY: -14, roundTime: 4000},
{i: 'tile_color', u: 2, v: 2, c: colorGreen, moveY: -14, roundTime: 4000},

//tile neutral platform  verticalMove 67
{i: 'tile_neutral', u: 1, v: 5, c: 4, moveY: -5, roundTime: 4000},
{i: 'tile_neutral', u: 2, v: 1, c: 4, moveY: -5, roundTime: 4000},
{i: 'tile_neutral', u: 3, v: 1, c: 4, moveY: -5, roundTime: 4000},

//tile neutral platform  verticalMove 70
{i: 'tile_neutral', u: 1, v: 5, c: 4, moveY: +19, roundTime: 7000},
{i: 'tile_neutral', u: 2, v: 1, c: 4, moveY: +19, roundTime: 7000},
{i: 'tile_neutral', u: 3, v: 1, c: 4, moveY: +19, roundTime: 7000},

//tile neutral platform  horizontalMove 73
{i: 'tile_neutral', u: 1, v: 5, c: 4, moveX: -23, roundTime: 9000},
{i: 'tile_neutral', u: 2, v: 1, c: 4, moveX: -23, roundTime: 9000},
{i: 'tile_neutral', u: 3, v: 1, c: 4, moveX: -23, roundTime: 9000},

];

var r1 = 25, r2 = 26, r3 = 27, r4 = 28, r5 = 29, r6 = 30,
	g1 = 31, g2 = 32, g3 = 33, g4 = 34, g5 = 35, g6 = 36,
	b1 = 37, b2 = 38, b3 = 39, b4 = 40, b5 = 41, b6 = 42;

var sr = 43, sg = 44, sb = 45, sn = 46, //spikes up
	Sr = 47, Sg = 48, Sb = 49, Sn = 50; //spikes down




