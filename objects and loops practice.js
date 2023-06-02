// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // looping over arguments
  for (let i = 0; i < contacts.length; i++) {
    //checking if firstName exist in contacts
    if (contacts[i].firstName === name) {
      //checking if contacts has properties
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}
// running the function to check if its wroking
lookUpProfile("Akira", "likes");

// Define an object
const person = {
  name: "John Doe",
  age: 30,
  occupation: "Engineer",
};

// Loop over the object properties using for...in loop
console.log("Object Properties (for...in loop):");
for (let key in person) {
  console.log(key + ": " + person[key]);
}

// Create an array of objects
const students = [
  {
    name: "Alice",
    age: 20,
    grade: "A",
  },
  {
    name: "Bob",
    age: 22,
    grade: "B",
  },
  {
    name: "Charlie",
    age: 19,
    grade: "C",
  },
];

// Loop over the array of objects using for loop
console.log("\nArray of Objects (for loop):");
for (let i = 0; i < students.length; i++) {
  console.log("Student " + (i + 1) + ":");
  for (let key in students[i]) {
    console.log(key + ": " + students[i][key]);
  }
  console.log("--------------------");
}

// Define a class
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getInfo() {
    return this.year + " " + this.make + " " + this.model;
  }
}

// Create instances of the Car class
const car1 = new Car("Toyota", "Camry", 2020);
const car2 = new Car("Honda", "Civic", 2021);
const car3 = new Car("Ford", "Mustang", 2019);

// Store the car instances in an array
const cars = [car1, car2, car3];

// Loop over the array of car objects using forEach loop
console.log("\nArray of Car Objects (forEach loop):");
cars.forEach((car, index) => {
  console.log("Car " + (index + 1) + ": " + car.getInfo());
});

// Loop over the array of car objects using for...of loop
console.log("\nArray of Car Objects (for...of loop):");
for (let car of cars) {
  console.log(car.getInfo());
}
