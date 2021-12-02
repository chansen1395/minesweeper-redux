export default function gameOverReducer(state = false, action) {
  if (action.type === "GAME_OVER") {
    return true
  }
  if (action.type === "SET_MOVE") {
    return false
  }
  return state;
}