function decodePointMap() {
  let POINTMAP = {};
  for (let i = 0; i < codes.length; i++) {
    if (!(i in POINTMAP)) {
      POINTMAP[i] = [];
    }
    for (let j = 0; j< codes[i].length; j++) {
      POINTMAP[i][j] = parseInt(codes[i][j], 16);
    }
  }
  return POINTMAP;
}