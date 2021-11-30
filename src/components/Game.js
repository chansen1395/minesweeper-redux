import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from "prop-types";



// Error: Objects are not valid as a React child (found: object with keys {boardJsx}).
//  If you meant to render a collection of children, use an array instead.

// class Game extends React.Component {
function Game() {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //   }
  // }
  const initialBoard = [];
  for (let i = 0; i < 10; i++) {
    let tempRow = []
    for (let j = 0; j < 10; j++) {
      //make an array of 10 0's
      tempRow.push({
        bombs: j === 3 && i % 2 === 0 ? 'B' : 0,
        //branching - j === 2 ? 3
        id: i.toString() + j.toString(),
        row: i,
        col: j
      });
    }
    initialBoard.push(tempRow)
    //pus
  }

  // get cells around cell (where cell.id === cellId)
  // getNeighbors(state, cellId) {
  //   const {grid} = state;
  //   const {x, y} = this.getCell(state, cellId);
  //   return [
  //     this.getCellAt(state, {x: x - 1, y: y - 1}), // top left
  //     this.getCellAt(state, {x: x, y: y - 1}), // top
  //     this.getCellAt(state, {x: x + 1, y: y - 1}), // top right
      
  //     this.getCellAt(state, {x: x - 1, y: y}), // left
  //     this.getCellAt(state, {x: x + 1, y: y}), // right
      
  //     this.getCellAt(state, {x: x - 1, y: y + 1}), // bottom left
  //     this.getCellAt(state, {x: x, y: y + 1}), // bottom
  //     this.getCellAt(state, {x: x + 1, y: y + 1}), // bottom right
  //   ].filter((cell) => !!cell); // remove null cells (if target cell is on an edge)
  // },

  // for squares with a bomb, add a counter to adjacent existing non-bomb tiles?
  
  
  for(let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      console.log(`i: ${i}, j: ${j}`);
      if(initialBoard[i][j].bombs !== 'B') {
        // Top row - k is the column num
        for(let k = j - 1; k <= j + 1; k++) {
          if(i - 1 >= 0 && i - 1 < 10 && k >= 0 && k < 10 && initialBoard[i - 1][k].bombs === 'B') {
            initialBoard[i][j].bombs++
          }
        } 
        // left tile
        if(i >= 0 && i < 10 && j - 1 >= 0 && j - 1 < 10 && initialBoard[i][j - 1].bombs === 'B') {
          initialBoard[i][j].bombs++
        }
        // right tile
        if(i >= 0 && i < 10 && j + 1 >= 0 && j + 1 < 10 && initialBoard[i][j + 1].bombs === 'B') {
          initialBoard[i][j].bombs++
        }
        // Bottom row - k is the column num
        for(let k = j - 1; k <= j + 1; k++) {
          if(i + 1 >= 0 && i + 1 < 10 && k >= 0 && k < 10 && initialBoard[i + 1][k].bombs === 'B') {
            initialBoard[i][j].bombs++
          }
        } 
      }
    }
  }

  // if (board[i,j] === 'B') {
  //
  // let bombCounter = 0;


  //iterate through, foreach square, iterate through its neighboring squares, if a bomb, add to a counter, after checking the neighbors, set the bombs to that counter value
  // if (board[i - 1] && i )


  const [board, setBoard] = React.useState(initialBoard);

  const boardJsx = board.map((row, i) => {
    return <div className="board-row" key={i}>{row.map(tile => {
      return <div key={tile.id} className="tile">{tile.bombs}</div>
    })}</div>
  })

  return (
    boardJsx
  )
}

export default Game;