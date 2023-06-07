const sentence = 'John Doe (30 years old) is a software developer.';

// Extracting the name and age using capturing groups
const pattern = /(.+)\s\((\d+)\syears\sold\)\sis\s.+developer\./;
const matches = sentence.match(pattern);

if (matches) {
  const name = matches[1];
  const age = parseInt(matches[2]);
  
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
} else {
  console.log('No match found.');
}

const url = 'https://example.com/products?category=electronics&brand=samsung';

// Extracting URL parameters using a regular expression
const pattern = /[?&]([^=#]+)=([^&#]*)/g;
let params = {};
let match;

while ((match = pattern.exec(url)) !== null) {
  const key = decodeURIComponent(match[1]);
  const value = decodeURIComponent(match[2]);
  params[key] = value;
}

console.log(params);
// Output: { category: 'electronics', brand: 'samsung' }
const csvData = `Name,Email,Age
John Doe,john.doe@example.com,30
Jane Smith,jane.smith@example.com,25
Mike Johnson,mike.johnson@example.com,35`;

// Function to parse CSV data and convert it into an array of objects
function parseCSV(csv) {
  const lines = csv.split('\n');
  const headers = lines[0].split(',');
  const data = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].split(',');
    if (line.length !== headers.length) {
      continue;
    }
    const obj = {};
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = line[j];
    }
    data.push(obj);
  }
  return data;
}

// Parsing the CSV data
const parsedData = parseCSV(csvData);

// Filtering the data based on a condition
const filteredData = parsedData.filter(person => person.Age >= 30);

// Extracting specific values from the filtered data
const emails = filteredData.map(person => person.Email);

console.log(emails);
// Output: ['john.doe@example.com', 'mike.johnson@example.com']
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function validatePassword(password) {
  return passwordRegex.test(password);
}
console.log(validatePassword('Pass1234@')); // Output: true
console.log(validatePassword('password')); // Output: false
console.log(validatePassword('PASSWORD1234')); // Output: false
function isAlphabetInRange(character, start, end) {
  const alphabetRegex = new RegExp(`[${start}-${end}]`, 'i');
  return character.match(alphabetRegex) !== null;
}
console.log(isAlphabetInRange('b', 'a', 'z')); // Output: true
console.log(isAlphabetInRange('x', 'a', 'z')); // Output: true
console.log(isAlphabetInRange('A', 'a', 'z')); // Output: false

//lazy matching method
const text = 'The quick brown fox jumps over the lazy dog.';
const lazyRegex = /o.*?o/;

const match = text.match(lazyRegex);

console.log(match);
// Output: ['o']
