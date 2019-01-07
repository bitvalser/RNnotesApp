import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

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
        <Text>{JSON.stringify(this.note)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
