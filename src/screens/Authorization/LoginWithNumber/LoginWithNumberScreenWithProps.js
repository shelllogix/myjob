import {withProps} from 'recompose';
import LoginScreen from '../LoginScreen';
import {validateNumber} from '../../../components/utils';

const LoginWithNumberScreenWithProps = withProps({
  title: 'Номер телефона',
  textField: {
    underline: true,
    name: 'enterWithNumber',
    keyboardType: 'number-pad',
    validate: validateNumber,
    isPhone: true,
  },
  description: 'На указанный номер телефона придет СМС с кодом подтверждения.',
  button: {
    title: 'Продолжить',
    colors: ['#424DE7', '#A34889', '#CE3087'],
  },
})(LoginScreen);

export default LoginWithNumberScreenWithProps;
