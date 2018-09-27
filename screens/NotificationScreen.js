import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { Card, Button, FormInput, Icon } from 'react-native-elements';

//const SCREEN_WIDTH = Dimensions.get('window').width;

class NotificationScreen extends Component {
  static navigationOptions = {
    title: 'Notifications',
    tabBarIcon: (
      <Icon name="notifications" size={30} color="#006699" />
    )
  }
  render() {
    return (
      <View>
        <Text>NotificationScreen</Text>
        <Text>NotificationScreen</Text>
        <Text>NotificationScreen</Text>
        <Text>NotificationScreen</Text>
        <Text>NotificationScreen</Text>
        <Text>NotificationScreen</Text>
        <Text>NotificationScreen</Text>
        <Text>NotificationScreen</Text>
      </View>
    );
  }
}

export default NotificationScreen;
