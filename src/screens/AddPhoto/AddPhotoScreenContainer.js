import React, {Component} from 'react';
import {View, Image, TouchableOpacity, StyleSheet, Text} from 'react-native';
import AddPhotoScreenWithProps from './AddPhotoScreenWithProps';

class AddPhotoScreenContainer extends Component {
  static navigationOptions = ({navigation}) => ({
    headerLeft: () => (
      <View style={styles.headerLeftContainer}>
        <Text style={styles.headerLeftText}>Albums</Text>
      </View>
    ),
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigation.state.params.openNewAlbumHandler()}>
        <View style={styles.headerRightContainer}>
          <Image source={require('../../assets/headerAddIcon.png')} />
        </View>
      </TouchableOpacity>
    ),
    headerStyle: {
      borderBottomWidth: 0,
    },
  });

  state = {
    isEmpty: true,
  };

  componentDidMount() {
    this.props.navigation.setParams({
      openNewAlbumHandler: this.openNewAlbumHandler,
    });
  }

  showAddedALbumsHandler = () => {
    this.setState({
      isEmpty: false,
    });
  };

  openModalHandler = () => {
    this.props.navigation.navigate('ModalSack');
  };

  openNewAlbumHandler = () =>
    this.props.navigation.navigate('NewAlbumModalStack');

  render() {
    const {isEmpty} = this.state;
    return (
      <AddPhotoScreenWithProps
        isEmpty={isEmpty}
        showAddedALbumsHandler={this.showAddedALbumsHandler}
        openModalHandler={this.openModalHandler}
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
