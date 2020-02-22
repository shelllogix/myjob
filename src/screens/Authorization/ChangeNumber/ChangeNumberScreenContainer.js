import PropTypes from 'prop-types';
import React, {Component} from 'react';
import ChangeNumberScreenWithProps from './ChangeNumberScreenWithProps';

class ChangeNumberScreenContainer extends Component {
  static navigationOptions = () => ({
    headerStyle: {
      borderBottomWidth: 0,
      backgroundColor: '#F5F6FA',
      elevation: 0,
    },
    headerTintColor: '#A3A3A3',
    headerBackTitle: null,
  });

  changeNumberHandler = () => this.props.navigation.navigate('OnBoardScreen');

  render() {
    return <ChangeNumberScreenWithProps onPress={this.changeNumberHandler} />;
  }
}

ChangeNumberScreenContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ChangeNumberScreenContainer;
