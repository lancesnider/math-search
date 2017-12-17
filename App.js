import React from 'react'
import { StyleSheet, View } from 'react-native'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import gameDataReducer from './src/reducers/reducerGameData'
import GameInfo from './src/components/GameInfo'
import Operands from './src/containers/operands'
import Operators from './src/components/Operators'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272822',
    padding: 20,
    justifyContent: 'flex-end'
  }
})

const store = createStore(gameDataReducer)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <GameInfo />
          <Operands />
          <Operators />
        </View>
      </Provider>
    )
  }
}

export default App
