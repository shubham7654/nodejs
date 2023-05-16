const { readFileSync, writeFileSync, write } = require("fs");

const first = readFileSync("../content/first.txt", "utf-8");
const second = readFileSync("../content/second.txt", "utf-8");

writeFileSync(
  "../content/third.txt",
  `We are both the same: ${first} : ${second}`,
  { flag: "a" }
);

const third = readFileSync("../content/third.txt", "utf-8");

console.log(third);
