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

// Map and Filter examples with Red Dead Remption 2 characters

// with map example
const Characters = (() => {
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

  // with filter example

  function isAliveCharacter(character, status) {
    return status === "yes"
      ? character.isAlive === true
      : character.isAlive === false;
  }

  // only name returned of maped
  function nameOfMapedCharacter(character) {
    return character.map((char) => char.name);
  }

  // name and alive status returned
  function characterAliveStatusAndName(character) {
    return character.map((char) => {
      const info = {
        nome: char.name,
        isAlive: char.isAlive === true ? "alive" : "dead",
      };
      return info;
    });
  }

  // named function callback and "yes" or "no" about alive status
  const aliveCharacters = characters.filter((char) =>
    isAliveCharacter(char, "no")
  );

  const notAliveCharacters = characters.filter(
    (character) => character.isAlive === false
  );

  return {
    isAliveCharacter,
    nameOfMapedCharacter,
    characterAliveStatusAndName,
    aliveCharacters,
    notAliveCharacters,
    characters,
  };
})();

const {
  isAliveCharacter,
  nameOfMapedCharacter,
  characterAliveStatusAndName,
  aliveCharacters,
  notAliveCharacters,
  characters,
} = Characters;

console.log("Filtered chars:");
console.log(nameOfMapedCharacter(aliveCharacters));
console.log("Name and Status");
console.log(characterAliveStatusAndName(aliveCharacters));
console.log();

// with no named function callback

console.log("Not alive only:");
console.log(nameOfMapedCharacter(notAliveCharacters));
console.log();

const anyMapedCharacter = characters.map((anyChar) => anyChar);
console.log("Any:");
console.log(nameOfMapedCharacter(anyMapedCharacter));
console.log();
