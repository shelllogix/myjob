import React from 'react';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import R from 'ramda';
import {reduxForm} from 'redux-form';
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import FlexWritableFieldItem from '../../components/FlexWritableFieldItem';
import FlexButton from '../../components/FlexButton';

const LoginScreen = ({
  title,
  textField,
  description,
  button,
  enterWithNumberErr,
  enterWithNumber,
  onPress,
  number,
  sendText,
  enterSmsCodeErr,
  enterEmailErr,
  changeNumberErr,
}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    {sendText && (
      <View style={styles.repeatSendContainer}>
        <Text style={styles.repeatSend}>{`+7${number}`}</Text>
        <TouchableWithoutFeedback>
          <Text style={[styles.repeatSend, styles.send]}>{sendText}</Text>
        </TouchableWithoutFeedback>
      </View>
    )}
    <FlexWritableFieldItem
      underline={textField.underline}
      isPhone={textField.isPhone}
      keyboardType={textField.keyboardType}
      name={textField.name}
      validate={[textField.validate]}
      containerStyle={[styles.textField, textField.style]}
    />
    {description && <Text style={styles.description}>{description}</Text>}
    <FlexButton
      title={button.title}
      colors={button.colors}
      textStyle={styles.buttonText}
      disabled={
        enterWithNumberErr ||
        enterSmsCodeErr ||
        enterEmailErr ||
        changeNumberErr
      }
      onPress={() => onPress(enterWithNumber)}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#F5F6FA',
  },
  title: {
    fontFamily: 'GoogleSans-Medium',
    fontSize: 24,
    textAlign: 'center',
  },
  textField: {
    marginTop: 37,
  },
  description: {
    fontFamily: 'GoogleSans-Medium',
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.54)',
    marginTop: 46,
    marginBottom: 14,
  },
  buttonText: {
    fontSize: 16,
  },
  repeatSendContainer: {
    flexDirection: 'row',
    marginTop: 55,
    justifyContent: 'center',
  },
  repeatSend: {
    fontFamily: 'GoogleSans-Medium',
    fontSize: 16,
    color: '#000000',
  },
  send: {
    textDecorationLine: 'underline',
    color: '#5963e9',
  },
});

const mapStateToProps = createSelector(
  R.path(['form', 'login', 'syncErrors', 'enterWithNumber']),
  R.path(['form', 'login', 'values', 'enterWithNumber']),
  R.path(['form', 'login', 'syncErrors', 'enterSmsCode']),
  R.path(['form', 'login', 'syncErrors', 'enterEmail']),
  R.path(['form', 'login', 'syncErrors', 'changeNumber']),
  (
    enterWithNumberErr,
    enterWithNumber,
    enterSmsCodeErr,
    enterEmailErr,
    changeNumberErr,
  ) => ({
    enterWithNumberErr,
    enterWithNumber,
    enterSmsCodeErr,
    enterEmailErr,
    changeNumberErr,
  }),
);

export default reduxForm({
  form: 'login',
})(connect(mapStateToProps)(LoginScreen));
