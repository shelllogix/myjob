import {withProps} from 'recompose';
import LoginScreen from '../LoginScreen';
import {validateUserEmail} from '../../../components/utils';

const ResetPasswordScreenWithProps = withProps({
  title: 'Адрес электронной почты',
  textField: {
    underline: true,
    name: 'enterEmail',
    keyboardType: 'email-address',
    validate: validateUserEmail,
  },
  description:
    'На указанный адрес придет письмо со ссылкой, для подтверждения. Перейдите по ссылке, указанной в теле письма.',
  button: {
    title: 'Продолжить',
    colors: ['#424DE7', '#A34889', '#CE3087'],
  },
})(LoginScreen);

export default ResetPasswordScreenWithProps;
