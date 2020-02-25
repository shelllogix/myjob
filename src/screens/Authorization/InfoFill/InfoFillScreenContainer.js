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

  ref = React.createRef();

  videRef = React.createRef();

  scrollToTop = () => {
    this.ref.current.scrollTo({animated: true}, 0);
  };

  imagePickerHandler = image => {
    this.setState({
      image,
    });
  };

  render() {
    const {image} = this.state;
    return (
      <InfoFillScreenWithProps
        infoFillRef={this.ref}
        videRef={this.videRef}
        noop={noop}
        getImageHandler={this.imagePickerHandler}
        avatar={image}
        scrollToTop={this.scrollToTop}
      />
    );
  }
}

export default InfoFillScreenContainer;
