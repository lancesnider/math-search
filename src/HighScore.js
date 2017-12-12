import React, {Component} from 'react'
import { StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
  highscore: {
    color: 'white',
    paddingBottom: 2,
    fontSize: 16
  }
})

class HighScore extends Component {
  render () {
    return (
      <Text style={styles.highscore}>Time: {this.pros.highScore}</Text>
    )
  }
}

export default HighScore
