import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';

export default class NoteComponent extends React.Component {
  render() {
    return (
      <View elevation={5} style={styles.container}>
        <Image style={styles.image} resizeMode="cover" source={{ uri: this.props.note.image }} />
        <Text style={styles.header}>{this.props.note.header}</Text>
        <Text style={styles.text}>{this.props.note.text}</Text>
        <Button
          title="Details"
          onPress={() => {
            this.props.navigation.navigate('NoteDetail', { note: this.props.note });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginBottom: 0,
    backgroundColor: '#fcfcfc',
    borderRadius: 5,
    overflow: 'hidden',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    borderWidth: 1,
    borderColor: '#cecece'
  },
  text: {
    margin: 5
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 5
  },
  image: {
    width: '100%',
    height: 200
  }
});
