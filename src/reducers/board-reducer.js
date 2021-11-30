export default function boardReducer(state, action) {
  if (action.type === "SHOW_TILE") {

    //get a copy of board, get a copy of the object we want to update, update it, set the object into the copy of board, pass it into setBoard
    const boardCopy = [...state.board]; //destructuring - makes a shallow copy - the "higher level" elements still point to the same location in memory (supposed to be non-mutable state) - point is to not copy the whole thing - only the element/row/object you need for performance reasons

    const { board } = state; //

    const tileCopy = { ...board[action.row][action.col], hidden: false };
    boardCopy[action.row][action.col] = tileCopy;

    // this.setState({
    //   board: boardCopy
    // }); //2 syntax options - 1.arrow function that accesses old state and returns updated state object or 2.just the update state object (simpler cases)
    return { board: boardCopy };
  } else return state
}