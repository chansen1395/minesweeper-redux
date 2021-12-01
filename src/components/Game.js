import React from 'react';
import { connect } from 'react-redux';

// import PropTypes from "prop-types";

class Game extends React.Component {
  // const [board, setBoard] = React.useState(initialBoard);

  

  tileClick = (tile) => {
    const { dispatch } = this.props;

    if (this.props.gameOver) return

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
  //inline option: () => alert(`clicked tile ${tile.row}, ${tile.col}`)
  
  render() {
    
    const boardJsx = this.props.board.map((row, i) => {
      return <div className="board-row" key={i}>{row.map(tile => {
        return <div key={tile.id} className="tile" onClick={() => this.tileClick(tile)}>{tile.hidden ? "" : tile.bombs}</div>
      })}</div>
    })
    return (
      <>
        {this.props.gameOver ? <h2>Game Over</h2> : null}
        {boardJsx}
      </>
    )
  }
}

//
const mapStateToProps = state => {
  //return state ?
  return {
    board: state.board,
    gameOver: state.gameOver
  }
}

Game = connect(mapStateToProps)(Game);
//connect lets us access the state from store from provider
//state comes in, we "map" it to our props
//now we can use that as this.props.... inside this component
export default Game;