import React, {Component} from 'react'
import { StyleSheet, View } from 'react-native'

import Operator from './Operator'

const styles = StyleSheet.create({
  operators: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})

class Operators extends Component {
  render () {
    return (
      <View style={styles.operators}>
        <Operator></Operator>
        <Operator></Operator>
        <Operator></Operator>
        <Operator></Operator>
        <Operator></Operator>
      </View>
    )
  }
}

export default Operators
