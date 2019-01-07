import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import Colors from '../../core/constants/Colors';
import { logoutUser } from '../../redux/actions/authorization';

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile'
  };
  logout = () => {
    this.props.logout();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.email}>{this.props.user.email}</Text>
        <Button title="Logout" onPress={this.logout} color={Colors.dangerBackground} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  },
  email: {
    fontWeight: 'bold',
    fontSize: 30
  }
});

export default connect(
  state => {
    return {
      user: state.authorization.data.user
    };
  },
  dispatch => ({
    logout: () => {
      dispatch(logoutUser());
    }
  })
)(ProfileScreen);
