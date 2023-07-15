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

  addShipPositions(shipPositions) {
    this.shipPositions = shipPositions.map((gird) => ({ row: gird.row, col: gird.col }));
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

class BattleshipShipScreen {
  constructor(boardSize, shipSizeArrPlayer1, shipColorArrPlayer1, shipSizeArrPlayer2, shipColorArrPlayer2, numPlayers) {
    this.boardSize = boardSize;
    this.shipSizeArrPlayer1 = shipSizeArrPlayer1;
    this.shipColorArrPlayer1 = shipColorArrPlayer1;
    this.shipSizeArrPlayer2 = shipSizeArrPlayer2;
    this.shipColorArrPlayer2 = shipColorArrPlayer2;
    this.shipBoardArr = [];
    this.numPlayers = numPlayers;
    this.currentPlayer = 1;
    this.playerOneFinished = false;
    this.shipPositions = [];
    /**
     * @type {Ship[]}
     */
    this.shipArr = [];
    this.shipArrPlayer1 = [];
    this.shipArrPlayer2 = [];
  }

  //Creating grids to make row and coloumns
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
    }
    //Create ships for player 1
    for (let i = 0; i < this.shipSizeArrPlayer1.length; i++) {
      this.shipArrPlayer1.push(new Ship(this.shipSizeArrPlayer1[i], this.shipColorArrPlayer1[i]));
    }
    //create ships for player 2
    for (let i = 0; i < this.shipSizeArrPlayer2.length; i++) {
      this.shipArrPlayer2.push(new Ship(this.shipSizeArrPlayer2[i], this.shipColorArrPlayer2[i]));
    }
    console.log(`${this.constructor.name}: shipArrPlayer1`, this.shipArrPlayer1);
    console.log(`${this.constructor.name}: shipArrPlayer2`, this.shipArrPlayer2);
  }

  //   for (let i = 0; i < this.shipSizeArr.length; i++) {
  //     this.shipArr.push(new Ship(this.shipSizeArr[i], this.shipColorArr[i]));
  //   }
  //   console.log(`${this.constructor.name}: shipBoardArr`, this.shipBoardArr);
  // }

  //Checking where user is clicking
  userClickedGird(row, col) {
    const gird = this.shipBoardArr[row][col];
    console.log(`User Clicked: Row: ${row}, Col:${col}, Gird:`, gird);

    const currentShipNotCompleted = this.shipArr.find((ship) => {
      return ship.isCompleted() === false;
    });
    if (this.currentPlayer === 1 && !this.playerOneFinished) {
      if (currentShipNotCompleted !== undefined) {
        if (currentShipNotCompleted.validateAddGird(gird)) {
          currentShipNotCompleted.addGird(gird);
          if (currentShipNotCompleted.isCompleted()) {
            alert(
              `Ship size of : ${currentShipNotCompleted.shipSize} , And color: ${currentShipNotCompleted.color} is completed.`,
            );
            this.addShipPositions(currentShipNotCompleted.shipPositions);
            const allShipsPlaced = this.shipArr.every((ship) => ship.isCompleted());
            if (allShipsPlaced) {
              this.playerOneFinished = true;
              alert("Player One has finished placing their ships");
              this.resetGird(); //reset the grid for Player 2
              this.currentPlayer = 2;
              alert("Player Two Turn");
            }
          }
        }
      }
    } else if (this.currentPlayer === 2 && this.playerOneFinished) {
      if (currentShipNotCompleted !== undefined)
        if (currentShipNotCompleted.validateAddGird(gird)) {
          currentShipNotCompleted.addGird(gird);
          if (currentShipNotCompleted.isCompleted()) {
            alert(
              `Ship size of : ${currentShipNotCompleted.shipSize} , And color: ${currentShipNotCompleted.color} is completed.`,
            );
            const allShipsPlaced = this.shipArr.every((ship) => ship.isCompleted());
            if (allShipsPlaced) {
              alert("Player Two has finished placing their ships");
            } else {
              alert(`Invalid Gird.`);
            }
          }
        }
    }
    // this.currentPlayer = (this.currentPlayer % this.numPlayers) + 1;
  }
  resetGird() {
    //clear the grid
    for (let row = 0; row < this.boardSize; row++) {
      for (let col = 0; col < this.boardSize; col++) {
        const gird = this.shipBoardArr[row][col];
        gird.divColumn.style.backgroundColor = ""; // reset background color if any
        gird.setShip(undefined); // clear ships reference
      }
    }
    //reset variables
    this.currentPlayer = 1;
    this.playerOneFinished = false;

    //reset ships
    for (const ship of this.shipArr) {
      ship.girdArr = []; // Clear ships grid array
    }
    this.shipPositions = [];
  }
}
//Making a initilize function
function initilize() {
  console.log("====Battleship====");
  let _boardSize = 10;
  const _numPlayers = 2;
  //Player 1 Ships
  const _shipSizeArrPlayer1 = [3, 4, 5, 3, 1];
  const _shipColorArrPlayer1 = ["red", "green", "blue", "magenta", "orange"];
  console.log(`Board Size: ${_boardSize}, Ships: ${_shipSizeArrPlayer1.join(",")}`);
  //Player 2 Ships
  const _shipSizeArrPlayer2 = [4, 2, 1, 7, 4];
  const _shipColorArrPlayer2 = ["skyblue", "yellow", "magenta", "orange", "blue"];
  console.log(`Board Size: ${_boardSize}, Ships: ${_shipSizeArrPlayer2.join(",")}`);

  console.log("Initilizing the screen.");
  const shipScreen = new BattleshipShipScreen(
    _boardSize,
    _shipSizeArrPlayer1,
    _shipColorArrPlayer1,
    _shipSizeArrPlayer2,
    _shipColorArrPlayer2,
    _numPlayers,
  );
  shipScreen.createGird();
  console.log(`Ship Screen:`, shipScreen);
}

initilize();
