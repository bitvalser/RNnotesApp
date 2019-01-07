import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default class AuthTextInputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
    };
  }
  render() {
    return (
      <TextInput
      style={{
        ...styles.input,
        ...(this.state.focus ? styles.inputFocus : {})
      }}
      onChangeText={this.props.onChangeText}
      onFocus={() => this.setState({ focus: true })}
      onBlur={() => this.setState({ focus: false })}
      placeholder={this.props.placeholder}
      placeholderTextColor="white"
      selectionColor="white"
      value={this.state.login}
      secureTextEntry={this.props.type === 'password'}
    />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 5,
    borderWidth: 0,
    width: '50%',
    margin: 5,
    marginTop: 0,
    paddingLeft: 5,
    paddingRight: 5
  },
  inputFocus: {
    borderWidth: 2,
    borderColor: '#fff'
  },
});