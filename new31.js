// Nested objects and  arrays
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// implimenting function on updateRecords
function updateRecords(records, id, prop, value) {
  //Checking if value is empty string
  if (value === "") {
    //deleting prop from records
    delete records[id][prop];
    //checking if value is empty or not equal to prop
  } else if (prop !== "tracks" && value !== "") {
    value = records[id][prop];
  } else if (prop === "tracks" && value !== "") {
    //using hasOwnProperty method to check if it holds the tracks we need
    if (records[id].hasOwnProperty("tracks") === false) {
      //if not then assigning a new array to it
      records[id][prop] = [];
    }
    records[id][prop].push(value);
  }
  return records;
}

updateRecords(recordCollection, 5439, "artist", "ABBA");

//Practing loops

const arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
//using for loops
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

function multiplyAll(arr) {
  let product = 1;
  //iterating over first array
  for (let i = 0; i < arr.length; i++) {
    //iterating over nested sub-array
    for (let j = 0; j < arr[i].lenght; i++) {
      //multiplying the loops with product
      product = product * arr[i][j];
    }
  }
  return product;
}

multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);
