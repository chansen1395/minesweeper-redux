import boardReducer from "../../reducers/board-reducer";

//return the 2d array board

describe ('boardReducer', () => {
  const oldState = [[{
      bombs: 0,
      id: "00",
      row: 0,
      col: 0,
      hidden: true
    }]]
  
  // test('should not modify state if type is null', () => {
  //   expect(boardReducer(oldState, { type: null })).toEqual(oldState);
  // })

  test('should set hidden to false', () => {
    const newBoard = boardReducer(oldState, { type: "SHOW_TILE", row: 0, col: 0 })
    const result = newBoard[0][0].hidden
    expect(result).toEqual(false);
  })

  
})