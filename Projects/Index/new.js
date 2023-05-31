// operators
 let food = pareInt( prompt('how much was the food?'));
 let tip = parseInt( prompt('Tip%?')) / 100;
 let total = food + tip;

alert( 'total');

let Weather = prompt('what is weather today?')
 if (Weather === 'rain'){
    console.log('grab ur umbrella')
 } else {
    console.log('wear ur sunglasses')
 };

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}
function divide(x, y) {
  return x / y;
}
function multiply(x, y) {
  return x * y;
}

const add1 = (x, y) => x + y;
const sub1 = (x, y) => x - y;
const div1 = (x, y) => x / y;
const mul1 = (x, y) => x * y;

const person2 = {
  name: qazi,
  shirt: white
};

const introduce = (shirt, name) => {
    const person2 = {
        name: name,
        shirt: shirt,
        assest : 10000,
        debt : 5000
      };

  const intro = `'hi my name is ${person2.name} and my shirt color is ${person2.shirt} and my net worth is ${person2.assest - person2.debt}'`;
  return intro
};

console.log(introduce('black','karan',''));

const double = (numbers) => {
  let result = [];
  for (const num of numbers) {
    result.push(num * 2);
  }
  return result;
};

console.log(double([1, 23, 4]));

for (let i=0; i<numbers.length; i++){
    console.log(numbers[i])
}
const phrase = "hi guys how u doin";
const letterCounter = () => {
  return phrase.length;
};
console.log(letterCounter())

const sumArray = (numbers) => {
    let result = 0
    for(const num of numbers){
        // console.log(num);
        result = result + num
    }
return result
}

console.log(sumArray([1,2,3,4,5,6,7,8,9]))

const max = (numbers) => {
    let result = numbers[0]
    for(const num of numbers){
        if(num > result){
            result = num
        }
    }

    return result
}
console.log(max([1,2,3,5,6,23,12,3,4]))

const letterFrequency = (phrase) => {
  let frequency = {};
  for (const letter of phrase) {
    if (letter in frequency) {
      frequency[letter] = frequency[letter] ++ ;
    }else{
        frequency[letter] = 1
    }
  }
  return frequency
};
console.log(letterFrequency('wass up my dog'))
const wordFrequency = (phrase) => {
  let frequency = {}
  const words = phrase.split(' ')
  for(const word of words){
   if(word in frequency){
    frequency[word] ++
   }else{
    frequency[word] = 1
   }
  }
  console.log(words)

  return frequency
}

console.log(wordFrequency('wass up wass dawg'))

function reverse(number) {
  number = number + "";
  return number.split("").reverse().join("");
}
console.log(reverse(24));

function combination(str) {
  let arr = [];
  for (let x = 0, y = 1; x < str.length; x++, y++) {
    arr[x] = str.combinations(x, y);
  }
  let combi = [];
  let temp = "";
  let slent = Math.pow(2, arr.length);

  for (let i = 0; i < slent; i++) {
    temp = "";
    for (let j = 0; j < arr.length; j++) {
      if (i & Math.pow(2, j)) {
        temp += arr[j];
      }
    }
    if (temp !== "") {
      combi.push(temp);
    }
  }
  console.log(combi.join("\n"));
}

function substrings(str1) {
  var array1 = [];
  for (var x = 0, y = 1; x < str1.length; x++, y++) {
    array1[x] = str1.substring(x, y);
  }
  var combi = [];
  var temp = "";
  var slent = Math.pow(2, array1.length);

  for (var i = 0; i < slent; i++) {
    temp = "";
    for (var j = 0; j < array1.length; j++) {
      if (i & Math.pow(2, j)) {
        temp += array1[j];
      }
    }
    if (temp !== "") {
      combi.push(temp);
    }
  }
  console.log(combi.join("\n"));
}
console.log(substrings("life"));

function alphabets(str) {
  return str.split("").sort().join("");
}

