const commonBtn = document.getElementsByClassName("tictactoe-btn");
for (let i = 0; i < commonBtn.length; i++) {
  let btn = commonBtn[i];
  btn.innerHTML = "";
  btn.addEventListener("click", () => {
    userClickedBtnIndex(btn, i);
    checkAll();
  });
}

function userClickedBtnIndex(btn, index) {
  if (btn.innerHTML == "") {
    btn.innerHTML = "x";
    solveSystemMoveDumb();
  }
}

function solveSystemMoveDumb() {
  for (let i = 0; i < commonBtn.length; i++) {
    let btn = commonBtn[i];
    if (btn.innerHTML == "") {
      btn.innerHTML = "o";
      break;
    }
  }
}

function checkCombo(symbol) {
  if (
    combinations(0, 1, 2, symbol) ||
    combinations(3, 4, 5, symbol) ||
    combinations(6, 7, 8, symbol) ||
    combinations(0, 3, 6, symbol) ||
    combinations(1, 4, 7, symbol) ||
    combinations(2, 5, 8, symbol) ||
    combinations(0, 4, 8, symbol) ||
    combinations(2, 4, 6, symbol)
  ) {
    alert(`player ${symbol} has won the game`);
    reset();
  }

}

function combinations(i, j, k, symbol) {
  if (
    commonBtn[i].innerHTML === symbol &&
    commonBtn[j].innerHTML === symbol &&
    commonBtn[k].innerHTML === symbol
  ) {
    return true;
    // alert(`player ${symbol} has won the game`);
  } else {
    return false;
  }
}

function reset() {
  for (let i = 0; i < commonBtn.length; i++) {
    const btn = commonBtn[i];
    btn.innerHTML = "";
  }
}

function checkAll() {
  checkCombo("x");
  checkCombo("o");
}
