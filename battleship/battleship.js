let boardSize;
let number;
let shipSizeArray = [3, 2];
let selectedGrid =[];
let userClicked = 0;
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

      for (let i = 0; i < shipSizeArray.length; i++) {
        if (!isSelected(position) && userClicked[i] < shipSizeArray[i]) {
          divColumn.style.backgroundColor = "red";
          console.log("grid", position, "clicked");
          userClicked++;
          selectedGrid.push(position);
        }
      }
    });
  }
}


function isSelected(position) {
  return selectedGrid.includes(position);
}

function validate() {
  for (let i = 0; i < shipSizeArray.length; i++) {
    checkIfShipWithSizeExists(shipSizeArray[i]);
  }
}

