import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { Card, Button, FormInput, Icon } from 'react-native-elements';

//const SCREEN_WIDTH = Dimensions.get('window').width;

class MessageScreen extends Component {
  static navigationOptions = {
    title: 'Messaging',
    tabBarIcon: (
      <Icon name="message" size={30} color="#006699" />
    )
  }
  render() {
    return (
      <View>
        <Text>MessageScreen</Text>
        <Text>MessageScreen</Text>
        <Text>MessageScreen</Text>
        <Text>MessageScreen</Text>
        <Text>MessageScreen</Text>
        <Text>MessageScreen</Text>
        <Text>MessageScreen</Text>
        <Text>MessageScreen</Text>
      </View>
    );
  }
}

export default MessageScreen;
