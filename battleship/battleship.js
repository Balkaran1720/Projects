let boardSize;
let number;
let shipSizeArray = [3, 2, 5];
const shipBoard = [];

let body = document.getElementsByTagName("body")[0];

do {
  boardSize = prompt("Select the playing board size(5, 10, 15, or 20):");
  number = parseInt(boardSize);
} while (isNaN(number) || ![5, 10, 15, 20].includes(number));

for (let row = 0; row < boardSize; row++) {
  let divRow = document.createElement("div");
  divRow.className = "row";
  body.appendChild(divRow);
  for (let column = 0; column < boardSize; column++) {
    let divColumn = document.createElement("div");
    divColumn.className = "column";
    divRow.appendChild(divColumn);

    divColumn.addEventListener("click", function () {
      const position = row * boardSize + column;
      divColumn.style.backgroundColor = "red";
      console.log("grid", position, "clicked");
    });
    shipBoard.push(divColumn);
  }
}

// function validate() {
//   for (let i = 0; i < shipSizeArray.length; i++) {
//     checkIfShipWithSizeExists(shipSizeArray[i]);
//   }
// }
