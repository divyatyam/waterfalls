
let POINTMAP;
let COLORMAP;
const WIDTH_UNITS = 18;
const HEIGHT_UNITS = 48;
const HEIGHT = window.innerHeight;
const ASPECT_RATIO = 0.64666666667;
const WIDTH = ASPECT_RATIO*HEIGHT;
const COLOR_GROUPS = [
  [0, 1, 2],
  [3, 4, 8],
  [7, 14, 15],
  [10, 11, 12],
  [6, 5, 9, 13],
];
let R = new Random();

function preload() {
  codes = loadStrings('code.csv');
}

function setup() {
  noLoop();
  POINTMAP = decodePointMap();
  COLORMAP = groupedColorMap();
  createCanvas(WIDTH, HEIGHT);
}

function draw() {
  background(COLORMAP[0]);
  for (let x = 0; x <= WIDTH_UNITS; x++) {
    for (let y = 0; y <= HEIGHT_UNITS; y++) {
      drawTriangles(x, y);
    }
  }
}
