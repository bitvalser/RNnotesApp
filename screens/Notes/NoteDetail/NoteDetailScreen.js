import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

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
      <View style={styles.container}>
        <Image style={styles.image} resizeMode="cover" source={{ uri: this.note.image }} />
        <Text style={styles.description}>{this.note.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  image: {
    width: '100%',
    height: 200
  },
  description: {
    margin: 5
  }
});
