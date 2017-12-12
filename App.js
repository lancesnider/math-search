import React from 'react'
import { StyleSheet, View } from 'react-native'

import GameInfo from './src/GameInfo'
import Operands from './src/Operands'
import Operators from './src/Operators'
import Equals from './src/Equals'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272822',
    padding: 20,
    justifyContent: 'flex-end'
  }
})

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <GameInfo />
        <Operands />
        <Operators />
      </View>
    )
  }
}

export default App
