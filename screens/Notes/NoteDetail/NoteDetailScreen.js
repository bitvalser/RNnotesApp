import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { MapView } from 'expo';

export default class NoteDetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.note.header
  });
  note;
  constructor(props) {
    super(props);
    this.note = this.props.navigation.getParam('note');
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.note.image ? <Image style={styles.image} resizeMode="cover" source={{ uri: this.note.image }} /> : null}
          {this.note.coordinate ? (
            <MapView
              style={styles.map}
              initialRegion={{
                ...this.note.coordinate,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
              }}
            >
              <MapView.Marker coordinate={this.note.coordinate} />
            </MapView>
          ) : null}
          <Text style={styles.description}>{this.note.text}</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 40
  },
  image: {
    width: '100%',
    height: 200
  },
  description: {
    margin: 5
  },
  map: {
    width: '100%',
    height: 200
  }
});
