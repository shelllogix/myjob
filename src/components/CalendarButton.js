import PropTypes from 'prop-types';
import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

const hitSlope = {left: 10, top: 10, right: 10, bottom: 10};
const containerStyle = {justifyContent: 'center'};

export default function CalendarButton({onPress, style}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      hitSlope={hitSlope}
      style={containerStyle}>
      <Image source={require('../assets/calendarPic.png')} style={style} />
    </TouchableOpacity>
  );
}

CalendarButton.propTypes = {
  onPress: PropTypes.func,
  style: PropTypes.object,
};

CalendarButton.defaultProps = {
  onPress: undefined,
  style: undefined,
};
