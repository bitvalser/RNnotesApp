import firebase from 'firebase';
import { Notifications } from 'expo';
import { Platform } from 'react-native';

export const NotesAction = {
  INIT_NOTES: 'INIT_NOTES',
  UPDATE_NOTES: 'UPDATE_NOTES',
  ADD_NOTE_COMPLETE: 'ADD_NOTE_COMPLETE'
};

export const addNote = (note, uid) => dispatch => {
  firebase
    .database()
    .ref()
    .child('notes')
    .child(uid)
    .push(note, () => {
      Notifications.presentLocalNotificationAsync({
        title: note.header,
        body: 'Your notes has been saved',
        android: {
          channelId: 'notes-messages'
        }
      });
      dispatch({ type: NotesAction.ADD_NOTE_COMPLETE });
    });
};

export const initNotes = uid => dispatch => {
  if (Platform.OS === 'android') {
    Notifications.createChannelAndroidAsync('notes-messages', {
      name: 'Notes messages',
      sound: true
    });
  }
  dispatch({ type: NotesAction.INIT_NOTES });
  firebase
    .database()
    .ref()
    .child('notes')
    .child(uid)
    .on('value', e => {
      dispatch({ type: NotesAction.UPDATE_NOTES, payload: e.val() });
    });
};
