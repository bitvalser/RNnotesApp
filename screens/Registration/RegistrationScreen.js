import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import AuthTextInputComponent from '../../core/components/AuthTextInputComponent';
import Colors from '../../core/constants/Colors';

export default class RegistrationScreen extends React.Component {
  static navigationOptions = {
    title: 'Register',
    headerStyle: {
      backgroundColor: '#C0C0C0'
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      confirmPassword: ''
    };
  }
  register = () => {
    Alert.alert('register', `${this.state.login} ${this.state.password}`);
  };
  render() {
    return (
      <View style={styles.container}>
        <AuthTextInputComponent
          onChangeText={value => this.setState({ login: value })}
          placeholder="Enter login..."
        />
        <AuthTextInputComponent onChangeText={value => this.setState({ password: value })} placeholder="Enter password..." />
        <AuthTextInputComponent
          onChangeText={value => this.setState({ confirmPassword: value })}
          placeholder="Confirm password..."
        />
        <TouchableNativeFeedback onPress={this.register}>
          <View style={styles.register}>
            <Text style={styles.registerText}>REGISTER</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.tintColor
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  subHeader: {
    marginBottom: 30
  },
  register: {
    color: '#e8e8e8',
    margin: 5
  },
  register: {
    width: '50%',
    backgroundColor: '#FF0000',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40
  },
  registerText: {
    fontWeight: 'bold',
    color: '#fff'
  }
});
