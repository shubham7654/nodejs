const _ = require("lodash");

const arr = [4, [3, [3]]];

console.log(_.flattenDeep(arr));