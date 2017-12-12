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
        {
          this.props.tileNumbers.map(function (number, index) {
            <Operand number key={index} />
          })
        }
      </View>
    )
  }
}

export default Operands
