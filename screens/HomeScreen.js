import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { Card, Button, FormInput, Icon } from 'react-native-elements';

//const SCREEN_WIDTH = Dimensions.get('window').width;

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    tabBarIcon: (
      <Icon name="home" size={30} color="#006699" />
    )
  }
  render() {
    return (
      <View>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
      </View>
    );
  }
}

export default HomeScreen;
