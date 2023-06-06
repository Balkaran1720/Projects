// Example 1: Shape constructor with prototype method
function Shape(color) {
  this.color = color;
}

Shape.prototype.getColor = function () {
  return this.color;
};

// Example 2: Person constructor with private variable and method
function Person(name) {
  var privateVariable = "I am private!";

  var privateMethod = function () {
    console.log("This is a private method.");
  };

  this.name = name;

  this.publicMethod = function () {
    console.log("This is a public method.");
    console.log(privateVariable);
    privateMethod();
  };
}

// Example 3: Counter constructor using closure
function Counter() {
  var count = 0;

  this.increment = function () {
    count++;
    console.log("Count: " + count);
  };

  this.decrement = function () {
    count--;
    console.log("Count: " + count);
  };
}

// Example 4: Calculator constructor with static method
function Calculator() {}

Calculator.sum = function (a, b) {
  return a + b;
};

// Example 5: Playlist constructor with array as property
function Playlist() {
  this.songs = [];
}

Playlist.prototype.addSong = function (song) {
  this.songs.push(song);
};

// Example 6: Timer constructor using setInterval
function Timer() {
  this.seconds = 0;
  this.intervalId = null;
}

Timer.prototype.start = function () {
  var self = this;
  this.intervalId = setInterval(function () {
    self.seconds++;
    console.log("Seconds: " + self.seconds);
  }, 1000);
};

Timer.prototype.stop = function () {
  clearInterval(this.intervalId);
};

// Example 7: Bank constructor with private balance variable
function Bank() {
  var balance = 0;

  this.deposit = function (amount) {
    balance += amount;
    console.log("Deposited: $" + amount);
    console.log("Balance: $" + balance);
  };

  this.withdraw = function (amount) {
    if (amount <= balance) {
      balance -= amount;
      console.log("Withdrawn: $" + amount);
      console.log("Balance: $" + balance);
    } else {
      console.log("Insufficient balance.");
    }
  };
}

// Example 1: Creating a new instance of Person
const person1 = new Person("John", 30);

// Example 2: Creating a new instance of Car
const car1 = new Car("Toyota", "Camry", 2022);

// Example 3: Creating a new instance of Book
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);

// Example 1: Person constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Example 2: Car constructor
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

// Example 3: Book constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// Example 4: Animal constructor
function Animal(name, species) {
  this.name = name;
  this.species = species;
}

// Example 5: Product constructor
function Product(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
}

// Example 6: Employee constructor
function Employee(name, position, salary) {
  this.name = name;
  this.position = position;
  this.salary = salary;
}
