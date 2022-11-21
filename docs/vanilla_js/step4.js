/*
1)문제입력
문제
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 테스트 케이스의 개수 T가 주어진다.

각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

출력
각 테스트 케이스마다 A+B를 출력한다.

2)유추파악


3)주요단어선정
정수N입력 : input_N

4)테스트케이스
5
1 1
2 3
3 4
9 8
5 2
->
2
5
7
17
7

5) 해결순서
N 입력 - for문(N번)으로 입력받는 두 수의 합을 출력
*/

const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\r\n")
  .map(Number); //숫자로 바꿔서 배열로 만들어줌

for (let i = 0; i < inputs[0]; i++) {
  let a = inputs[i].split(" ");
  console.log(a[0] + a[1]);
}

console.log();
