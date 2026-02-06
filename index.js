//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    // tot_temperature_in_fahrenheit,
    // tot_temperature_in_celsius,
    // avg_temperature_in_fahrenheit,
    // avg_temperature_in_celsius
};
// Step 1: Create variables for the data recorded (temperatures for 30 days)
// Step 1: Temperature data variables
const day1TempF = 32;
const day2TempC = 25;
const day3TempF = 70;
const day4TempC = 18;
const day5TempF = 80;
const day6TempC = 15;
const day7TempF = 72;
const day8TempC = 28;
const day9TempF = 68;
const day10TempC = 20;
const day11TempF = 75;
const day12TempC = 23;
const day13TempF = 82;
const day14TempC = 30;
const day15TempF = 65;
const day16TempC = 22;
const day17TempF = 77;
const day18TempC = 26;
const day19TempF = 78;
const day20TempC = 24;
const day21TempF = 73;
const day22TempC = 21;
const day23TempF = 79;
const day24TempC = 27;
const day25TempF = 71;
const day26TempC = 19;
const day27TempF = 74;
const day28TempC = 17;
const day29TempF = 76;
const day30TempC = 29;

// Step 2: Conversion functions
function fToC(f) {
  return (f - 32) * 5 / 9;
}

function cToF(c) {
  return (c * 9 / 5) + 32;
}

// Step 3: Calculate total temperatures
let tot_temperature_in_fahrenheit = 0;
let tot_temperature_in_celsius = 0;

tot_temperature_in_fahrenheit += day1TempF;
tot_temperature_in_celsius += fToC(day1TempF);

tot_temperature_in_fahrenheit += cToF(day2TempC);
tot_temperature_in_celsius += day2TempC;

tot_temperature_in_fahrenheit += day3TempF;
tot_temperature_in_celsius += fToC(day3TempF);

tot_temperature_in_fahrenheit += cToF(day4TempC);
tot_temperature_in_celsius += day4TempC;

tot_temperature_in_fahrenheit += day5TempF;
tot_temperature_in_celsius += fToC(day5TempF);

tot_temperature_in_fahrenheit += cToF(day6TempC);
tot_temperature_in_celsius += day6TempC;

tot_temperature_in_fahrenheit += day7TempF;
tot_temperature_in_celsius += fToC(day7TempF);

tot_temperature_in_fahrenheit += cToF(day8TempC);
tot_temperature_in_celsius += day8TempC;

tot_temperature_in_fahrenheit += day9TempF;
tot_temperature_in_celsius += fToC(day9TempF);

tot_temperature_in_fahrenheit += cToF(day10TempC);
tot_temperature_in_celsius += day10TempC;

tot_temperature_in_fahrenheit += day11TempF;
tot_temperature_in_celsius += fToC(day11TempF);

tot_temperature_in_fahrenheit += cToF(day12TempC);
tot_temperature_in_celsius += day12TempC;

tot_temperature_in_fahrenheit += day13TempF;
tot_temperature_in_celsius += fToC(day13TempF);

tot_temperature_in_fahrenheit += cToF(day14TempC);
tot_temperature_in_celsius += day14TempC;

tot_temperature_in_fahrenheit += day15TempF;
tot_temperature_in_celsius += fToC(day15TempF);

tot_temperature_in_fahrenheit += cToF(day16TempC);
tot_temperature_in_celsius += day16TempC;

tot_temperature_in_fahrenheit += day17TempF;
tot_temperature_in_celsius += fToC(day17TempF);

tot_temperature_in_fahrenheit += cToF(day18TempC);
tot_temperature_in_celsius += day18TempC;

tot_temperature_in_fahrenheit += day19TempF;
tot_temperature_in_celsius += fToC(day19TempF);

tot_temperature_in_fahrenheit += cToF(day20TempC);
tot_temperature_in_celsius += day20TempC;

tot_temperature_in_fahrenheit += day21TempF;
tot_temperature_in_celsius += fToC(day21TempF);

tot_temperature_in_fahrenheit += cToF(day22TempC);
tot_temperature_in_celsius += day22TempC;

tot_temperature_in_fahrenheit += day23TempF;
tot_temperature_in_celsius += fToC(day23TempF);

tot_temperature_in_fahrenheit += cToF(day24TempC);
tot_temperature_in_celsius += day24TempC;

tot_temperature_in_fahrenheit += day25TempF;
tot_temperature_in_celsius += fToC(day25TempF);

tot_temperature_in_fahrenheit += cToF(day26TempC);
tot_temperature_in_celsius += day26TempC;

tot_temperature_in_fahrenheit += day27TempF;
tot_temperature_in_celsius += fToC(day27TempF);

tot_temperature_in_fahrenheit += cToF(day28TempC);
tot_temperature_in_celsius += day28TempC;

tot_temperature_in_fahrenheit += day29TempF;
tot_temperature_in_celsius += fToC(day29TempF);

tot_temperature_in_fahrenheit += cToF(day30TempC);
tot_temperature_in_celsius += day30TempC;

// Step 4: Calculate average temperatures
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;
const avg_temperature_in_celsius = tot_temperature_in_celsius / 30;

// Step 5: Optional console logs
console.log("Total temperature in Fahrenheit:", tot_temperature_in_fahrenheit.toFixed(2));
console.log("Total temperature in Celsius:", tot_temperature_in_celsius.toFixed(2));
console.log("Average temperature in Fahrenheit:", avg_temperature_in_fahrenheit.toFixed(2));
console.log("Average temperature in Celsius:", avg_temperature_in_celsius.toFixed(2));

// Step 6: Export variables for testing
module.exports = {
  tot_temperature_in_fahrenheit,
  tot_temperature_in_celsius,
  avg_temperature_in_fahrenheit,
  avg_temperature_in_celsius
};
console.log("Total Fahrenheit:", tot_temperature_in_fahrenheit);
console.log("Total Celsius:", tot_temperature_in_celsius);
console.log("Average Fahrenheit:", avg_temperature_in_fahrenheit);
console.log("Average Celsius:", avg_temperature_in_celsius);
