import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Button,
  Alert,
  PermissionsAndroid,
  TextInput,
  Text,
  ScrollView
} from 'react-native';
import { ImagePicker, MapView } from 'expo';
import { connect } from 'react-redux';
import Colors from '../../core/constants/Colors';
import Layout from '../../core/constants/Layout';
import { addNote } from '../../redux/actions/notes';

class AddNoteScreen extends React.Component {
  static navigationOptions = {
    title: 'Add Note'
  };
  imagePickerOptions = {
    base64: true
  };
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      text: '',
      header: '',
      coordinate: null
    };
  }
  setCoordinates = coordinate => {
    this.setState({ coordinate });
  };
  imageAlert = () => {
    Alert.alert('Take image', 'Select a method to get an image.', [
      { text: 'Cancel', onPress: () => {}, style: 'cancel' },
      { text: 'Camera', onPress: () => this.addImage('camera') },
      { text: 'Gallery', onPress: () => this.addImage('gallery') }
    ]);
  };
  addImage = async method => {
    let result = null;
    if (method === 'camera') {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        result = await ImagePicker.launchCameraAsync(this.imagePickerOptions);
      }
    } else {
      result = await ImagePicker.launchImageLibraryAsync(this.imagePickerOptions);
    }
    if (result && !result.cancelled) {
      const image = 'data:image/jpeg;base64,' + result.base64;
      this.setState({ image });
    }
  };
  addNote = () => {
    this.props.addNewNote(
      {
        header: this.state.header,
        text: this.state.text,
        image: this.state.image,
        coordinate: this.state.coordinate
      },
      this.props.user.uid
    );
    this.setState({
      image: null,
      text: '',
      header: '',
      coordinate: null
    });
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.label}>Header</Text>
          <TextInput
            onChangeText={value => this.setState({ header: value })}
            value={this.state.header}
            style={styles.textInput}
            placeholder="Enter Descrption..."
          />
          <Text style={styles.label}>Description</Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            onChangeText={value => this.setState({ text: value })}
            value={this.state.text}
            style={styles.textInput}
            placeholder="Enter Descrption..."
          />
          <TouchableOpacity onPress={this.imageAlert}>
            {!this.state.image ? (
              <View style={styles.imagePicker}>
                <Image style={styles.imageIcon} source={require('../../assets/images/addImage.png')} />
              </View>
            ) : (
              <View style={styles.imageContainer}>
                <Image style={styles.image} resizeMode="cover" source={{ uri: this.state.image }} />
                <Button
                  title="Remove image"
                  onPress={() => this.setState({ image: null })}
                  color={Colors.dangerBackground}
                />
              </View>
            )}
          </TouchableOpacity>
          {this.state.coordinate ? (
            <View style={styles.location}>
              <Text>{`lat: ${this.state.coordinate.latitude} lng: ${this.state.coordinate.longitude}`}</Text>
              <Button
                title="Remove Location"
                onPress={() => this.setState({ coordinate: null })}
                color={Colors.dangerBackground}
              />
            </View>
          ) : (
            <View style={styles.location}>
              <Button
                title="Add Location"
                onPress={() => this.props.navigation.navigate('Map', { setCoordinates: this.setCoordinates })}
                color={Colors.dangerBackground}
              />
            </View>
          )}
          <View style={styles.addNote}>
            <Button
              title="Add Note"
              onPress={this.addNote}
              disabled={this.state.header.length < 3 || this.state.text.length < 10}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    paddingBottom: 40
  },
  imagePicker: {
    borderRadius: 10,
    borderWidth: 3,
    borderStyle: 'dashed',
    margin: 10,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageIcon: {
    width: '20%',
    height: '20%'
  },
  image: {
    width: '100%',
    height: 200
  },
  imageContainer: {
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#dbdbdb',
    borderRadius: 2,
    marginLeft: 4,
    marginRight: 4,
    paddingLeft: 4,
    paddingRight: 4
  },
  label: {
    fontWeight: 'bold',
    marginLeft: 1
  },
  addNote: {
    marginLeft: 4,
    width: Layout.window.width - 8
  },
  location: {
    borderRadius: 10,
    justifyContent: 'center',
    margin: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#cecece'
  }
});

export default connect(
  state => {
    return {
      isLoading: state.notes.isLoading,
      user: state.authorization.data.user
    };
  },
  dispatch => ({
    addNewNote: (note, uid) => {
      dispatch(addNote(note, uid));
    }
  })
)(AddNoteScreen);
