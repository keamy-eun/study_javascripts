/*
정수 n개가 주어졌을 때, n개의 합을 구하는 함수를 작성하시오.
*/

const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);

let numbers = inputs;

function number_sum(length) {
  let sum = 0;
  for (let i = 0; i < length; i++) {
    sum += numbers[i];
  }
  return sum;
}

console.log(number_sum(numbers.length));

console.log(sum);
