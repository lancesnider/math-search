import React, {Component} from 'react'
import { StyleSheet, View } from 'react-native'

import Operand from './Operand'

const styles = StyleSheet.create({
  operands: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})

class Operands extends Component {
  render () {
    return (
      <View style={styles.operands}>
        <Operand />
        <Operand />
        <Operand />
        <Operand />
        <Operand />
        <Operand />
        <Operand />
        <Operand />
        <Operand />
        <Operand />
        <Operand />
        <Operand />
        <Operand />
        <Operand />
        <Operand />
        <Operand />
        <Operand />
        <Operand />
        <Operand />
        <Operand />
        <Operand />
        <Operand />
        <Operand />
        <Operand />
        <Operand />
      </View>
    )
  }
}

export default Operands
