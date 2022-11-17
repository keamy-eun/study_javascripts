// Normal Function
function sum(a, b) {
  return a + b;
}
console.log(sum(1, 3));

// Anonymouse Function
let calculatieSum = function sum(a, b) {
  return a + b;
};
console.log(calculatieSum(1, 3));

//☆ Arrow Fuction ☆
let calculatieSum_sec = (a, b) => {
  return a + b;
};
console.log(calculatieSum_sec(1, 3));

// rest parameters 가변 파라미터
function printRestParams(...args) {
  rest = (args) => console.log(args);
  args.forEach(rest);
}
printRestParams(1, 3, 5, 7, 9);
printRestParams(2, [4, 6], "abc");
