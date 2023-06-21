class Ship {
  constructor(shipSize, color) {
    this.girdArr = [];
    this.color = color;
    this.shipSize = shipSize;
  }

  isCompleted() {
    return this.girdArr.length === this.shipSize;  
  }

  /**
   *
   * @param {GirdNode} gird
   */

  addGird(gird) {
    this.girdArr.push(gird);
    gird.divColumn.style.backgroundColor = this.color;
    gird.setShip(this);
  }

  /**
   *
   * @param {GirdNode} gird
   * @returns
   */
  // Validate if grid is already occupied and if one the ship is already completed
  validateAddGird(gird) {
    if (this.isCompleted()) return false;
    if (gird.isOccupied()) return false;

    //More Validations
    return true;
  }
}

class GirdNode {
  constructor(row, col, divColumn) {
    this.row = row;
    this.col = col;
    this.divColumn = divColumn;
    this.ship = undefined;
  }

  setShip(ship) {
    this.ship = ship;
  }

  isOccupied() {
    return this.ship !== undefined;
  }
}

/**
 * Explain this class:
 * Explain this constructor:
 */
class BattleshipShipScreen {
  constructor(boardSize, shipSizeArr, shipColorArr) {
    this.boardSize = boardSize;
    this.shipSizeArr = shipSizeArr;
    this.shipColorArr = shipColorArr;
    this.shipBoardArr = [];
    /**
     * @type {Ship[]}
     */
    this.shipArr = [];
    //can u explain this again
  }

  /**
   * Explain this function:
   */
  createGird() {
    let body = document.getElementsByTagName("body")[0];
    

    console.log(`${this.constructor.name}: createGird`);

    for (let row = 0; row < this.boardSize; row++) {
      let divRow = document.createElement("div");
      divRow.className = "gird-row";

      const shipGirdRow = [];

      for (let col = 0; col < this.boardSize; col++) {
        const position = row * this.boardSize + col;
        let divColumn = document.createElement("div");
        divColumn.className = "gird-col";
        divColumn.innerHTML = position;
        divColumn.addEventListener("click", () => {
          this.userClickedGird(row, col);
        });
        divRow.appendChild(divColumn);
        shipGirdRow.push(new GirdNode(row, col, divColumn));
      }

      this.shipBoardArr.push(shipGirdRow);
      body.appendChild(divRow);
      //explain here
    }

    for (let i = 0; i < this.shipSizeArr.length; i++) {
      this.shipArr.push(new Ship(this.shipSizeArr[i], this.shipColorArr[i]));
    }
    console.log(`${this.constructor.name}: shipBoardArr`, this.shipBoardArr);
  }

  userClickedGird(row, col) {
    const gird = this.shipBoardArr[row][col];
    console.log(`User Clicked: Row: ${row}, Col:${col}, Gird:`, gird);

    const currentShipNotCompleted = this.shipArr.find((ship) => {
      return ship.isCompleted() === false;
    });

    if (currentShipNotCompleted !== undefined) {
      if (currentShipNotCompleted.validateAddGird(gird)) {
        currentShipNotCompleted.addGird(gird);
        if (currentShipNotCompleted.isCompleted()) {
          alert(
            `Ship: ${currentShipNotCompleted.shipSize}, Color: ${currentShipNotCompleted.color} is completed.`,
          );
        }
      } else {
        alert(`Invalid Gird.`);
      }
    }
  }
}

/**
 * TODO:
 *  - Search how to add an input box on the screen and capture the board size.
 *  - Learn class, attributes, function, constructor
 *  - Learn 1D, 2D arrays
 *  - Learn Object oriented programming
 */

function initilize() {
  console.log("====Battleship====");
  let _boardSize = 10;
  const _shipSizeArr = [3, 4, 7, 7, 1];
  const _shipColor = ["red", "green", "blue", "magenta", "orange"];
  console.log(`Board Size: ${_boardSize}, Ships: ${_shipSizeArr.join(",")}`);

  console.log("Initilizing the screen.");
  const shipScreen = new BattleshipShipScreen(_boardSize, _shipSizeArr, _shipColor);
  shipScreen.createGird();
  console.log(`Ship Screen:`, shipScreen);
}

initilize();
// function captureBoardSize() {
//   let input = document.createElement("input");
//   input.type = "text";
//   input.placeholder = "Enter board size";

//   let button = document.createElement("button");
//   button.textContent = "Submit";  // Set the text content of the button
//   button.addEventListener("click", function() {
//     let boardSizeInput = document.getElementsByTagName("input")[0];
//     let _boardSize = parseInt(boardSizeInput.value);

//     if (isNaN(_boardSize)) {
//       alert("Please enter a valid board size!");
//       return;
//     }

//     console.log("Board size:", _boardSize);
//   });

//   // Append the input and button to the document body
//   document.body.appendChild(input);
//   document.body.appendChild(button);
// }

// // Call the captureBoardSize function to create the input box and capture the board size
// captureBoardSize();
