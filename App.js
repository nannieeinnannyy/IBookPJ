import React, { Component } from 'react'
import { Text, View, StyleSheet} from 'react-native'
import Login from './screens/Login'
export default class App extends Component {
  render() {
    return (
      <Login/>
      // <View style={styles.container}>
      //   <Text>Test.exe</Text>
      // </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#191927',
    alignItems: 'center',
    justifyContent: 'center'
  },
});