import React from 'react';
import {View, Image, ScrollView, Text, StyleSheet} from 'react-native';
import FlexButton from '../../components/FlexButton';
import CustomModal from '../../components/CustomModal';

const AddPhotoScreen = ({
  isEmpty,
  showAddedALbumsHandler,
  title,
  buttonTitle,
  albums,
}) => (
  <>
    <View style={styles.border} />
    {isEmpty ? (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlexButton
          containerStyle={styles.buttonContainer}
          textStyle={styles.buttonText}
          onPress={showAddedALbumsHandler}
          title={buttonTitle}
        />
      </View>
    ) : (
      <ScrollView contentContainerStyle={styles.container}>
        {albums.map(album => (
          <View key={album.id} style={styles.albumItem}>
            <View style={styles.albumItemTitleContainer}>
              <Text style={styles.albumType}>{album.albumType}</Text>
              <View style={styles.dotContainer}>
                <View style={styles.dot} />
                <View style={styles.dot} />
                <View style={styles.dot} />
              </View>
            </View>
            <View style={styles.imageContainer}>
              <Image source={album.image} style={styles.albumImage} />
            </View>
            <View style={styles.albumItemTitleContainer}>
              <Text style={styles.albumTitle}>{album.albumTitle}</Text>
              <Text style={styles.secondaryText}>{album.albumItemsCount}</Text>
            </View>
            <View
              style={[
                styles.albumItemTitleContainer,
                styles.descriptionContainer,
              ]}>
              <Text style={styles.secondaryText}>{album.expairingCount}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    )}
    <View style={styles.border} />
    <CustomModal show/>
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 29,
    paddingTop: 50,
  },
  border: {
    height: 1,
    backgroundColor: '#f88a8a',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    fontSize: 15,
    textAlign: 'center',
  },
  buttonContainer: {
    backgroundColor: '#8459FF',
    borderRadius: 2,
    marginTop: 39,
  },
  buttonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 11,
  },
  albumItem: {
    borderRadius: 1.5,
    marginBottom: 31,
  },
  albumType: {
    fontFamily: 'Poppins-Medium',
    color: '#8459FF',
    fontSize: 11,
  },
  albumItemTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 19,
  },
  dot: {
    height: 4,
    width: 4,
    borderRadius: 2,
    backgroundColor: '#b3b3b3',
  },
  albumImage: {
    width: '100%',
  },
  imageContainer: {
    marginTop: 7,
    marginBottom: 10,
  },
  descriptionContainer: {
    marginTop: 9,
  },
  albumTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#000000',
  },
  secondaryText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 11,
    color: '#999',
  },
});

export default AddPhotoScreen;
