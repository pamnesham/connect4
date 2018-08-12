

function dropChip(board,column,currentPlayer){
  row = 5;
  if (board[0][column] != 's') {
    // do nothing if column is full
  }else{ //drop chip
      while((board[row][column] != 's')  && (row > -1)){
          row --;
      }
      board[row][column] = currentPlayer;
      checkForWin(board, row, column, currentPlayer);
  }
    console.log(board);
    return(board);
}


function nextTurn(currentPlayer){
  if (currentPlayer === 'b') {
    currentPlayer = 'r';
  }else{
    currentPlayer = 'b';
  }
  return(currentPlayer);
}


function all4RowsMatch(board,player, r,c){
  if (board[r][c] == player && board[r-1][c] == player && board[r-2][c] == player && board[r-3][c] == player) {
    return true;
  }
}


function checkColumnsForWin(board, col, player){
  // i=5;
  count = 0;
  fourInRow = false;
  for (var r = 5; r > 2; r--) {
      if (all4RowsMatch(board, player,r, col) === true) {
        // console.log('win');
        return true;
      }
    }
  }


  function all4ColsMatch(board, player, r,c){
    if (board[r][c] == player && board[r][c-1] == player && board[r][c-2] == player && board[r][c-3] == player) {
      return true;
    }
  }


function checkRowsForWin(board, row, player){
  fourInRow = false;
  for (var c = 6; c > 2; c--) {
    if (all4ColsMatch(board, player,row, c) == true) {
      // console.log('win');
      return true;
    }
  }
}


function all4DownToLeftDiagsMatch(board, player, r,c){
  if (board[r][c] == player && board[r+1][c-1] == player && board[r+2][c-2] == player && board[r+3][c-3] == player) {
    return true;
  }
}


function checkDownLeftDiagsForWin(board, player){
  fourInRow = false;
  for (var r = 2; r > -1; r--) {
    for (var c = 3; c < 7; c++) {
      if (all4DownToLeftDiagsMatch(board, player,r, c) === true) {
        // console.log('win');
        return true;
      }
    }
  }
}

function all4DownToRightDiagsMatch(board, player, r,c){
  if (board[r][c] == player && board[r+1][c+1] == player && board[r+2][c+2] == player && board[r+3][c+3] == player){
    return true;
  }
}

function checkDownRightDiagsForWin(board, player){
  fourInRow = false;
  for (var r = 2; r > -1; r--) {
    for (var c = 0; c < 4; c++) {
      if (all4DownToRightDiagsMatch(board, player,r, c) == true) {
        // console.log('win');
        return true;
      }
    }
  }
}

function checkForWin(board, player, r,c){
  if (checkColumnsForWin(board, c, player) == true) {
    console.log("win_1");
    return true;
  }else if (checkRowsForWin(board, r, player) == true) {
    console.log("win_2");
    return true;
  }else if (checkDownRightDiagsForWin(board, player) == true) {
    console.log("win_3");
    return true;
  }else if (checkDownLeftDiagsForWin(board, player)== true) {
    console.log("win_4");
    return true;
  }else {
    console.log("loss");
    return false;
  }
}



function main(){
  currentPlayer = 'b';

  board =[['s','s','s','s','s','s','s'],
          ['s','s','s','s','s','s','s'],
          ['s','s','s','s','s','s','s'],
          ['s','s','s','s','s','s','s'],
          ['s','s','s','s','s','s','s'],
          ['s','s','s','s','s','s','s']];
  // dropChip(board, 1, currentPlayer);

  checkForWin(board, 'b', 5,0);

}

main();
