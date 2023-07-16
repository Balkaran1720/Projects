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

  // addShipPositions(shipPositions) {
  //   this.shipPositions = shipPositions.map((gird) => ({ row: gird.row, col: gird.col }));
  // }
  
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

    //1 = Player 1 is placing, 2 = Player 2 is placing, -1 = both are done placing
    this.currentPlayerPlacing = 1;
    this.shipPositions = [];

    /**
     * @type {Ship[]}
     */
    this.shipArrPlayer1 = [];
    /**
     * @type {Ship[]}
     */
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

    alert(`Player ${this.currentPlayerPlacing} will start placing ships.`);
  }

  //Checking where user is clicking
  userClickedGird(row, col) {
    const gird = this.shipBoardArr[row][col];
    console.log(`User Clicked: Row: ${row}, Col:${col}, Gird:`, gird);

    //Find the ship array that we need to placing
    const shipArr = this.currentPlayerPlacing === 1 
      ? this.shipArrPlayer1 
      : this.currentPlayerPlacing === 2 
        ? this.shipArrPlayer2
        : undefined;
    
    //if ship array is undefined then both players are done
    const bothPlayersFinished = shipArr === undefined;

    //if both players are finished then just let the user know they can't place anymore ships
    if(bothPlayersFinished) {
      alert("Both Players are done placing ships");
      return;
    }

    //Find a ship that has not been completed
    const foundShipNotCompleted = shipArr.find((ship) => {
      return ship.isCompleted() === false;
    });

    //if no ship is found then everything is placed
    if (foundShipNotCompleted === undefined) return;

    //if this is not a valid grid, don't do anything
    if (!foundShipNotCompleted.validateAddGird(gird))  return;

    //this is a valid grid then place the ship
    foundShipNotCompleted.addGird(gird);

    //if the current found ship is not completed then return
    if (!foundShipNotCompleted.isCompleted()) return;

    alert(`Ship size of : ${foundShipNotCompleted.shipSize} , And color: ${foundShipNotCompleted.color}`);
    
    //are all ships completed?
    const allShipsPlaced = shipArr.every((ship) => ship.isCompleted());

    //if all ships are not completed, don't do anything
    if(!allShipsPlaced) return;
    

    alert(`Player ${this.currentPlayerPlacing} has finished placing their ships`);

    if(this.currentPlayerPlacing === 1) {
      this.currentPlayerPlacing = 2;
    }
    else if(this.currentPlayerPlacing === 2) {
      this.currentPlayerPlacing = -1;
      alert(`Both players compeleted.`);
      console.log(`Current Board State:`,this);
    }
   
    this.resetColors();
  }

  resetColors() {
    for (let row = 0; row < this.boardSize; row++) {
      for (let col = 0; col < this.boardSize; col++) {
        const gird = this.shipBoardArr[row][col];
        gird.divColumn.style.backgroundColor = ""; // reset background color if any
        gird.setShip(undefined); // clear ships reference
      }
    }
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
