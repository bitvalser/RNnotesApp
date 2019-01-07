import React from 'react';
import { StyleSheet, View } from 'react-native';

export default class AddNoteScreen extends React.Component {
  static navigationOptions = {
    title: 'Add Note'
  };

  render() {
    return (
      <View style={styles.container}>
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
