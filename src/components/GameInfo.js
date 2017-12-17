import React, {Component} from 'react'
import Timetracker from './Timetracker'
import Scoreboard from './Scoreboard'
import HighScore from './HighScore'
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
        <Timetracker currentTime='2:00' />
        <Scoreboard score='50' />
        <HighScore highScore='125' />
      </View>
    )
  }
}

export default GameInfo
