import React, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from 'react-native-button'

const styles = StyleSheet.create({
  operatorContainer: {
    width: '20%',
    aspectRatio: 1,
    backgroundColor: '#f5923e',
    borderWidth: 1,

    justifyContent: 'center',
    borderColor: '#272822'
  },
  operator: {
    fontSize: 20,
    color: 'white',
  }
})

class Operator extends Component {
  render () {
    return (
      <Button
        containerStyle={styles.operatorContainer}
        style={styles.operator}
      >
        +
      </Button>
    )
  }
}

export default Operator
