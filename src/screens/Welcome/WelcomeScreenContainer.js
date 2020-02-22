import PropTypes from 'prop-types';
import React, {Component} from 'react';
import WelcomeScreenWithProps from './WelcomeScreenWithProps';

class WelcomeScreenContainer extends Component {
  static navigationOptions = () => ({
    headerBackTitle: null,
    header: null,
  });

  withNumberLoginHandler = () =>
    this.props.navigation.navigate('LoginWithNumberScreen');

  createNewAccauntHandler = () =>
    this.props.navigation.navigate('ChangeNumberScreen');

  resetAccauntHandler = () =>
    this.props.navigation.navigate('ResetPasswordScreen');

  render() {
    return (
      <WelcomeScreenWithProps
        onPress={[this.withNumberLoginHandler, this.createNewAccauntHandler]}
        resetAccauntHandler={this.resetAccauntHandler}
      />
    );
  }
}

WelcomeScreenContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default WelcomeScreenContainer;
