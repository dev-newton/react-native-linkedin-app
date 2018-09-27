import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import Slides from '../components/Slides';
import JoinScreen from '../screens/JoinScreen';

const SLIDE_DATA = [
  { text: 'LinkedIn', text_s: 'Connect to Opportunity', color: '#ffffff', text_color: '#000' },
  { text: 'Create your job profile',
    color: '#006699',
    text_color: '#fff',
    marginLeft: 10,
    marginBottom: 130,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25
   },
  { text_ss: 'Connect and keep in touch with your network',
    color: '#03A9F4',
    text_color: '#fff',
    marginLeft: 50,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25,
    marginTop: 80
   },
  { text: 'Find jobs through people you know',
    color: '#138593',
    text_color: '#fff',
    marginLeft: 50,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25,
   }
];

class WelcomeScreen extends Component {
  state = { token: null }

  async componentWillMount() {
    const token = await AsyncStorage.getItem('fb_token');

    if (token) {
      this.props.navigation.navigate('map');
      this.setState({ token });
    } else {
      this.setState({ token: false });
    }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate('Join');
  }

  onSlidesComplete1 = () => {
    this.props.navigation.navigate('Sign');
  }

  render() {
    return (
      <Slides
        data={SLIDE_DATA}
          onComplete={this.onSlidesComplete}
          onComplete1={this.onSlidesComplete1}
      />
    );
  }
}

export default WelcomeScreen;
