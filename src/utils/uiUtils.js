/* eslint-disable import/prefer-default-export */
import {Dimensions} from 'react-native';

export const {width, height} = Dimensions.get('window');

export const getWindowWidth = (leftMargin = 0, rightMargin = leftMargin) =>
  width - (leftMargin + rightMargin);

export const getWindowHeight = (topMargin = 0, bottomMargin = topMargin) =>
  height - (topMargin + bottomMargin);
