//extract name and age in its own array

const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];
const age = people.map((person) => {
  return {
    name: person.name,
    age: person.yearOfDeath - person.yearOfBirth,
  };
});
// console.log(age[0]);
const findTheOldest = function (arr) {
  arr.age;
  const ages = age.age;
  console.log(ages);
  const oldest = ages.sort((a, b) => a - b);
  return oldest;
};
console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
