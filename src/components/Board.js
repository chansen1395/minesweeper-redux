import React from 'react';
import { connect } from 'react-redux';


export default function Board(props) {

  const tileClick = (event, tile) => {
    if (props.gameOver) return
    console.dir(event)
    const { dispatch } = props;
    if(event.type === "contextmenu") {
      event.preventDefault();
      const action = { type: "MARK", row: tile.row, col: tile.col }
      dispatch(action)
      return;
    }
    
    // if (event.nativeEvent.which === 3) {
    // }
    //set gameOver to true when a bomb is clicked
    //render a gameover message
    //add "normal" state first, get it to work, then refactor for redux
    //create state - add a slice of state to redux store - new action, new reducer, make a combined reducer, update mapstatetoprops
    /*
    1. add it to our state initial object in createStore
    2. get: update mapStateToProps
    5. make a reducer (new tricky stuff with multiple reducers)
    3. "post" updating it: make an action
    4.  pass it to dispatch
    */

    //this.props.dispatch(action)
    if (tile.bombs === "B") {
      alert('bomb! you lose');
      // this.setState({ gameOver: true });
      const action = { type: "GAME_OVER" };
      dispatch(action);
    }
    console.dir(tile)
    //create an action, pass to dispatch
    //use dispatch similarly to setState
    const action = { type: "SHOW_TILE", row: tile.row, col: tile.col };
    dispatch(action);
  }
  
  const boardJsx = props.board.map((row, i) => {
    return <div className="board-row" key={i}>{row.map(tile => {
      return <div key={tile.id} className={`tile ${tile.marked ? "marked" : ""}`} onContextMenu={(event) => tileClick(event, tile)} onClick={(event) => tileClick(event, tile)}>{tile.hidden ? "" : tile.bombs}</div>
    })}</div>
  })

  return boardJsx;
}

const mapStateToProps = state => {
  //return state ?
  return {
    board: state.history[state.history.length - 1],
    gameOver: state.gameOver
  }
}

Board = connect(mapStateToProps)(Board);