// requirement: make sure to `npm install readline-sync` before running the script

const FREEZING_ZERO = 32;

function celsiusToFahrenheit(tempCelsius) {
  return ((tempCelsius * 9 / 5) + FREEZING_ZERO);
}

let readlineSync = require('readline-sync');
let tempCelsius = readlineSync.question("Enter the temperature in Celsius: ");
console.log(`You entered: ${tempCelsius} C`);

let convertedTemp = Math.round(celsiusToFahrenheit(tempCelsius));
console.log(`${tempCelsius} degrees Celsius is ${convertedTemp} degrees Fahrenheit.`);
