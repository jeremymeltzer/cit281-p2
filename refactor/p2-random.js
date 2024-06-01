/*
    CIT 281 Project 2
    Name: Jeremy Meltzer
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";

for (let i = 0; i < getRandomInteger(5, 26); i++) {
  result += alphabet[getRandomInteger(1, alphabet.length - 1)];
  getRandomLetter();
}

// Returns a single, random, lowercase letter
function getRandomLetter() {
  return(alphabet[getRandomInteger(0,alphabet.length - 1)])
} 

// Returns a random length string
function getRandomString(minLength, maxLength) {
  let result2 = "";
  for (let i = 0; i < getRandomInteger(minLength, maxLength); i++) {
    result2 += getRandomLetter()
  }
  return result2;
}

// Returns a string in ascending order
function getSortedString(string){
  return [...string].sort().join('');
}

console.log(result)
console.log(getRandomString(10,20))
