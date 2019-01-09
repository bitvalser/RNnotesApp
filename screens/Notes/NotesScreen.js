import React from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator, Text } from 'react-native';
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
    this.props.initNotesData(this.props.user.uid);
  };
  render() {
    return (
      <View style={styles.container}>
        {this.props.isLoading ? (
          <ActivityIndicator style={styles.loading} size="large" color={Colors.tintColor} />
        ) : null}
        {!this.props.data && !this.props.isLoading ? (
          <View style={styles.textContainer}>
            <Text style={styles.empty}>You dont have any notes.</Text>
          </View>
        ) : (
          <FlatList
            style={{ width: '100%' }}
            data={Object.keys(this.props.data ? this.props.data : {})}
            renderItem={({ item }) => <NoteComponent note={this.props.data[item]} navigation={this.props.navigation} />}
            keyExtractor={(item, index) => `note${index}`}
          />
        )}
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
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loading: {
    top: '50%'
  },
  empty: {
    fontSize: 25,
    fontWeight: 'bold'
  }
});

export default connect(
  state => {
    return {
      isLoading: state.notes.isLoading,
      data: state.notes.data,
      user: state.authorization.data.user
    };
  },
  dispatch => ({
    initNotesData: uid => {
      dispatch(initNotes(uid));
    }
  })
)(NotesScreen);
