import React, {Component} from 'react';
import InfoFillScreenWithProps from './InfoFillScreenWithProps';
import {noop} from '../../../utils';

class InfoFillScreenContainer extends Component {
  static navigationOptions = () => ({
    header: null,
  });
  state = {
    image: null,
  };

  imagePickerHandler = image => {
    this.setState({
      image,
    });
  };

  render() {
    console.log(this.state.image, 'image????');
    return (
      <InfoFillScreenWithProps
        noop={noop}
        getImageHandler={this.imagePickerHandler}
      />
    );
  }
}

export default InfoFillScreenContainer;
