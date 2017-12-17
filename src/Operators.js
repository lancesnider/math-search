import React, {Component} from 'react'
import { StyleSheet, View } from 'react-native'
import Button from 'react-native-button'
import Operator from './Operator'

const styles = StyleSheet.create({
  operators: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  equalsContainer: {
    width: '100%',
    aspectRatio: 5,
    backgroundColor: '#7b9a38',
    borderWidth: 1,
    justifyContent: 'center',
    borderColor: '#272822'
  },
  equals: {
    color: 'white',
    fontSize: 32
  }
})

class Operators extends Component {
  render () {
    return (
      <View style={styles.operators}>
        <Operator>+</Operator>
        <Operator>-</Operator>
        <Operator>×</Operator>
        <Operator>÷</Operator>
        <Operator>ˆ</Operator>
        <Button
          containerStyle={styles.equalsContainer}
          style={styles.equals}
        >
          =
        </Button>
      </View>
    )
  }
}

export default Operators
