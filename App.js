import React from 'react';
import {Image} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WelcomeScreenContainer from './src/screens/Welcome/WelcomeScreenContainer';
import LoginWithNumberScreenContainer from './src/screens/Authorization/LoginWithNumber/LoginWithNumberScreenContainer';
import SmsVerficationScreenContainer from './src/screens/Authorization/SmsVerfication/SmsVerficationScreenContainer';
import ResetPasswordScreenContainer from './src/screens/Authorization/ResetPassword/ResetPasswordScreenContainer';
import VerifyEmailScreenContainer from './src/screens/Authorization/VerifyEmail/VerifyEmailScreenContainer';
import ChangeNumberScreenContainer from './src/screens/Authorization/ChangeNumber/ChangeNumberScreenContainer';
import OnBoardScreenContainer from './src/screens/Authorization/OnBoard/OnBoardScreenContainer';
import InfoFillScreenContainer from './src/screens/Authorization/InfoFill/InfoFillScreenContainer';
import MainScreenContainer from './src/screens/Main/MainScreenContainer';
import SearchScreenContainer from './src/screens/Search/SearchScreenContainer';
import AddPhotoScreenContainer from './src/screens/AddPhoto/AddPhotoScreenContainer';
import ProfileScreenContainer from './src/screens/Profile/ProfileScreenContainer';
import SettingsScreenContainer from './src/screens/Settings/SettingsScreenContainer';

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

const TabStack = createBottomTabNavigator(
  {
    MainScreen: MainScreenContainer,
    SearchScreen: SearchScreenContainer,
    AddPhotoScreen: createStackNavigator({
      AddPhotoScreenContainer,
    }),
    ProfileScreen: ProfileScreenContainer,
    SettingsScreen: SettingsScreenContainer,
  },
  {
    initialRouteName: 'AddPhotoScreen',
    defaultNavigationOptions: ({navigation}) => {
      let iconSource = require('./src/assets/photoIcon.png');
      return {
        tabBarLabel: () => {
          const {routeName} = navigation.state;
          switch (routeName) {
            case 'MainScreen':
              iconSource = require('./src/assets/albumsIcon.png');
              break;
            case 'SearchScreen':
              iconSource = require('./src/assets/searchIcon.png');
              break;
            case 'AddPhotoScreen':
              iconSource = require('./src/assets/photoIcon.png');
              break;
            case 'ProfileScreen':
              iconSource = require('./src/assets/profileIcon.png');
              break;
            case 'SettingsScreen':
              iconSource = require('./src/assets/settingsTabIcon.png');
              break;
            default:
              iconSource;
          }
          return <Image source={iconSource} />;
        },
      };
    },
  },
);

const RootSwitch = createAppContainer(
  createSwitchNavigator(
    {
      AuthStack,
      TabStack,
    },
    {
      initialRouteName: 'TabStack',
    },
  ),
);

export default () => (
  <Provider store={store}>
    <RootSwitch />
  </Provider>
);
