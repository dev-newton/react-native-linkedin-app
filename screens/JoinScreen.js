import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { Card, Button, FormInput } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class JoinScreen extends Component {
  render() {
    return (
      <View style={{ width: SCREEN_WIDTH, backgroundColor: '#138593', paddingBottom: 110 }}>
        <Card containerStyle={{ marginBottom: 10, marginTop: 60 }}>
          <FormInput
            placeholder='First Name'
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
            placeholder='Last Name'
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
          <FormInput
            placeholder='Email'
            underlineColorAndroid={'white'}
          />
          <View
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
              bottom: 10,
              left: 0
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
              marginBottom: 10,
              bottom: 10,
              left: 0
          }}
          />
        </Card>
        <Text
        style={{
          color: 'white',
          marginLeft: 20,
          marginTop: 10,
          marginBottom: 20,
        }}
        >
          By clicking Join now, you agree to the LinkedIn User Agreement,
          Privacy Policy and Cookie Policy
          </Text>
          <Button
            title="Join now"
            buttonStyle={{
              width: '100%',
              borderColor: '#fff',
              borderWidth: 1,
              backgroundColor: 'transparent',
              fontSize: 20
            }}
          />

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Sign')}>
          <Text
            style={{
              color: 'white',
              marginLeft: 60,
              marginTop: 20,
              fontSize: 16
            }}
          >
          Already have an account? Sign in
          </Text>
          </TouchableOpacity>

      </View>
    );
  }
}

export default JoinScreen;
