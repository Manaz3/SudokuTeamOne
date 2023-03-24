












































































































function sudoku(createSudoku){
const str = 9
const box = 3 
function voidd(board){
  for(let i = 0;i<str;i++){
    for(let n=0;n<str;i++){
      if (board[i][n]=='-')
      return board[i][n]
    }
  }
  return 'null'
}
function valid(numb,poz, board){
  const [i,n] = poz;
  for ( let s = 0 ; s < str; s++){
    if (board[s][n]=== numb && s!==i)
    return false
  }
  for ( let x = 0 ; x < str; x++){
    if (board[x][i]=== numb && x!==n)
    return false
  }

  const boxstr = Math.floor(i/box)*box
  const boxcolum = Math.floor(n/box)*box

  for (z = boxstr; z<boxstr+box; z++){
    for (q = boxcolum; q<boxcolum+box; q++){
      if (board[z][q]===numb && z!==i && n!==q)
      return false

    }
  }
  return true
}
function recur(board){
const funvoid = voidd(board)
if (funvoid === 'null')

}



}



module.exports = {
  solve,
  isSolved,
  prettyBoard,
};