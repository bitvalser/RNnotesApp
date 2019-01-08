import React from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import Colors from '../../core/constants/Colors';
import NoteComponent from './components/NoteComponent';
import { initNotes } from '../../redux/actions/notes';

class NotesScreen extends React.Component {
  static navigationOptions = {
    title: 'Notes'
  };
  constructor(props) {
    super(props);
    this.initNotes();
  }
  initNotes = () => {
    this.props.initNotesData();
  };
  render() {
    return (
      <View style={styles.container}>
        {this.props.isLoading ? <ActivityIndicator style={styles.loading} size="large" color={Colors.tintColor} /> : null}
        <FlatList
          style={{ width: '100%' }}
          data={Object.keys(this.props.data)}
          renderItem={({ item }) => <NoteComponent note={this.props.data[item]} navigation={this.props.navigation} />}
          keyExtractor={(item, index) => `note${index}`}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 5
  },
  loading: {
    top: '50%'
  }
});

export default connect(
  state => {
    return {
      isLoading: state.notes.isLoading,
      data: state.notes.data
    };
  },
  dispatch => ({
    initNotesData: () => {
      dispatch(initNotes());
    }
  })
)(NotesScreen);
