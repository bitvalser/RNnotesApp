import React from 'react';
import { ActivityIndicator, AsyncStorage, StatusBar, StyleSheet, View } from 'react-native';

export default class AuthLoadingScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.checkState();
  }

  checkState = async () => {
    const auth = true;
    setTimeout(() => {
      this.props.navigation.navigate(auth ? 'Main' : 'Auth');
    }, 1000);
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
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
    backgroundColor: '#fff'
  }
});
