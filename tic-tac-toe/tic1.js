//getting element by using className
const commonBtn = document.getElementsByClassName("tictactoe-btn");

initialize();
//making function to initialze the code
function initialize() {
  //looping over the clicked buttons
  for (let i = 0; i < commonBtn.length; i++) {
    let btn = commonBtn[i];
    btn.innerHTML = "";
    btn.addEventListener("click", () => {
      userClickedBtnIndex(btn, i);
      checkAll();
    });
  }
}

//checking if user clicked the btn
function userClickedBtnIndex(btn, index) {
  if (btn.innerHTML == "") {
    btn.innerHTML = "x";
    // solveSystemMoveDumb();

    solveSystemMoveSmart();
    //checkWinningCombo(i, j, k);
  }
}

/**
 * Finds optimal move
 */
function solveSystemMoveSmart() {
  let computerIndex = checkIfWinningCombinationExists("o");
  let playerIndex = checkIfWinningCombinationExists("x");
  if (computerIndex > -1) {
    commonBtn[computerIndex].innerHTML = "o";
  } else if (playerIndex > -1) {
    commonBtn[playerIndex].innerHTML = "o";
  } else {
    solveSystemMoveDumb();
  }
}

/**
 * Check all valid combinations and find the winning index.
 * If no index is found return -1
 * @param {*} symbol
 */
function checkIfWinningCombinationExists(symbol) {
  let check = checkCombinationToWin(0, 1, 2, symbol);
  if (check > -1) return check;

  check = checkCombinationToWin(3, 4, 5, symbol);
  if (check > -1) return check;

  check = checkCombinationToWin(6, 7, 8, symbol);
  if (check > -1) return check;

  check = checkCombinationToWin(0, 3, 6, symbol);
  if (check > -1) return check;

  check = checkCombinationToWin(1, 4, 7, symbol);
  if (check > -1) return check;

  check = checkCombinationToWin(2, 5, 8, symbol);
  if (check > -1) return check;

  check = checkCombinationToWin(0, 4, 8, symbol);
  if (check > -1) return check;

  check = checkCombinationToWin(2, 4, 6, symbol);
  if (check > -1) return check;
  return -1;
}

/**
 * Function checks i, j and k to see if one of these location contains the winning move for symbol
 * @param {*} i
 * @param {*} j
 * @param {*} k
 * @param {*} symbol
 * @returns
 */
function checkCombinationToWin(i, j, k, symbol) {
  if (commonBtn[i].innerHTML == symbol && 
      commonBtn[j].innerHTML == symbol && 
      commonBtn[k].innerHTML == "")
    return k;
  else if (
    commonBtn[i].innerHTML == symbol &&
    commonBtn[j].innerHTML == "" &&
    commonBtn[k].innerHTML == symbol
  )
    return j;
  else if (
    commonBtn[i].innerHTML == "" &&
    commonBtn[j].innerHTML == symbol &&
    commonBtn[k].innerHTML == symbol
  )
    return i;
  else return -1;
}

//making a function for AI to make possible moves
function solveSystemMoveDumb() {
  for (let i = 0; i < commonBtn.length; i++) {
    let btn = commonBtn[i];
    if (btn.innerHTML == "") {
      btn.innerHTML = "o";
      break;
    }
  }
}

// checking if the game has finished
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
//applying boolean to see combo
function combinations(i, j, k, symbol) {
  if (
    commonBtn[i].innerHTML === symbol &&
    commonBtn[j].innerHTML === symbol &&
    commonBtn[k].innerHTML === symbol
  ) {
    return true;
  } else {
    return false;
  }
}
//reset after the game has finished
function reset() {
  for (let i = 0; i < commonBtn.length; i++) {
    const btn = commonBtn[i];
    btn.innerHTML = "";
  }
}
//checking both the combo for 'x' and 'o'
function checkAll() {
  checkCombo("x");
  checkCombo("o");
}
