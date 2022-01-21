function genTokenData(projectNum) {
  let data = {};
  let hash = "0x";
  for (var i = 0; i < 64; i++) {
    hash += Math.floor(Math.random() * 16).toString(16);
  }
  data.hash = hash;
  data.tokenId = (projectNum * 1000000 + Math.floor(Math.random() * 1000)).toString();
  console.log(data);
  return data;
}
let tokenData = genTokenData(413);
  // let tokenData = {hash: "0x6ca6c89814cc270cb415517011267790fe7a12f246df905966a194f4bb9ad28d", tokenId: "413000835"};