import React from 'react'
import { StyleSheet, View } from 'react-native'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import gameDataReducer from './src/reducers/reducer_game_data'
import GameInfo from './src/components/GameInfo'
import Operands from './src/components/Operands'
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
          <Operands tileNumbers={[1,2,3,6,4,1,2,2,3,5,5,6,6,7,9,5,4,7,3,2,5,7,8,9,0]} />
          <Operators />
        </View>
      </Provider>
    )
  }
}

export default App
