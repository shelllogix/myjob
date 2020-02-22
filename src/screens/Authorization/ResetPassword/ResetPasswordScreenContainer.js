import PropTypes from 'prop-types';
import React, {Component} from 'react';
import ResetPasswordScreenWithProps from './ResetPasswordScreenWithProps';

class ResetPasswordScreenContainer extends Component {
  static navigationOptions = () => ({
    headerStyle: {
      borderBottomWidth: 0,
      backgroundColor: '#F5F6FA',
    },
    headerTintColor: '#A3A3A3',
    headerBackTitle: null,
  });

  verifyEmailHandler = () =>
    this.props.navigation.navigate('VerifyEmailScreen');

  render() {
    return <ResetPasswordScreenWithProps onPress={this.verifyEmailHandler} />;
  }
}

ResetPasswordScreenContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ResetPasswordScreenContainer;
