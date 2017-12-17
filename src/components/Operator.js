import React, {Component} from 'react'
import { StyleSheet} from 'react-native'
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
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold'
  }
})

class Operator extends Component {
  render () {
    return (
      <Button
        containerStyle={styles.operatorContainer}
        style={styles.operator}
      >
        {this.props.children}
      </Button>
    )
  }
}

export default Operator
