console.log(5);
console.log(1);
console.log("Hi there".length === 8);

let a = 10;
let b = 5;
console.log(10 % 2 === 1 ? "Sim" : "Não");

// calculates # of weeks in a year, rounds down to nearest integer
const weeksInYear = Math.floor(365 / 7);

// calculates the number of days left over after 365 is divded by 7
const daysLeftOver = 365 % 7;

console.log(
  "A year has " + weeksInYear + " weeks and " + daysLeftOver + " days"
);

let number = [{ nome: "Paulo" }, { nome: "Suzana" }];

let m = number.map((n) => n.nome + ` will married!`);
console.log(m);

let age = 11;

function isOfAge(age) {
  return age >= 18 ? "Yes" : "No";
}

console.log(`You're of age? ${isOfAge(age)}`);

let undef;
console.log(undef);
