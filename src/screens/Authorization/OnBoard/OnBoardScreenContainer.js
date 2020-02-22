import React, {Component} from 'react';
import OnBoardScreenWithProps from './OnBoardScreenWithProps';

class OnBoardScreenContainer extends Component {
  state = {
    index: null,
  };

  static navigationOptions = () => ({
    headerStyle: {
      borderBottomWidth: 0,
      backgroundColor: '#F5F6FA',
      elevation: 0,
    },
    headerTintColor: '#A3A3A3',
    headerBackTitle: null,
  });

  onJobTypeSelectHandler = index => {
    this.setState({
      index,
    });
  };

  goToRegistrationFillScreenHandler = () =>
    this.props.navigation.navigate('InfoFillScreen');

  render() {
    const {index} = this.state;
    return (
      <OnBoardScreenWithProps
        onPress={this.goToRegistrationFillScreenHandler}
        selectedIndex={index}
        onJobTypeSelectHandler={this.onJobTypeSelectHandler}
      />
    );
  }
}

export default OnBoardScreenContainer;
