function drawTriangles(x, y) {
  if (x % 2 != y % 2) {
    rightTriangle(x, y);
  } else {
    leftTriangle(x, y);
  }
}

function leftTriangle(x, y) {
  rasterizeTriangle(x, y, x - 0.5, y, x + 0.5, y - 1, x + 0.5, y + 1);
}

function rightTriangle(x, y) {
  rasterizeTriangle(x, y, x - 0.5, y - 1, x - 0.5, y + 1, x + 0.5, y);
}

function rasterizeTriangle(x, y, x1, y1, x2, y2, x3, y3) {
  let clr;
  try {
    code = POINTMAP[x][y];
    clr = COLORMAP[code];
  } catch (T) {
    print(T);
    clr = color("black");
  }
  drawTriangle(clr, x,y, x1, y1, x2, y2, x3, y3);
}

function drawTriangle(clr, x,y,x1, y1, x2, y2, x3, y3) {
  try {
  fill(clr);
  stroke(clr);
  } catch (T) {
    print(x,y,clr);
  }
  strokeWeight(1);
  let nH = WIDTH / WIDTH_UNITS;
  let nV = HEIGHT / HEIGHT_UNITS;
  triangle(x1 * nH, y1 * nV, x2 * nH, y2 * nV, x3 * nH, y3 * nV);
}