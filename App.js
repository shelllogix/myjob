import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import WelcomeScreenContainer from './src/screens/Welcome/WelcomeScreenContainer';
import LoginWithNumberScreenContainer from './src/screens/Authorization/LoginWithNumber/LoginWithNumberScreenContainer';
import SmsVerficationScreenContainer from './src/screens/Authorization/SmsVerfication/SmsVerficationScreenContainer';
import ResetPasswordScreenContainer from './src/screens/Authorization/ResetPassword/ResetPasswordScreenContainer';
import VerifyEmailScreenContainer from './src/screens/Authorization/VerifyEmail/VerifyEmailScreenContainer';
import ChangeNumberScreenContainer from './src/screens/Authorization/ChangeNumber/ChangeNumberScreenContainer';
import OnBoardScreenContainer from './src/screens/Authorization/OnBoard/OnBoardScreenContainer';
import InfoFillScreenContainer from './src/screens/Authorization/InfoFill/InfoFillScreenContainer';

const AuthStack = createStackNavigator(
  {
    WelcomeScreen: WelcomeScreenContainer,
    LoginWithNumberScreen: LoginWithNumberScreenContainer,
    SmsVerficationScreen: SmsVerficationScreenContainer,
    ResetPasswordScreen: ResetPasswordScreenContainer,
    VerifyEmailScreen: VerifyEmailScreenContainer,
    ChangeNumberScreen: ChangeNumberScreenContainer,
    OnBoardScreen: OnBoardScreenContainer,
    InfoFillScreen: InfoFillScreenContainer,
  },
  {
    initialRouteName: 'InfoFillScreen',
  },
);

const RootSwitch = createAppContainer(
  createSwitchNavigator(
    {
      AuthStack,
    },
    {
      initialRouteName: 'AuthStack',
    },
  ),
);

export default () => (
  <Provider store={store}>
    <RootSwitch />
  </Provider>
);
