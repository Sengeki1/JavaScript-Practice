// The value saved in the variable kelvin will stay constant
const kelvin = 0;

// The variable celsius will store the result of the subtraction/conversion.
const celsius = kelvin - 273;

// Conversion of celsius to fahrenheit 
let fahrenheit = celsius * (9/5) + 32;

// This method from the built-in Math object will round down the Fahrenheit Temperature
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
// -------------- 

let newton = celsius * (33/100);
newton = Math.floor(newton)

console.log(`The temperature is ${newton} degrees newton.`);