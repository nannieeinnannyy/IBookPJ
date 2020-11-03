import React, { Component } from 'react'
import { Text, View, StyleSheet} from 'react-native'
import PagesNavigator from './navigation/PagesNavigator'
export default class App extends Component {
  render() {
    return (
      <PagesNavigator/>
    )
  }
}