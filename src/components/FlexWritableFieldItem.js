import PropTypes from 'prop-types';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Field} from 'redux-form';
import FormTextInput from './FormTextInput';

const FlexWritableFieldItem = ({
  title,
  component,
  name,
  format,
  parse,
  validate,
  containerStyle,
  titleStyle,
  textStyle,
  underline,
  borderBottomStyle,
  placeholderTextColor,
  inputContainer,
  textInputStyle,
  noError,
  isPhone,
  multiline,
  titleContainer,
  ...passMe
}) => (
  <View style={[styles.viewStyle, containerStyle]}>
    {title && (
      <View style={titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    )}
    <Field
      name={name}
      multiline={multiline}
      component={FormTextInput}
      format={format}
      parse={parse}
      title={title}
      validate={validate}
      isPhone={isPhone}
      inputContainer={inputContainer}
      textInputStyle={textInputStyle}
      placeholderTextColor={placeholderTextColor}
      {...passMe}
      style={[styles.fieldStyle, textStyle]}
    />

    {underline && <View style={[styles.borderBottom, borderBottomStyle]} />}
  </View>
);

const styles = StyleSheet.create({
  viewStyle: {
    height: 35,
  },
  fieldStyle: {
    fontFamily: 'GoogleSans-Medium',
    fontSize: 16,
    color: '#000000',
    padding: 0,
  },
  title: {
    fontFamily: 'GoogleSans-Medium',
    fontSize: 14,
    color: '#4d4d4d',
  },
  borderBottom: {
    height: 1,
    backgroundColor: '#babbbe',
    marginTop: 12,
  },
});

FlexWritableFieldItem.propTypes = {
  title: PropTypes.string,
  name: PropTypes.PropTypes.string.isRequired,
  component: PropTypes.any,
  format: PropTypes.func,
  parse: PropTypes.func,
  validate: PropTypes.array,
  autoCorrect: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  underline: PropTypes.bool,
};

FlexWritableFieldItem.defaultProps = {
  title: undefined,
  format: undefined,
  parse: undefined,
  validate: undefined,
  component: FormTextInput,
  autoCorrect: false,
  autoCapitalize: 'none',
  underline: false,
};

export default FlexWritableFieldItem;
