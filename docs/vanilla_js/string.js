let number_first = 3;
let string_second = "5";

console.log(number_first + string_second);
// recommanded this way
let concate_string = `${number_first}${string_second}`;
console.log();

string_second = "A";
console.log(number_first + string_second);

// Strings
let animal = "tiger";
console.log(`${animal}`);

let sentance = "  5 2 6  ";
let trims = sentance.trim(); // 공백제거
let splits = trims.split(" "); // 공백으로 배열 생성
let maps = splits.map(Number); // String -> Number
console.log(maps[0] + maps[1] + maps[2]);

let inputs = sentance.trim().split(" ").map(Number);
console.log(inputs[0] + inputs[1] + inputs[2]);
