import PropTypes from 'prop-types';
import React from 'react';
import {TouchableOpacity, View, Image, Text, StyleSheet} from 'react-native';
import IsGrandient from '../hoc/isGrandient';

const FlexButton = ({
  title,
  onPress,
  textStyle,
  containerStyle,
  disabled,
  disabledContainerStyle,
  colors,
  icon,
}) => (
  <IsGrandient style={styles.container} colors={colors}>
    <TouchableOpacity
      disabled={Boolean(disabled)}
      style={[
        styles.container,
        {...containerStyle},
        disabled && {...disabledContainerStyle, ...styles.disabled},
      ]}
      onPress={onPress}>
      <View style={styles.buttonIconContainer}>
        <Image source={icon} />
        <Text style={[styles.title, textStyle]}>{title.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  </IsGrandient>
);

const styles = StyleSheet.create({
  container: {
    height: 53,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
  },
  title: {
    fontFamily: 'GoogleSans-Medium',
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '500',
    lineHeight: 18,
  },
  disabled: {
    height: 53,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    backgroundColor: '#b0b1b4',
  },
  buttonIconContainer: {
    flexDirection: 'row',
  },
});

FlexButton.propTypes = {
  containerStyle: PropTypes.object,
  disabled: PropTypes.any,
  disabledContainerStyle: PropTypes.object,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object,
  title: PropTypes.string,
};

FlexButton.defaultProps = {
  containerStyle: undefined,
  disabled: false,
  disabledContainerStyle: undefined,
  style: undefined,
  title: undefined,
};

export default FlexButton;
