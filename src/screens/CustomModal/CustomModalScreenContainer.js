import React, {Component} from 'react';
import CustomModalScreenWithProps from './CustomModalScreenWithProps';

class CustomModalScreenContainer extends Component {
  goBackHandler = () => this.props.navigation.navigate('TabStack');
  render() {
    return <CustomModalScreenWithProps goBackHandler={this.goBackHandler} />;
  }
}

export default CustomModalScreenContainer;
