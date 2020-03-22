/*Example to Turn on Flashlight to Make a Torch App in React Native*/
import React, { Component } from 'react';
import { TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import Torch from 'react-native-torch';

export default class App extends Component {
  state = {
    isTorchOn: false,
  };

  _handlePress() {
    const { isTorchOn } = this.state;
    Torch.switchState(!isTorchOn);
    this.setState({ isTorchOn: !isTorchOn });
  }

  render() {
    const { isTorchOn } = this.state;

    return (
      <View style={{ ...styles.container, backgroundColor: isTorchOn ? 'white' : 'black' }}>
        <TouchableHighlight style={styles.button} onPress={this._handlePress.bind(this)}>
          <Text style={styles.text}>{isTorchOn ? 'Desligar' : 'Ligar'}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  button: {
    backgroundColor: 'red',
    width: '55%',
    height: '35%',
    alignItems: 'center',
    borderRadius: 500
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    paddingVertical: '33%',
    color: 'white'
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});