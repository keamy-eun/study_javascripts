const animals = ["dog", "cat", "bird", "fish", "lizard"];

// Normal Way
for (let i = 0; i < animals.length; i++) {
  console.log(`${animals[i]}`);
}

// for iterable (반복 가능한 객체)
for (a of animals) {
  console.log(`${a}`);
}

const animals_obj = [
  { name: "dog", species: "canine" },
  { name: "cat", species: "feline" },
  { name: "bird", species: "avian" },
  { name: "fish", species: "aquatic" },
  { name: "lizard", species: "reptile" },
];

for (animal of animals_obj) {
  console.log(`${animal["name"]}, ${animal["species"]}`);
  console.log();
}

// forEach
const array1 = ["a", "b", "c"];

array1.forEach((element) => console.log(element));

// Arrow Function (매개변수가 하나일때 괄호 생략, 리턴값이 하나일때 대괄호 생략)
let arrowFunction = (element, index) => {
  console.log(`${element}, index ${index}`);
};
array1.forEach(arrowFunction);

// Normal Function
function elementNormal(element) {
  console.log(element);
}
array1.forEach();
