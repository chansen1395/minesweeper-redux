import React from 'react';
import { connect } from 'react-redux';

// import PropTypes from "prop-types";

class Game extends React.Component {
  // const [board, setBoard] = React.useState(initialBoard);

  tileClick = (tile) => {
    const { dispatch } = this.props;
    //this.props.dispatch(action)
    if (tile.bombs === "B") {
      alert('bomb! you lose');
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
    return boardJsx;
  }
}

//
const mapStateToProps = state => {
  //return state ?
  return {
    board: state.board
  }
}

Game = connect(mapStateToProps)(Game);
//connect lets us access the state from store from provider
//state comes in, we "map" it to our props
//now we can use that as this.props.... inside this component
export default Game;