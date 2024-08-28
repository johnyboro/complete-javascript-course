// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let string = ``;
  for (let i = 0; i < arr.length; i++) {
    string += `... ${arr[i]}C in ${i + 1} days `;
  }
  string += `...`;
  console.log(string);
}

console.log(`Test data 1:`);
printForecast(testData1);
console.log(`Test data 2:`);
printForecast(testData2);
