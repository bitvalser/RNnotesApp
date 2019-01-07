import React from 'react';
import { View, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, TextInput, Alert } from 'react-native';
import AuthTextInputComponent from '../../core/components/AuthTextInputComponent';
import Colors from '../../core/constants/Colors';

export default class AuthorizationScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: ''
    };
  }
  login = () => {
    Alert.alert('login', `${this.state.login} ${this.state.password}`);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Notes App</Text>
        <Text style={styles.subHeader}>react native edition</Text>
        <AuthTextInputComponent onChangeText={value => this.setState({ login: value })} placeholder="Enter login..." />
        <AuthTextInputComponent
          onChangeText={value => this.setState({ password: value })}
          placeholder="Enter password..."
        />
        <TouchableNativeFeedback onPress={this.login}>
          <View style={styles.login}>
            <Text style={styles.loginText}>LOGIN</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Registration')}>
          <Text style={styles.register}>Create Account</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
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
  login: {
    width: '50%',
    backgroundColor: '#FFFF00',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40
  },
  loginText: {
    fontWeight: 'bold'
  }
});
