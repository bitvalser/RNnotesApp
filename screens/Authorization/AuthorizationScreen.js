import React from 'react';
import { ScrollView, StyleSheet, Text, Button } from 'react-native';

export default class AuthorizationScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>AuthScreen</Text>
        <Button title="Register" onPress={() => this.props.navigation.navigate('Registration')} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
});
