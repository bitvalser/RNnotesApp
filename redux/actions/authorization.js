import firebase from 'firebase';
import {Alert} from 'react-native';
import NavigationService from '../../navigation/NavigationService';

export const AuthAction = {
    INIT_AUTH: 'INIT_AUTH',
    AUTH_STATE_LOGIN: 'AUTH_STATE_LOGIN',
    AUTH_STATE_NOT_LOGIN: 'AUTH_STATE_NOT_LOGIN',
    LOGIN: 'LOGIN',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILED: 'LOGIN_FAILED',
    REGISTER: 'REGISTER',
    REGISTER_SUCCESS: 'REGISTER_SUCCESS',
    REGISTER_FAILED: 'REGISTER_FAILED',
    LOGOUT: 'LOGOUT'
};

export const initAuthState = () => dispatch => {
  dispatch({ type: AuthAction.INIT_AUTH });
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        dispatch({ type: AuthAction.AUTH_STATE_LOGIN, payload: firebaseUser});
        NavigationService.navigate('Main');
    } else {
        dispatch({ type: AuthAction.AUTH_STATE_NOT_LOGIN });
        NavigationService.navigate('Auth');
    }
  });
};

export const loginUser = (login, password) => dispatch => {
    dispatch({ type: AuthAction.LOGIN });
    firebase.auth().signInWithEmailAndPassword(login, password).then(
        user => {
            dispatch({ type: AuthAction.LOGIN_SUCCESS, payload: user });
        },
        error => {
            dispatch({ type: AuthAction.LOGIN_FAILED });
            Alert.alert('Login Error', error.message);
        }
    )
}

export const registerUser = (login, password) => dispatch => {
    dispatch({ type: AuthAction.REGISTER });
    firebase.auth().createUserWithEmailAndPassword(login, password).then(
        user => {
            dispatch({ type: AuthAction.REGISTER_SUCCESS, payload: user });
        },
        error => {
            dispatch({ type: AuthAction.REGISTER_FAILED });
            Alert.alert('Register Error', error.message);
        }
    )
}

export const logoutUser = () => dispatch => {
    firebase.auth().signOut().then(() => {
        NavigationService.navigate('Auth');
        dispatch({ type: AuthAction.LOGOUT });
    });
}