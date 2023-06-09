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
  addShipPosition(shipPositions) {
    const positions = this.girdArr.map((gird) => ({ row: gird.row, col: gird.col }));
    this.shipPositions.push(positions);
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
  constructor(boardSize, shipSizeArr, shipColorArr, numPlayers) {
    this.boardSize = boardSize;
    this.shipSizeArr = shipSizeArr;
    this.shipColorArr = shipColorArr;
    this.shipBoardArr = [];
    this.numPlayers = numPlayers;
    this.currentPlayer = 1;
    this.playerOneFinished = false;
    this.shipPositions = [];
    /**
     * @type {Ship[]}
     */
    this.shipArr = [];
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

    for (let i = 0; i < this.shipSizeArr.length; i++) {
      this.shipArr.push(new Ship(this.shipSizeArr[i], this.shipColorArr[i]));
    }
    console.log(`${this.constructor.name}: shipBoardArr`, this.shipBoardArr);
  }

  resetGird(){
    //clear the grid
    for(let row=0;row <this.boardSize; row++){
      for(let col = 0 ; col < this.boardSize;col++){
        const gird = this.shipBoardArr[row][col];
        gird.divColumn.style.backgroundColor = ""; // reset background color if any
        gird.setShip(undefined); // clear ships reference
      }
    }
    //reset variables
    this.currentPlayer = 1;
    this.playerOneFinished = false;

    //reset ships
    for( const ship of this.shipArr){
      ship.girdArr = []; // Clear ships grid array
    }
    this.shipPositions = [];
  }

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
              `Ship: ${currentShipNotCompleted.shipSize}, Color: ${currentShipNotCompleted.color} is completed.`,
            );
            this.addShipPosition(currentShipNotCompleted);
            const allShipsPlaced = this.shipArr.every((ship) => ship.isCompleted())
            if(allShipsPlaced){
              this.playerOneFinished = true;
              alert("Player one has finished placing their ships")
              this.resetGird(); //reset the grid for Player 2
            }
          }
        }
      } else {
        alert(`Invalid Gird.`);
      }
    }
    this.currentPlayer = this.currentPlayer % this.numPlayers + 1;
}
}
//Making a initilize function
function initilize() {
  console.log("====Battleship====");
  let _boardSize = 10;
  const _numPlayers = 2;
  const _shipSizeArr = [3, 4, 1];
  const _shipColor = ["red", "green", "blue", "magenta", "orange"];
  console.log(`Board Size: ${_boardSize}, Ships: ${_shipSizeArr.join(",")}`);

  console.log("Initilizing the screen.");
  const shipScreen = new BattleshipShipScreen(_boardSize, _shipSizeArr, _shipColor, _numPlayers);
  shipScreen.createGird();
  console.log(`Ship Screen:`, shipScreen);
}

initilize();
