import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const isGrandient = ({colors, style, children}) => {
  return colors ? (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 2, y: 0}}
      style={style}
      colors={colors}>
      {children}
    </LinearGradient>
  ) : (
    <>{children}</>
  );
};

export default isGrandient;
