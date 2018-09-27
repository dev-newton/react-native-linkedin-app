import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { Card, Button, FormInput, Icon } from 'react-native-elements';

//const SCREEN_WIDTH = Dimensions.get('window').width;

class JobScreen extends Component {
  static navigationOptions = {
    title: 'Jobs',
    tabBarIcon: (
      <Icon name="work" size={30} color="#006699" />
    )
  }
  render() {
    return (
      <View>
        <Text>JobScreen</Text>
        <Text>JobScreen</Text>
        <Text>JobScreen</Text>
        <Text>JobScreen</Text>
        <Text>JobScreen</Text>
        <Text>JobScreen</Text>
        <Text>JobScreen</Text>
        <Text>JobScreen</Text>
      </View>
    );
  }
}

export default JobScreen;
