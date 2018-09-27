/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import JoinScreen from './screens/JoinScreen';
import SignScreen from './screens/SignScreen';
import HomeScreen from './screens/HomeScreen';
import NetworkScreen from './screens/NetworkScreen';
import MessageScreen from './screens/MessageScreen';
import NotificationScreen from './screens/NotificationScreen';
import JobScreen from './screens/JobScreen';

console.disableYellowBox = true;
type Props = {};
export default class App extends Component<Props> {

  render() {
    const MainNav = TabNavigator({
      Welcome: { screen: WelcomeScreen },
      screen: TabNavigator({
        Join: { screen: JoinScreen },
        Sign: { screen: SignScreen },
          screen: TabNavigator({
            Home: { screen: HomeScreen },
            Network: { screen: NetworkScreen },
            Message: { screen: MessageScreen },
            Notify: { screen: NotificationScreen },
            Jobs: { screen: JobScreen },
          },
        {
            tabBarPosition: 'bottom',
            tabBarOptions: {
              upperCaseLabel: false,
              showIcon: true,
              activeTintColor: 'red',

            labelStyle: {
            margin: 0,
            height: 13,
            color: '#006699',
            fontSize: 10

          },
          iconStyle: {
            tintColor: 'red',
            activeTintColor: 'red'
          },
          style: {
            backgroundColor: '#fff'
          },
          indicatorStyle: {
           backgroundColor: '#006699',
       }
            }
        }),
      },
      {
        title: 'Join now',
        navigationOptions: {
          title: ' Join now',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#006699'
          },
          tabBarVisible: false
        }
      }),
    },
  {
    navigationOptions: {
      tabBarVisible: false
    }
  });

    return (
        <MainNav />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#006633',

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#F5FCFF'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
