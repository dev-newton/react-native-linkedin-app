import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { Card, Button, FormInput, Icon } from 'react-native-elements';

//const SCREEN_WIDTH = Dimensions.get('window').width;

class NetworkScreen extends Component {
  static navigationOptions = {
    title: 'My Network',
    tabBarIcon: (
      <Icon name="group" size={30} color="#006699" />
    )
  }
  render() {
    return (
      <View>
        <Text>NetworkScreen</Text>
        <Text>NetworkScreen</Text>
        <Text>NetworkScreen</Text>
        <Text>NetworkScreen</Text>
        <Text>NetworkScreen</Text>
        <Text>NetworkScreen</Text>
        <Text>NetworkScreen</Text>
        <Text>NetworkScreen</Text>
      </View>
    );
  }
}

export default NetworkScreen;
