/*
정수 n개가 주어졌을 때, n개의 합을 구하는 함수를 작성하시오.
*/

const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split("").map(Number);

let numbers = inputs[0];
let sum = 0;
for (let i = 1; i <= numbers; i++) {
  sum += i;
}
console.log(sum);
