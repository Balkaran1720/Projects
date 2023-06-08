function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];

  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray
    let row = [];
    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

// Debugging Example: Null Reference Error (Using let)

// Function to concatenate two strings
function concatenateStrings(a, b) {
  if (a === null) {
    a = "";
  }
  if (b === null) {
    b = "";
  }

  let result = a + " " + b;
  return result;
}

// Test case
let string1 = "Hello";
let string2 = null;
let concatenatedString = concatenateStrings(string1, string2);
console.log("Concatenated String: " + concatenatedString);

// Debugging Example: Finding the Sum of Numbers in an Array

// Function to find the sum of numbers in an array
function findSum(numbers) {
  let sum = 0;

  // Iterate over each number in the array
  for (let i = 0; i < numbers.length; i++) {
    // Check if the current element is a number
    if (typeof numbers[i] !== "number") {
      console.log("Invalid number found at index", i);
      continue; // Skip to the next iteration
    }

    sum += numbers[i];
  }

  return sum;
}

// Test case
let numberList = [1, 2, 3, 4, 5];
let sum = findSum(numberList);
console.log("Sum:", sum);

// Additional test cases
numberList = [10, 20, "30", 40, 50];
sum = findSum(numberList);
console.log("Sum:", sum);

numberList = [1, 2, 3, null, 5];
sum = findSum(numberList);
console.log("Sum:", sum);

numberList = [];
sum = findSum(numberList);
console.log("Sum:", sum);

numberList = [1, 2, 3, 4, 5];
numberList.push("6");
sum = findSum(numberList);
console.log("Sum:", sum);

numberList = [1, 2, 3, 4, 5];
numberList[2] = undefined;
sum = findSum(numberList);
console.log("Sum:", sum);

numberList = [1, 2, 3, 4, 5];
numberList[10] = 10;
sum = findSum(numberList);
console.log("Sum:", sum);

// Debugging Example: String Conversion and Character Filtering

// Function to convert a string to uppercase and remove non-alphabetic characters
function convertString(str) {
  let result = "";

  // Iterate over each character in the string
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // Check if the character is alphabetic
    if (/[a-zA-Z]/.test(char)) {
      result += char.toUpperCase();
    }
  }

  return result;
}

// Test case
let inputString = "Hello, World! 123";
let convertedString = convertString(inputString);
console.log("Converted String:", convertedString);

// Additional test cases
inputString = "OpenAI GPT-3.5 Model";
convertedString = convertString(inputString);
console.log("Converted String:", convertedString);

inputString = "Testing...123";
convertedString = convertString(inputString);
console.log("Converted String:", convertedString);

inputString = "abcdefghijklmnopqrstuvwxyz";
convertedString = convertString(inputString);
console.log("Converted String:", convertedString);

inputString = "";
convertedString = convertString(inputString);
console.log("Converted String:", convertedString);

inputString = "NoUppercaseHere";
convertedString = convertString(inputString);
console.log("Converted String:", convertedString);

inputString = "Testing@OpenAI";
convertedString = convertString(inputString);
console.log("Converted String:", convertedString);
