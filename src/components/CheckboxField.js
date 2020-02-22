import PropTypes from 'prop-types';
import React from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';

const CheckboxField = ({enabled, onChange, containerStyle}) => (
  <View style={[styles.containerStyle, containerStyle]}>
    <TouchableOpacity
      onPress={onChange}
      activeOpacity={1}
      hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
      style={styles.checkboxStyle}>
      {enabled && <Image source={require('../assets/checkmark.png')} />}
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxStyle: {
    width: 18,
    height: 18,
    backgroundColor: '#424DE7',
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

CheckboxField.propTypes = {
  containerStyle: PropTypes.any,
  enabled: PropTypes.any.isRequired,
  onChange: PropTypes.any.isRequired,
  renderLeft: PropTypes.func,
};

CheckboxField.defaultProps = {
  containerStyle: undefined,
  renderLeft: null,
};

export default CheckboxField;
