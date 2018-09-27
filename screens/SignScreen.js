import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { Card, Button, FormInput, Icon } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class SignScreen extends Component {
  render() {
    return (
      <View style={{ width: SCREEN_WIDTH, backgroundColor: '#138593', paddingBottom: 300 }}>
        <Card containerStyle={{ marginBottom: 10, marginTop: 60 }}>
          <FormInput
            placeholder='Email or Phone'
            underlineColorAndroid={'white'}
            style={{ bottom: 10 }}
          />
          <View
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
              bottom: 10,
              width: '100%',
              flex: 1
          }}
          />
          <FormInput
            placeholder='Password'
            underlineColorAndroid={'white'}
          />
          <View
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
              bottom: 10,
              flex: 1
          }}
          />
        </Card>
          <Button
            title="Sign in"
            buttonStyle={{
              width: '100%',
              borderColor: '#fff',
              borderWidth: 1,
              backgroundColor: 'transparent',
              fontSize: 20
            }}
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Sign')}>
            <Text
              style={{
                color: 'white',
                alignItems: 'center',
                marginLeft: 20,
                marginRight: 75,
                marginTop: 10,
                fontSize: 13
              }}
            >
          Forgot password?
            </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Join')}>
            <Text
              style={{
                color: 'white',
                alignItems: 'center',
                marginLeft: 90,
                marginTop: 10,
                fontSize: 13
              }}
            >
          Join now
            </Text>
            </TouchableOpacity>
          </View>

      </View>
    );
  }
}

export default SignScreen;
