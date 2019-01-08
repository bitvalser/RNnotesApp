import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { MapView } from 'expo';

export default class MapScreen extends React.Component {
  static navigationOptions = {
    title: 'Map'
  };
  constructor(props) {
    super(props);
    this.state = {
      coordinate: { latitude: 37.78825, longitude: -122.4324 }
    };
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
  }
});
