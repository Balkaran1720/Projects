let boardSize = 10;
let shipSizeArray = [7, 5, 3, 4, 2];
let body = document.getElementsByTagName("body")[0];
for (let row = 0; row < boardSize; row++) {
  let divRow = document.createElement("div");
  divRow.className = "row";
  body.appendChild(divRow);
  for (let column = 0; column < boardSize; column++) {
    let divColumn = document.createElement("div");
    divColumn.className = "column";
    body.appendChild(divColumn);
  }
}