console.log(alphabets("webmaster"));

function sentence(str){
  return str.toUpperCase()
}

console.log(sentence("hey man"))

function upperCase(str){
  const words = str.split(' ')
  let capitalizedWords = []

  for(let i = 0; i<words.length;i++){
    let capitalizedWord = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    capitalizedWords.push(capitalizedWord)
  }
  const capitalizedString = capitalizedWords.join(' ');
  return capitalizedString;
}

console.log(upperCase("john doe"))

function reverse(n){
  let number = n + "";
 return  number.split("").reverse().join("")
}

console.log(reverse(23))

function upperCase(str){
   const words = str.split(' ')
   let capitalizedWords = []
    for( let i=0; i < words.length; i++){
      let capitalizedWord = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      capitalizedWords.push(capitalizedWord);
    }
    const capitalizedString = capitalizedWords.join(' ');
    return capitalizedString;
}
console.log(upperCase('wass up'))

function doMath(n){
  n = Number(n);
  if (n){
    let newNumber= (n + 100)/3;
    return newNumber;

  }else{
    console.log('write a number please')
    return false;

  }
}
console.log(doMath('hi'))

function celusis(cel) {
  return(cel * 9 / 5) + 32;
}
console.log(celusis(21));
function areaOfRectangle(l, b) {
  return `The area of rectangle is ${l * b}`;
}

console.log(areaOfRectangle(21, 12));

function circleValues(radius) {
  return `The area of circle is ${radius * 2} and the Perimeter of circle is ${radius * 2 * Math.PI}`;
}

console.log(circleValues(32));

function reverse(n) {
  let number = n + "";
  return number.split("").reverse().join("");
}

console.log(reverse(21));

function Division(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    console.log("Division Error");
    return null;
  }
}

console.log(Division(50, 5));

function exponentNumber(base, exponent) {
  return Math.pow(base, exponent);
}

console.log(exponentNumber(4, 2));

function squareRoot(n) {
  if (n >= 0) {
    return Math.sqrt(n);
  } else {
    console.log(`Error: Cannot calculate square root of ${n}`);
    return null;
  }
}

console.log(squareRoot(12));

function fibo(n) {
  let sequence = [0, 1];
  if (n <= 1) {
    return sequence.slice(0, n + 1);
  } else {
    while (sequence.length <= n) {
      let nextNum = sequence[sequence.length - 1] + sequence[sequence.length - 2];
      sequence.push(nextNum);
    }
    return sequence;
  }
}
console.log(fibo(21));

function absoluteValue(n) {
  if (n >= 0) {
    return n;
  } else {
    return -n;
  }
}

console.log(absoluteValue(-98));

function isEven(number) {
  if (number % 2 === 0) {
    return `${number} is an even number`;
  } else {
    return `${number} is not an even number`;
  }
}

console.log(isEven(32));
console.log(isEven(11));

function isPrimeNumber(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return `${number} is not a prime number`;
    }
  }
  return `${number} is a prime number`;
}

console.log(isPrimeNumber(21));
console.log(isPrimeNumber(-32));
console.log(isPrimeNumber(7));

function reverseString(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}

console.log(reverse(43));

function reverseNumber(n) {
  let str = n + "";
  return str.split("").reverse().join("");
}
console.log(reverseNumber(81));

function countOccurence(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

function maxNumber(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

console.log(maxNumber([1, 2, 3, 42, 12]));

function reverse(number) {
  let digit = number + "";
  return digit.split("").reverse().join("");
}
console.log(reverse(2421));

function minNumber(number) {
  let min = number[0];
  for (let i = 1; i < number.length; i++) {
    if (number[i] < min) {
      min = number[i];
    }
  }
  return min;
}

console.log(minNumber([12, 323, 41, 1, 23, 4, 21]));

function arrayEqual(arr1, arr2) {
  if ((arr1, length !== arr2.length)) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

console.log(calculateAverage(43));
