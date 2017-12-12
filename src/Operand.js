import React, {Component} from 'react'
import { StyleSheet } from 'react-native'
import Button from 'react-native-button'

const styles = StyleSheet.create({
  operandContainer: {
    width: '20%',
    aspectRatio: 1,
    backgroundColor: '#e0e0e0',
    borderWidth: 1,
    justifyContent: 'center',
    borderColor: '#272822'
  },
  operand: {
    fontSize: 20,
    color: '#444',
  }
})

class Operand extends Component {
  render () {
    return (
      <Button
        containerStyle={styles.operandContainer}
        style={styles.operand}
      >
        {this.props.number}
      </Button>
    )
  }
}

export default Operand
