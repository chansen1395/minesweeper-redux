import Moment from "moment";

export default function boardReducer(history = [{ board:[], time:"" }], action) {
  // console.log(board)
  const boardCopy = JSON.parse(JSON.stringify(history[history.length - 1].board));
  if (action.type === "SHOW_TILE") {

    //get a copy of board, get a copy of the object we want to update, update it, set the object into the copy of board, pass it into setBoard
    //destructuring - makes a shallow copy - the "higher level" elements still point to the same location in memory (supposed to be non-mutable state) - point is to not copy the whole thing - only the element/row/object you need for performance reasons

    // const { board } = state; //

    const tileCopy = { ...boardCopy[action.row][action.col], hidden: false, marked: false };
    // mark from mark_bomb, initial state structure, dispatch/action, reducer, display
    boardCopy[action.row][action.col] = tileCopy;

    const historyCopy = [...history, { board: boardCopy, time: "4:35"}]
    // this.setState({
    //   board: boardCopy
    // }); //2 syntax options - 1.arrow function that accesses old state and returns updated state object or 2.just the update state object (simpler cases)
    return historyCopy;

  } else if (action.type === "SET_MOVE") {

    const newHistory = history.slice(0, action.move)
    
    return newHistory

  } else if (action.type === "MARK") {
    console.log("attempting to mark")
    const tileCopy = { ...boardCopy[action.row][action.col], marked: !history[history.length - 1].board[action.row][action.col].marked };
    
    boardCopy[action.row][action.col] = tileCopy;

    const historyCopy = [...history, {board: boardCopy, time: "5:21"}]
    // this.setState({
    //   board: boardCopy
    // }); //2 syntax options - 1.arrow function that accesses old state and returns updated state object or 2.just the update state object (simpler cases)
    return historyCopy;
  } else {
    return history;
  }
}