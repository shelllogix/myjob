import PropTypes from 'prop-types';
import React, {Component} from 'react';
import VerifyEmailScreenWithProps from './VerifyEmailScreenWithProps';
import {noop} from '../../../utils';

class VerifyEmailScreenContainer extends Component {
  static navigationOptions = () => ({
    headerStyle: {
      borderBottomWidth: 0,
      backgroundColor: '#F5F6FA',
    },
    headerTintColor: '#A3A3A3',
    headerBackTitle: null,
  });

  verifyEmailHandler = () => noop;

  render() {
    return <VerifyEmailScreenWithProps onPress={this.verifyEmailHandler} />;
  }
}

VerifyEmailScreenContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default VerifyEmailScreenContainer;
