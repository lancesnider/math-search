import React, {Component} from 'react'
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
        <Text style={styles.gameInfoText}>Time: 3:00</Text>
        <Text style={styles.gameInfoText}>High Score: 100</Text>
        <Text style={styles.gameInfoText}>Score: 23</Text>
      </View>
    )
  }
}

export default GameInfo
