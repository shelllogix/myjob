import React, {Component} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import AddPhotoScreenWithProps from './AddPhotoScreenWithProps';

class AddPhotoScreenContainer extends Component {
  static navigationOptions = ({navigation}) => ({
    headerLeft: () => (
      <View style={styles.headerLeftContainer}>
        <Text style={styles.headerLeftText}>Albums</Text>
      </View>
    ),
    headerRight: () => (
      <View style={styles.headerRightContainer}>
        <Image source={require('../../assets/headerAddIcon.png')} />
      </View>
    ),
    headerStyle: {
      borderBottomWidth: 0,
    },
  });

  state = {
    isEmpty: true,
  };

  showAddedALbumsHandler = () => {
    this.setState({
      isEmpty: false,
    });
  };

  render() {
    const {isEmpty} = this.state;
    return (
      <AddPhotoScreenWithProps
        isEmpty={isEmpty}
        showAddedALbumsHandler={this.showAddedALbumsHandler}
      />
    );
  }
}

const styles = StyleSheet.create({
  headerLeftContainer: {
    paddingLeft: 27,
  },
  headerLeftText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    color: '#000000',
  },
  headerRightContainer: {
    paddingRight: 33,
  },
});

export default AddPhotoScreenContainer;
