import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthorizationNavigator from './AuthorizationNavigator';
import AuthLoadingScreen from '../screens/AuthLoading/AuthLoading';

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  AuthLoading: AuthLoadingScreen,
  Main: MainTabNavigator,
  Auth: AuthorizationNavigator
},{
  initialRouteName: 'AuthLoading'
}));