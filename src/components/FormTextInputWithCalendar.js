import React from 'react';
import PropTypes from 'prop-types';
import {TextInput, View, StyleSheet, Platform} from 'react-native';
import CalendarButton from './CalendarButton';
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
    tintColor: '#000000',
  },
  invalid: {
    tintColor: 'red',
  },
});

const handleOnPress = ({navigation, metaForm, inputName, isFutureDate}) => {
  if (navigation) {
    const props = {
      rangeSelect: false,
      form: metaForm,
      startField: inputName,
      endField: undefined,
      isFutureDate,
    };

    navigation.navigate('CalendarModal', props);
  }
};

export default function FormTextInputWithCalendar(props) {
  const {
    input: {name, onChange, value, onFocus, onBlur},
    meta: {valid, pristine, form},
    aggressive,
    navigation,
    isFutureDate,
    ...inputProps
  } = props;
  const {style, containerStyle} = inputProps;

  const validationStyles = isFieldValid({valid, pristine, aggressive})
    ? styles.valid
    : styles.invalid;
  const handleProps = {
    navigation,
    metaForm: form,
    inputName: name,
    isFutureDate,
  };

  return (
    <View style={[styles.inputContainer, containerStyle]}>
      <TextInput
        {...inputProps}
        onChangeText={onChange}
        value={value}
        style={[styles.input, style]}
        {...Platform.select({
          ios: {onFocus, onBlur},
          android: {},
        })}
      />
      <CalendarButton
        style={validationStyles}
        onPress={() => handleOnPress(handleProps)}
      />
    </View>
  );
}

FormTextInputWithCalendar.propTypes = {
  navigation: PropTypes.object.isRequired,
  isFutureDate: PropTypes.bool.isRequired,
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

FormTextInputWithCalendar.defaultProps = {
  aggressive: false,
};
