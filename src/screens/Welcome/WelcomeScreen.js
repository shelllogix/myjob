import PropTypes from 'prop-types';
import React from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import R from 'ramda';
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import FlexButton from '../../components/FlexButton';
import CheckboxReduxField from '../../components/CheckboxReduxField';
import Svg, {
  LinearGradient,
  Defs,
  Text as GradientText,
  Stop,
  TSpan,
} from 'react-native-svg';

const WelcomeScreen = ({
  buttons,
  onPress,
  checkboxText,
  checkboxUnderlineText,
  termsOfUse,
  resetAccauntHandler,
}) => (
  <View style={styles.container}>
    {buttons.map((button, i) => (
      <FlexButton
        key={button.id}
        disabled={!termsOfUse}
        containerStyle={button.style}
        title={button.title}
        onPress={onPress[i]}
      />
    ))}
    <View style={styles.checkBoxContainer}>
      <CheckboxReduxField name="termsOfUse" />
      <Text style={styles.checkboxText}>
        {checkboxText}
        <Text style={styles.checkboxUnderlineText}>
          {' '}
          {checkboxUnderlineText}
        </Text>
      </Text>
    </View>
    <TouchableWithoutFeedback onPress={resetAccauntHandler}>
      <View style={styles.footerTextContainer}>
        <Svg viewBox="0 0 100 110" height="100" width="200">
          <Defs>
            <LinearGradient
              id="rainbow"
              x1="100"
              x2="0"
              y1="0"
              y2="100%"
              gradientUnits="userSpaceOnUse">
              <Stop stopColor="#424DE7" offset="100%" />
              <Stop stopColor="#A34889" offset="10%" />
              <Stop stopColor="#CE3087" offset="100%" />
            </LinearGradient>
          </Defs>
          <GradientText
            fontSize="18"
            x="46"
            y="18"
            textAnchor="middle"
            fill="url(#rainbow)">
            <TSpan>Нет доступа к телефону?</TSpan>
          </GradientText>
        </Svg>
      </View>
    </TouchableWithoutFeedback>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'flex-end',
  },
  checkBoxContainer: {
    flexDirection: 'row',
    paddingTop: 59,
  },
  checkboxText: {
    fontFamily: 'GoogleSans-Medium',
    fontSize: 12,
    marginLeft: 19,
    width: 302,
  },
  checkboxUnderlineText: {
    textDecorationLine: 'underline',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  footerTextContainer: {
    marginTop: 119,
  },
});

const mapStateToProps = createSelector(
  R.path(['form', 'authorization', 'values', 'termsOfUse']),
  termsOfUse => ({termsOfUse}),
);

WelcomeScreen.propTypes = {
  buttons: PropTypes.array.isRequired,
  onPress: PropTypes.array.isRequired,
  checkboxText: PropTypes.string.isRequired,
  checkboxUnderlineText: PropTypes.string.isRequired,
  termsOfUse: PropTypes.any,
  resetAccauntHandler: PropTypes.func.isRequired,
};

WelcomeScreen.defaultProps = {
  termsOfUse: undefined,
};

export default reduxForm({
  form: 'authorization',
})(connect(mapStateToProps)(WelcomeScreen));
