/*
  Problem statement: The N Queen is the problem of placing N chess queens on an N×N chessboard
  so that no two queens attack each other.
*/
let positions = [];
function Nqueen(boardNumber) {
  for (let i = 0; i < boardNumber; i++) {
    //solve for first row first.
    positions[0]= { col: i, row: 0 };
    const isSolved = arrageQueen(i, boardNumber);
    if(isSolved) {
    	console.log('pos',positions);
  	  break;
    }
  }
}
function foundSafe(row, col) {
  for (let i = 0; i < row; i++) {
    const Qcol = positions[i].col;
    const Qrow = positions[i].row;
    if ((Qcol == col) || (Qrow == row) || (Qrow + Qcol == row + col) || (col - row == Qcol - Qrow)) {
      return false;
    }
  }
  return true;
}
function arrageQueen(row, boardNumber) {
  if (row == boardNumber)
    return true;
  for (let col = 0; col < boardNumber; col++) {
    if (foundSafe(row, col)) {
      positions[row] = {col, row};
      if (arrageQueen(row+1, boardNumber)) {
        return true;
      }
    }
  }
  return false;
}
Nqueen(8);
