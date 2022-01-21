
function randomPalette() {
  a = R.random_int(1, 79); // 149
  b = R.random_int(101, 199);
  c = R.random_int(151, 254);
  return [
    color(a, c, b),
    color(b, a, c),
    color(b, c, a),
    color(c, a, b),
    color(c, b, a),
  ];
}

function saturate(clr) {
  let arr = [red(clr), green(clr), blue(clr)];
  let max = 0;
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      j = i;
      max = arr[i];
    }
  }
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (i == j) {
      res[i] = 255;
      continue;
    }
    res[i] = arr[i];
  }
  return color(res[0], res[1], res[2]);
}

 function addGradientToPool(colorMap) {
  let start = colorMap[6];
  let end = colorMap[7];
  colorMap[5] = lerpColor(start, end, 0.2);
  colorMap[9] = lerpColor(start, end, 0.4);
  colorMap[13] = lerpColor(start, end, 0.8);
 }

function getPolar(clr) {
  // Pick the component that's weakest and apply that as a tint
  let a = [red(clr), green(clr), blue(clr)];
  let min = a[0];
  let ia = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] < min) {
      min = a[i];
      ia = i;
    }
  }

  switch (ia) {
    case 0:
      return color("red");
    case 1:
      return color("green");
    case 2:
      return color("blue");
  }
}

function rotateColor(seed, groupIndex) {
  switch (groupIndex) {
    case 0:
      return lerpColor(seed, color("white"), 0.3);
    case 2:
      return lerpColor(seed, getPolar(seed), 0.0);
    case 1:
      return lerpColor(seed, color("black"), 0.3);
  }
}

function makeColorFromSeed(seedColor, colorGroup, colorMap) {
  for (let i = 0; i < colorGroup.length; i++) {
    colorMap[colorGroup[i]] = rotateColor(seedColor, i);
  }
}

function makeColorMap(colorSeed) {
  let colorMap = {};
  for (let i = 0; i < COLOR_GROUPS.length; i++) {
    makeColorFromSeed(colorSeed[i], COLOR_GROUPS[i], colorMap);
  }
  addGradientToPool(colorMap);
  return colorMap;
}

function groupedColorMap() {
  colorSeed = {};
  let palette = randomPalette();
  R.random_shuffle(palette);
  for (let i = 0; i < COLOR_GROUPS.length; i++) {
    colorSeed[i] = (i == 2) ? saturate(palette[i]) : palette[i];
  }
  let colorMap = makeColorMap(colorSeed);
  return colorMap;
}
