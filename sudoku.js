/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
const fs = require('fs');
const path = require('path');
const { argv } = require('process');

function chooseSudoku(number) {
  const lineBoard = fs.readFileSync(path.join(__dirname, 'puzzles.txt'), 'utf-8');
  const sudokuPuzzle = lineBoard.split('\n')
  const linedSudoku = sudokuPuzzle[number-1];
  console.log(linedSudoku)
  const boxSize = 3;
  const puzzleSize = 9;
  const puzzle = [];
  for (let i = 0; i < puzzleSize; i++) {
    let count = i * 9;
    let sudokuLine = linedSudoku.slice(count, count + 9).split('');
    puzzle.push(sudokuLine)
  }

  return puzzle;
}


function solve(boardString) {

}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {

}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {

}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
