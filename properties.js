// Every instance of a data type have a property can be accessed by period or "dot operator"
console.log("Teaching the world how to code".length);

const names = [
  "Paul",
  "Sean",
  "Charles",
  "Arthur",
  "John",
  "Abigail",
  "Jac",
  "Tenesee Walker",
];

const mapProper = names.map((name) => name);

const filterProper = names.filter((name) => name.includes("A"));

const reduceProper = names.reduce((acc, curr) => {
  const total = acc + " " + curr;
  return total;
}, "");

function removeSpacesAroundStrings(any) {
  return any.trim();
}

console.log(mapProper);
console.log(filterProper);
console.log(removeSpacesAroundStrings(reduceProper));
