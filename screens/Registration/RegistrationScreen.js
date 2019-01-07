import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, Alert, ActivityIndicator } from 'react-native';
import AuthTextInputComponent from '../../core/components/AuthTextInputComponent';
import Colors from '../../core/constants/Colors';
import { connect } from 'react-redux';
import { registerUser } from '../../redux/actions/authorization';

class RegistrationScreen extends React.Component {
  static navigationOptions = {
    title: 'Register',
    headerStyle: {
      backgroundColor: '#C0C0C0'
    }
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
    if (this.state.password === this.state.confirmPassword) {
      this.props.register(this.state.login, this.state.password);
    } else {
      Alert.alert('Register error', 'Passwords do not match!');
    }
  };
  render() {
    return (
      <View style={styles.container}>
        {this.props.isLoading ? <ActivityIndicator style={styles.loading} size="large" color="#FFFF00" /> : null}
        <AuthTextInputComponent onChangeText={value => this.setState({ login: value })} placeholder="Enter login..." />
        <AuthTextInputComponent
          onChangeText={value => this.setState({ password: value })}
          placeholder="Enter password..."
          type="password"
        />
        <AuthTextInputComponent
          onChangeText={value => this.setState({ confirmPassword: value })}
          placeholder="Confirm password..."
          type="password"
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
    fontWeight: 'bold'
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
  },
  loading: {
    marginBottom: 30
  }
});

export default connect(
  state => {
    return {
      isLoading: state.authorization.isLoading
    };
  },
  dispatch => ({
    register: (login, password) => {
      dispatch(registerUser(login, password));
    }
  })
)(RegistrationScreen);
