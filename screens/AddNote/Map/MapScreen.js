import React from 'react';
import { StyleSheet, View, Alert, ActivityIndicator } from 'react-native';
import { MapView, Audio } from 'expo';
import Colors from '../../../core/constants/Colors';

export default class MapScreen extends React.Component {
  static navigationOptions = {
    title: 'Map'
  };
  soundObject = new Audio.Sound();
  isLoading = false;
  constructor(props) {
    super(props);
    this.state = {
      coordinate: { latitude: 37.78825, longitude: -122.4324 }
    };
  }
  componentDidMount = () => {
    this.playMusic();
  }
  playMusic = async () => {
    try {
      await this.soundObject.loadAsync(require('../../../assets/sounds/sanFrancisko.mp3'));
      await this.soundObject.playAsync();
    } catch (error) {
      Alert.alert('Error', error);
    }
  };
  componentWillUnmount = () => {
    this.soundObject.stopAsync();
  }
  setMarker = event => {
    this.setState({
      coordinate: event.nativeEvent.coordinate
    });
    this.props.navigation.state.params.setCoordinates(event.nativeEvent.coordinate);
  };
  render() {
    return (
      <View style={styles.container}>
        {this.isLoading ? (
          <ActivityIndicator style={styles.loading} size="large" color={Colors.tintColor} />
        ) : (
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
            onPress={this.setMarker}
          >
            <MapView.Marker coordinate={this.state.coordinate} />
          </MapView>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  map: {
    flex: 1
  },
  loading: {
    top: '50%'
  }
});
