import React, {Component} from 'react'
import { StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
  scoreboard: {
    color: 'white',
    paddingBottom: 2,
    fontSize: 16
  }
})

class Scoreboard extends Component {
  render () {
    return (
      <Text style={styles.scoreboard}>Time: {this.props.score}</Text>
    )
  }
}

export default Scoreboard
