import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../core/components/TabBarIcon';
import NotesScreen from '../screens/Notes/NotesScreen';
import AddNoteScreen from '../screens/AddNote/AddNoteScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import NoteDetailScreen from '../screens/Notes/NoteDetail/NoteDetailScreen';

const NotesStack = createStackNavigator({
  Notes: NotesScreen,
  NoteDetail: NoteDetailScreen
});

NotesStack.navigationOptions = {
  tabBarLabel: 'Notes',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-albums${focused ? '' : '-outline'}` : 'md-albums'}
    />
  )
};

const AddNoteScreenStack = createStackNavigator({
  AddNote: AddNoteScreen
});

AddNoteScreenStack.navigationOptions = {
  tabBarLabel: 'Add Note',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'} />
};

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} />
  )
};

export default createBottomTabNavigator({
  NotesStack,
  AddNoteScreenStack,
  ProfileStack
});
