import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import NoteComponent from './components/NoteComponent';

export default class NotesScreen extends React.Component {
  static navigationOptions = {
    title: 'Notes'
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{ width: '100%' }}
          data={[
            {
              header: 'hedaer1',
              text: 'text1',
              image: 'https://e3.365dm.com/18/01/768x432/skysports-ocean-rescuenew_4213727.jpg?20180124154904'
            },
            {
              header: 'hedaer2',
              text: 'text2',
              image: 'https://e3.365dm.com/18/01/768x432/skysports-ocean-rescuenew_4213727.jpg?20180124154904'
            },
            {
              header: 'hedaer3',
              text: 'text3',
              image: 'https://e3.365dm.com/18/01/768x432/skysports-ocean-rescuenew_4213727.jpg?20180124154904'
            },
            {
              header: 'hedaer4',
              text: 'text4',
              image: 'https://e3.365dm.com/18/01/768x432/skysports-ocean-rescuenew_4213727.jpg?20180124154904'
            }
          ]}
          renderItem={({ item }) => <NoteComponent note={item} navigation={this.props.navigation} />}
          keyExtractor={(item, index) => `note${index}`}
        />
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
