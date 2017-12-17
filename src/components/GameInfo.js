import React, {Component} from 'react'
import Timetracker from './Timetracker'
import Scoreboard from '../containers/scoreboard'
import HighScore from '../containers/highScore'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  gameInfo: {
    paddingTop: 15,
    paddingBottom: 5
  },
  gameInfoText: {
    color: 'white',
    paddingBottom: 2,
    fontSize: 16
  }
})

class GameInfo extends Component {
  render () {
    return (
      <View style={styles.gameInfo}>
        <Timetracker />
        <Scoreboard />
        <HighScore />
      </View>
    )
  }
}

export default GameInfo
