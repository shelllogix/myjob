import {withProps} from 'recompose';
import LoginScreen from '../LoginScreen';
import {validateNumber} from '../../../components/utils';

const ChangeNumberScreenWithProps = withProps({
  title: 'Номер телефона',
  textField: {
    name: 'changeNumber',
    underline: true,
    keyboardType: 'number-pad',
    validate: validateNumber,
    isPhone: true,
    style: {
      marginTop: 37,
      marginBottom: 40,
    },
  },
  button: {
    title: 'СМенить номер телефона',
    colors: ['#424DE7', '#A34889', '#CE3087'],
    gradientContainer: {
      marginTop: 40,
    },
  },
})(LoginScreen);

export default ChangeNumberScreenWithProps;
