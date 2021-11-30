import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from "prop-types";



// Error: Objects are not valid as a React child (found: object with keys {boardJsx}).
//  If you meant to render a collection of children, use an array instead.

class Game extends React.Component {
  // function Game() {


  constructor(props) {
    super(props)

    const initialBoard = [];
    for (let i = 0; i < 10; i++) {
      let tempRow = []
      for (let j = 0; j < 10; j++) {
        //make an array of 10 0's
        const isBomb = Math.random() < .15;
        tempRow.push({
          bombs: isBomb ? 'B' : 0,
          id: i.toString() + j.toString(),
          row: i,
          col: j,
          hidden: true
        });
      }
      initialBoard.push(tempRow)
    }

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        // console.log(`i: ${i}, j: ${j}`);
        if (initialBoard[i][j].bombs !== 'B') {
          // Top row - k is the column num
          for (let k = j - 1; k <= j + 1; k++) {
            if (i - 1 >= 0 && i - 1 < 10 && k >= 0 && k < 10 && initialBoard[i - 1][k].bombs === 'B') {
              initialBoard[i][j].bombs++
            }
          }
          // left tile
          if (i >= 0 && i < 10 && j - 1 >= 0 && j - 1 < 10 && initialBoard[i][j - 1].bombs === 'B') {
            initialBoard[i][j].bombs++
          }
          // right tile
          if (i >= 0 && i < 10 && j + 1 >= 0 && j + 1 < 10 && initialBoard[i][j + 1].bombs === 'B') {
            initialBoard[i][j].bombs++
          }
          // Bottom row - k is the column num
          for (let k = j - 1; k <= j + 1; k++) {
            if (i + 1 >= 0 && i + 1 < 10 && k >= 0 && k < 10 && initialBoard[i + 1][k].bombs === 'B') {
              initialBoard[i][j].bombs++
            }
          }
        }
      }
    }
    this.state = {
      board: initialBoard
    }
  }

  // const [board, setBoard] = React.useState(initialBoard);

  tileClick = (tile) => {
    if (tile.bombs === "B") {
      alert('bomb! you lose');
    }
    console.dir(tile)

    //get a copy of board, get a copy of the object we want to update, update it, set the object into the copy of board, pass it into setBoard
    const boardCopy = [...this.state.board]; //destructuring - makes a shallow copy - the "higher level" elements still point to the same location in memory (supposed to be non-mutable state) - point is to not copy the whole thing - only the element/row/object you need for performance reasons

    const { board } = this.state; //

    const tileCopy = { ...board[tile.row][tile.col], hidden: false };
    boardCopy[tile.row][tile.col] = tileCopy;

    this.setState({
      board: boardCopy
    }); //2 syntax options - 1.arrow function that accesses old state and returns updated state object or 2.just the update state object (simpler cases)
  }
  //inline option: () => alert(`clicked tile ${tile.row}, ${tile.col}`)

  render() {
    const boardJsx = this.state.board.map((row, i) => {
      return <div className="board-row" key={i}>{row.map(tile => {
        return <div key={tile.id} className="tile" onClick={() => this.tileClick(tile)}>{tile.hidden ? "" : tile.bombs}</div>
      })}</div>
    })
    return boardJsx;
  }
}

export default Game;