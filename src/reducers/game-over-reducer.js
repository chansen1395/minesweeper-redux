export default function gameOverReducer(state = false, action) {
  if (action.type === "GAME_OVER") {
    return true
  }
  return state;
}