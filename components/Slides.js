import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button, Card, Avatar } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  renderSignInButton(index) {
    if (index === this.props.data.length - 4) {
      return (
        <View style={{ width: SCREEN_WIDTH }}>
          <Button
            title="Join now"
            buttonStyle={styles.buttonStyle}
            onPress={this.props.onComplete}
          />
          <Button
            title="Sign in"
            color="#006699"
            buttonStyle={styles.buttonStyle2}
            onPress={this.props.onComplete1}
          />
        </View>
      );
    }
  }

  renderSignInButton2(index) {
    if (index === this.props.data.length - 3) {
      return (
        <View style={{ width: SCREEN_WIDTH }}>
          <Button
            title="Join now"
            buttonStyle={styles.buttonStyle3}
            onPress={this.props.onComplete}
          />
          <Button
            title="Sign in"
            color="#006699"
            buttonStyle={styles.buttonStyle4}
            onPress={this.props.onComplete1}
          />
        </View>
      );
    }
  }

  renderSignInButton3(index) {
    if (index === this.props.data.length - 2) {
      return (
        <View style={{ width: SCREEN_WIDTH }}>
          <Button
            title="Join now"
            buttonStyle={styles.buttonStyle5}
            onPress={this.props.onComplete}
          />
          <Button
            title="Sign in"
            color="#fff"
            buttonStyle={styles.buttonStyle6}
            onPress={this.props.onComplete1}
          />
        </View>
      );
    }
  }

  renderSignInButton4(index) {
    if (index === this.props.data.length - 1) {
      return (
        <View style={{ width: SCREEN_WIDTH }}>
          <Button
            title="Join now"
            buttonStyle={styles.buttonStyle7}
            onPress={this.props.onComplete}
          />
          <Button
            title="Sign in"
            color="#138593"
            buttonStyle={styles.buttonStyle8}
            onPress={this.props.onComplete1}
          />
        </View>
      );
    }
  }

  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return (
        <View style={{ width: SCREEN_WIDTH, marginBottom: 0, marginTop: 90 }}>
          <Card>
              <View style={{ flexDirection: 'row' }}>
              <Avatar
                size={1000}
                rounded
                title="NI"
                activeOpacity={100}
                containerStyle={{
                  width: 70,
                  height: 70,
                  borderWidth: 1,
                  borderColor: '#006699',
                  borderRadius: 50,
                  overflow: 'hidden' }}
              />
                <View
                    style={{
                      justifyContent: 'center',
                      fontSize: 15,
                      color: 'black',
                      marginLeft: 20,
                      marginBottom: 30 }}
                >
                <Text style={{ color: 'black', fontSize: 15 }}>
                  Newton can link you to 4 jobs
                </Text>
                </View>
            </View>

            <View
              style={{
                borderBottomColor: 'grey',
                borderBottomWidth: 1,
                marginBottom: 10,
                marginTop: 10,
                paddingRight: 90
            }}
            />

            <View style={{ flexDirection: 'row' }}>
            <Avatar
              size={500}
              activeOpacity={100}
              containerStyle={{
                width: 50,
                height: 50,
                borderWidth: 1,
                backgroundColor: 'purple',
                marginLeft: 20
             }}
            />
              <View
                  style={{
                    justifyContent: 'center',
                    fontSize: 15,
                    color: 'black',
                    marginLeft: 20,
                    marginBottom: 30 }}
              >
              <Text style={{ color: 'black', fontSize: 13, fontWeight: 'bold' }}>
                Your next job
              </Text>
              </View>
              </View>
              <View
                style={{
                  borderBottomColor: 'grey',
                  borderBottomWidth: 1,
                  marginBottom: 10,
                  marginTop: 10,
                  paddingRight: 90
              }}
              />

              <View style={{ flexDirection: 'row' }}>
              <Avatar
                size={500}
                activeOpacity={100}
                containerStyle={{
                  width: 50,
                  height: 50,
                  borderWidth: 1,
                  backgroundColor: '#006633',
                  marginLeft: 20
               }}
              />
                <View
                    style={{
                      justifyContent: 'center',
                      fontSize: 15,
                      color: 'black',
                      marginLeft: 20,
                      marginBottom: 30 }}
                >
                <Text style={{ color: 'black', fontSize: 13, fontWeight: 'bold' }}>
                  Your next career move
                </Text>
                </View>
          </View>
          </Card>
        </View>
      );
    }
  }


  renderAvatarCard(index) {
    if (index === this.props.data.length - 2) {
      return (
        <View style={{ marginBottom: 10, marginTop: 30 }}>
        <View style={{ flexDirection: 'row', bottom: 95, paddingLeft: 10 }}>
        <Avatar
          size={1000}
          rounded
          title="NI"
          activeOpacity={100}
          containerStyle={{
            width: 70,
            backgroundColor: '#cccccc',
            height: 70,
            marginLeft: 10,
            borderWidth: 1,
            borderColor: '#006699',
            borderRadius: 50,
            overflow: 'hidden' }}
        />
        <Card>
          <Text
          style={{
            color: 'black',
          fontSize: 15 }}
          >Congrats on your new role!</Text>
        </Card>
        </View>
        <Avatar
          size={1000}
          rounded
          title="NI"
          activeOpacity={100}
          containerStyle={{
            width: 100,
            backgroundColor: '#ffffff',
            height: 100,
            borderWidth: 1,
            borderColor: '#006699',
            borderRadius: 75,
            bottom: 80,
            marginLeft: 50,
            overflow: 'hidden' }}
        />
        <View style={{ marginLeft: 200, bottom: 80 }}>
        <Card >
          <Text
          style={{
            color: 'black',
            fontSize: 15,
            }}
          >Thanks, sure!</Text>
        </Card>
        </View>
        </View>
      );
    }
  }

  renderCard(index) {
    if (index === this.props.data.length - 3) {
      return (
        <View style={{ width: SCREEN_WIDTH }}>

          <Card style={{ top: 80 }}>
              <View style={{ flexDirection: 'row' }}>
              <Avatar
                size={1000}
                rounded
                title="NI"
                activeOpacity={100}
                containerStyle={{
                  width: 70,
                  height: 70,
                  borderWidth: 1,
                  borderColor: '#006699',
                  borderRadius: 50,
                  overflow: 'hidden' }}
              />
                <View
                    style={{
                      justifyContent: 'center',
                      fontSize: 15,
                      color: 'black',
                      marginLeft: 20,
                      marginBottom: 30 }}
                >
                <Text style={{ color: 'black', fontSize: 20 }}>
                  Newton Imonjirie
                </Text>
                <Text>
                  Mobile Applications Developer
                </Text>
                <Text>Lagos, Nigeria</Text>
                </View>
            </View>

            <View
              style={{
                borderBottomColor: 'grey',
                borderBottomWidth: 1,
            }}
            />
            <Text
              style={{
                color: '#006699',
                fontSize: 15,
                marginLeft: 120,
                marginTop: 10
              }}
            >
              Connect
              </Text>
          </Card>
        </View>
      );
    }
  }

  renderSlides() {
    return this.props.data.map((slide, index) => {
      return (
        <View
           key={slide.text}
           style={[styles.slideStyle, { backgroundColor: slide.color }]}
        >
            <Text
                style={[styles.linkedinTextStyle,
                   { color: slide.text_color,
                     marginLeft: slide.marginLeft,
                     marginBottom: slide.marginBottom,
                     marginTop: slide.marginTop,
                     paddingBottom: slide.paddingBottom,
                     alignItems: slide.alignItems,
                     bottom: slide.bottom,
                     justifyContent: slide.justifyContent,
                    }
                  ]}
            >
              {slide.text}
            </Text>
            <Text style={styles.textStyle2}>{slide.text_s}</Text>
            <Text style={styles.linkedinTextStyle2}>{slide.text_ss}</Text>
            {this.renderCard(index)}
            {this.renderSignInButton(index)}
            {this.renderSignInButton2(index)}
            {this.renderAvatarCard(index)}
            {this.renderSignInButton3(index)}
            {this.renderLastSlide(index)}
            {this.renderSignInButton4(index)}
        </View>
    );
    });
  }

  render() {
    return (
      <ScrollView
        horizontal
        style={{ flex: 1 }}
        pagingEnabled
        showsHorizontalScrollIndicator
      >
      {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  textStyle: {
    fontSize: 30,
    color: 'white',
  },
  linkedinTextStyle: {
    top: 220,
    fontSize: 30,
    color: 'black',
    paddingBottom: 20

},
linkedinTextStyle2: {
  bottom: 100,
  fontSize: 30,
  marginLeft: 10,
  color: 'white',

},
textStyle2: {
  fontSize: 20,
  top: 220,
  paddingBottom: 100
},
buttonStyle: {
  backgroundColor: '#006699',
  marginTop: 300,
  width: '100%',
  borderColor: '#fff',
  borderWidth: 1,
  fontSize: 20,
  marginBottom: 10,
},
buttonStyle2: {
  backgroundColor: '#ffffff',
  color: 'black',
  paddingRight: 140,
  width: '140%',
  fontSize: 20,
  bottom: 10,

},
buttonStyle3: {
  backgroundColor: '#006699',
  width: '100%',
  borderColor: '#fff',
  borderWidth: 1,
  marginBottom: 5,
  marginTop: 150,
},
buttonStyle4: {
  backgroundColor: '#ffffff',
  color: 'black',
  width: '100%',
  fontSize: 20,
  marginBottom: 160
},
buttonStyle5: {
  backgroundColor: 'transparent',
  width: '100%',
  borderColor: '#fff',
  borderWidth: 1,
  marginBottom: 5,
  marginTop: 20,
  bottom: 60
},
buttonStyle6: {
  backgroundColor: 'transparent',
  color: 'white',
  width: '100%',
  fontSize: 20,
  bottom: 60
},
buttonStyle7: {
  backgroundColor: 'transparent',
  width: '100%',
  borderColor: '#fff',
  borderWidth: 1,
  marginBottom: 5,
  marginTop: 100
},
buttonStyle8: {
  backgroundColor: 'white',
  color: '#138593',
  width: '100%',
  fontSize: 20,
  marginBottom: 200
  // top: 120
}
};

export default Slides;
