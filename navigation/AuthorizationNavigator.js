import { createStackNavigator } from 'react-navigation';
import AuthorizationScreen from '../screens/Authorization/AuthorizationScreen';
import RegisterationScrreen from '../screens/Registration/RegistrationScreen';

export default createStackNavigator({
  Authorization: AuthorizationScreen,
  Registration: RegisterationScrreen
}, {
    initialRouteName: 'Authorization'
});
