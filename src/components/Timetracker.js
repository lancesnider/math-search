import React, {Component} from 'react'
import { StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
  timeTracker: {
    color: 'white',
    paddingBottom: 2,
    fontSize: 16
  }
})

class Timetracker extends Component {
  render () {
    return (
      <Text style={styles.timeTracker}>Time: 1:00</Text>
    )
  }
}

export default Timetracker
