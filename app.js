function plus(number) {
  return (plusNumber) => {
    return number + plusNumber;
  };
}
let plus15 = plus(15);
console.log(plus15(10));

let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];

users.forEach((e) => {
  console.log(e.name);
});

let newArr = [];
users.map((e) => {
  newArr.push({ name: e.name, score: e.score });
});
console.log(newArr);

let filteredArr = users.filter((e) => e.isActive === true);
console.log(filteredArr);

newArr = users.sort(function (a, b) {
  return b.score - a.score;
});
console.log(newArr);

let answer = users.reduce((sum, e) => {
  return sum + e.score;
}, 0);
let avg =
  users.reduce((sum, e) => {
    return sum + e.score;
  }, 0) / users.length;

console.log(answer, `${avg} is the avg score of the ${users.length} Hobbits.`);
