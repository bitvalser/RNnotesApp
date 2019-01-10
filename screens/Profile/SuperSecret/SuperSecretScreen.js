import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Video } from 'expo';

export default class SuperSecretScreen extends React.Component {
  static navigationOptions = {
    title: 'Super secret screen'
  };
  logout = () => {
    this.props.logout();
  };
  render() {
    return (
      <View style={styles.container}>
        <Video
          source={require('../../../assets/videos/videoplayback.mp4')}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{ width: '100%', height: '100%' }}
        />
      </View>
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
