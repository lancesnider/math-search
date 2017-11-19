import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.gameInfo}>Time: 3:00</Text>
          <Text style={styles.gameInfo}>High Score: 100</Text>
          <Text style={styles.gameInfo}>Score: 23</Text>
        </View>
        <View style={styles.operandsHolder}>
          <View style={styles.operand}>
            <Button color='#272822' title='1' />
          </View>
          <View style={styles.operand}>
            <Button color='#272822' title='2' />
          </View>
          <View style={styles.operand}>
            <Button color='#272822' title='3' />
          </View>
          <View style={styles.operand}>
            <Button color='#272822' title='4' />
          </View>
          <View style={styles.operand}>
            <Button color='#272822' title='5' />
          </View>
          <View style={styles.operand}>
            <Button color='#272822' title='1' />
          </View>
          <View style={styles.operand}>
            <Button color='#272822' title='2' />
          </View>
          <View style={styles.operand}>
            <Button color='#272822' title='3' />
          </View>
          <View style={styles.operand}>
            <Button color='#272822' title='4' />
          </View>
          <View style={styles.operand}>
            <Button color='#272822' title='5' />
          </View>
        </View>
        <View style={styles.operatorsHolder}>
          <View style={styles.operator}>
            <Button color='white' title='+' />
          </View>
          <View style={styles.operator}>
            <Button color='white' title='-' />
          </View>
          <View style={styles.operator}>
            <Button color='white' title='*' />
          </View>
          <View style={styles.operator}>
            <Button color='white' title='/' />
          </View>
          <View style={styles.operator}>
            <Button color='white' title='^' />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272822',
    padding: 35
  },
  gameInfo: {
    color: 'white'
  },
  operandsHolder: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  operand: {
    width: '20%',
    height: 60,
    backgroundColor: '#e0e0e0',
    borderWidth: 0.5,
    borderColor: '#272822'
  },
  operatorsHolder: {
    flex: 1,
    flexDirection: 'row'
  },
  operator: {
    width: '20%',
    height: 60,
    backgroundColor: '#f5923e',
    borderWidth: 0.5,
    borderColor: '#272822'
  }
});
