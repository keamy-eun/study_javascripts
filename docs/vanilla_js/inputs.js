const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);
let cal1 = inputs[0] + inputs[1];
let cal2 = inputs[0] - inputs[1];
let cal3 = inputs[0] * inputs[1];
let cal4 = inputs[0] / inputs[1];
let cal5 = inputs[0] % inputs[1];

console.log(cal1);
console.log(cal2);
console.log(cal3);
console.log(parseInt(cal4));
console.log(cal5);
