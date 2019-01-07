import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import Colors from '../../core/constants/Colors';
import { connect } from 'react-redux';
import { initAuthState } from '../../redux/actions/authorization';

class AuthLoadingScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.checkState();
  }

  checkState = () => {
    this.props.initAuth();
  };

  render() {
    return (
      <View style={styles.container}>
        {this.props.isLoading ? <ActivityIndicator size="large" color={Colors.tintColor} /> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});

export default connect(
  state => {
    return {
      isLoading: state.authorization.isLoading
    };
  },
  dispatch => ({
    initAuth: () => {
      dispatch(initAuthState());
    }
  })
)(AuthLoadingScreen);
