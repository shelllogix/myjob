import PropTypes from 'prop-types';
import React from 'react';
import {TextInput, Text, View, StyleSheet, Platform} from 'react-native';
import {isFieldValid} from './utils';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  input: {
    flex: 1,
    padding: 0,
    alignSelf: 'center',
  },
  mark: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  valid: {
    backgroundColor: 'transparent',
  },
  invalid: {
    backgroundColor: 'red',
  },
});

/**
 * to be wrapped with redux-form Field component
 */
export default function FormTextInput(props) {
  const {
    textInputStyle,
    input,
    meta: {valid, pristine},
    aggressive,
    noError,
    Icon,
    isPhone,
    RightIcon,
    multiline,
    ...inputProps
  } = props;
  const {style} = inputProps;

  const validationStyles = isFieldValid({valid, pristine, aggressive})
    ? styles.valid
    : styles.invalid;

  return (
    <View style={styles.inputContainer}>
      {Icon && <Icon />}
      {isPhone && <Text style={[style]}>+7</Text>}
      <TextInput
        multiline={multiline}
        {...inputProps}
        onChangeText={input.onChange}
        value={input.value}
        style={[styles.input, style, textInputStyle]}
        {...Platform.select({
          ios: {onFocus: input.onFocus, onBlur: input.onBlur},
          android: {},
        })}
      />
      {!noError && <View style={[styles.mark, validationStyles]} />}
    </View>
  );
}

FormTextInput.propTypes = {
  aggressive: PropTypes.bool,
  input: PropTypes.shape({
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    value: PropTypes.any.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    active: PropTypes.bool.isRequired,
    invalid: PropTypes.bool.isRequired,
    pristine: PropTypes.bool.isRequired,
    visited: PropTypes.bool.isRequired,
  }).isRequired,
};

FormTextInput.defaultProps = {
  aggressive: false,
};
