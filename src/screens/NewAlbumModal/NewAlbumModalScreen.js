import React from 'react';
import {reduxForm} from 'redux-form';
import {View, Text, StyleSheet} from 'react-native';
import FlexWritableFieldItem from '../../components/FlexWritableFieldItem';
import FlexButton from '../../components/FlexButton';

const NewAlbumModalScreen = ({
  title,
  subTitle,
  inputText,
  buttons,
  goBackHandler,
}) => (
  <View style={styles.container}>
    <View style={styles.modalContent}>
      <View style={styles.modalTopContent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
        <FlexWritableFieldItem
          name={inputText.name}
          placeholder={inputText.placeholder}
          underline={inputText.underline}
          placeHolderColor={inputText.placeHolderColor}
        />
      </View>
      <View style={styles.buttonContainer}>
        {buttons.map(button => (
          <FlexButton
            key={button.id}
            title={button.title}
            containerStyle={button.containerStyle}
            onPress={goBackHandler}
          />
        ))}
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(8, 8, 10, 0.91)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    height: 204,
    width: 270,
    backgroundColor: '#131314',
    borderRadius: 14,
    justifyContent: 'flex-end',
  },
  modalTopContent: {
    paddingHorizontal: 22,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'GoogleSans-Medium',
    fontSize: 17,
    color: '#ffffff',
    textAlign: 'center',
  },
  subTitle: {
    fontFamily: 'GoogleSans-Medium',
    fontSize: 11,
    color: '#ffffff',
    marginBottom: 27,
    marginTop: 8,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
});

export default reduxForm({
  form: 'newAlbum',
})(NewAlbumModalScreen);
