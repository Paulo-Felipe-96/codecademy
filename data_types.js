/**
 * For much more details, go to https://www.codecademy.com/resources/docs/javascript/data-types?page_ref=catalog
 */

console.log("JavaScript");
console.log(2011);
console.log("Woohoo! I love to code! #codecademy");
console.log(20.49);

const greaterOrdinalNum = 1234567890123456n; //2^52-1
const lessOrdinalNum = 1234567890123456n; //-(2^52-1)
console.log(greaterOrdinalNum);
console.log(-(2 ^ (52 - 1)));

// Map and Filter examples

const characters = [
  {
    name: "Sean",
    age: 20,
    isAlive: false,
  },
  {
    name: "Charles",
    age: 39,
    isAlive: true,
  },
  {
    name: "Arthur",
    age: 34,
    isAlive: false,
  },
];

// with map example

const anyMapedCharacter = characters.map((anyChar) => anyChar);
console.log("Any:");
console.log(nameOfMapedCharacter(anyMapedCharacter));
console.log();

// with filter example

function isAliveCharacter(character) {
  return character.isAlive === true;
}

function isNotAliveCharacter(character) {
  return character.isAlive === false;
}

function nameOfMapedCharacter(character) {
  return character.map((char) => char.name);
}

// named function callback
const aliveCharacters = characters.filter(isAliveCharacter);
console.log("Alive only:");
console.log(nameOfMapedCharacter(aliveCharacters));
console.log();

// with no named function callback
const notAliveCharacters = characters.filter(
  (character) => character.isAlive === false
);

console.log("Not alive only:");
console.log(nameOfMapedCharacter(notAliveCharacters));
console.log();
