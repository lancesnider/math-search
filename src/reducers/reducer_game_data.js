export const defaultGameData = {
  isPlaying: false,
  score: 0,
  clickedTiles: [],
  tileNumbers: [],
  equation: [],
  usedPatterns: [],
  feedback: '',
  highScore: 0
}

export default function (state=defaultGameData, action=-1) {
  switch(action.type) {
    case 'CLICK_PLAY':
      if(state.isPlaying === true) {
        return state
      }
      return Object.assign({}, state, {
        isPlaying: true,
        score: 0,
        // tileNumbers: randomTileNumbers()
      })

    case 'GAME_OVER':
      if(state.isPlaying === false) {
        return state
      }
      let newHighScore = state.score > state.highScore ? state.score : state.highScore
      return Object.assign({}, state, {
        ...gameOverGameData,
        highScore: newHighScore
      })

    case 'CLICK_CALCULATOR':
      let equationWithNewItem = [ ...state.equation, action.itemClicked ]
      // return validateEquation(equationWithNewItem, state, action.tileClicked)
      return state

    case 'NEW_FEEDBACK':
      return Object.assign({}, state, {
        feedback: action.newFeedback
      })

    default:
      return state
  }
}