import PropTypes from 'prop-types';
import React, {Component} from 'react';
import LoginWithNumberScreenWithProps from './LoginWithNumberScreenWithProps';

class LoginWithNumberScreenContainer extends Component {
  static navigationOptions = () => ({
    headerStyle: {
      borderBottomWidth: 0,
      backgroundColor: '#F5F6FA',
    },
    headerTintColor: '#A3A3A3',
    headerBackTitle: null,
  });

  goToVerificationScreenHandler = number =>
    this.props.navigation.navigate('SmsVerficationScreen', {number});

  render() {
    return (
      <LoginWithNumberScreenWithProps
        onPress={this.goToVerificationScreenHandler}
      />
    );
  }
}

LoginWithNumberScreenContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default LoginWithNumberScreenContainer;
