import React, {Component} from 'react'
import {Text, StyleSheet} from 'react-native'
import Button from 'react-native-button'

const styles = StyleSheet.create({
  equalsContainer: {
    width: '100%',
    aspectRatio: 5,
    backgroundColor: '#7b9a38',
    borderWidth: 1,
    justifyContent: 'center',
    borderColor: '#272822'
  },
  equals: {
    color: 'white'
  }
})

class Equals extends Component {
  render () {
    return (
      <Button
        containerStyle={styles.equalsContainer}
        style={styles.equals}
      >
        =
      </Button>
    )
  }
}

export default Equals
