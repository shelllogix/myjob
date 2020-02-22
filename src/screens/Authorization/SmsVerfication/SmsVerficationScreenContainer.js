import PropTypes from 'prop-types';
import React, {Component} from 'react';
import SmsVerficationScreenWithProps from './SmsVerficationScreenWithProps';
import {noop} from '../../../utils/noop';

class SmsVerficationScreenContainer extends Component {
  static navigationOptions = () => ({
    headerStyle: {
      borderBottomWidth: 0,
      backgroundColor: '#F5F6FA',
    },
    headerTintColor: '#A3A3A3',
    headerBackTitle: null,
  });

  goToEmailVerificationScreen = () => noop;

  render() {
    const {number} = this.props.navigation.state.params;
    return (
      <SmsVerficationScreenWithProps
        number={number}
        onPress={this.goToEmailVerificationScreen}
      />
    );
  }
}

SmsVerficationScreenContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SmsVerficationScreenContainer;
