import {combineReducers} from 'redux'
import GameDataReducer from './reducer_game_data'

const allReducers = combineReducers({
  gameData: GameDataReducer
})

export default allReducers
