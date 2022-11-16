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
  animal,
  { name: "dog", species: "canine" },
  { name: "cat", species: "feline" },
  { name: "bird", species: "avian" },
  { name: "fish", species: "aquatic" },
  { name: "lizard", species: "reptile" },
];

for (let animal of animals_obj) {
  console.log(`${animal["name"]}, ${animal["species"]}`);
  console.log();
}
