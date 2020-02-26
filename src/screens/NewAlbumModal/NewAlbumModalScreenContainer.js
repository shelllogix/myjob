import React, {Component} from 'react';
import NewAlbumModalScreenWithProps from './NewAlbumModalScreenWithProps';

class NewAlbumModalScreenContainer extends Component {
  goBackHandler = () => this.props.navigation.navigate('TabStack');
  render() {
    return <NewAlbumModalScreenWithProps goBackHandler={this.goBackHandler} />;
  }
}

export default NewAlbumModalScreenContainer;
