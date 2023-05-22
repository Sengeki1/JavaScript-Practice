// My age
const myAge = 20;

// Early Years
let earlyYears = 2;

earlyYears = earlyYears * 10.5;

// Later Years
let laterYears = myAge - 2;

// Calculate the number of dog years
laterYears = laterYears * 4;

console.log(earlyYears, laterYears);

// Adding the variables into my new variable
const myAgeInDogYears = (earlyYears, laterYears);

// Return my name with lowercase letters 
const myName = 'Marco'.toLowerCase();

// Using string interpolation to display the values
console.log(`My name is ${myName}. I am ${myAge} years old in human years wich ${myAgeInDogYears} years old in dog years.`)