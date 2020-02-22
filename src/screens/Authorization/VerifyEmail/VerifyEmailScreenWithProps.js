import {withProps} from 'recompose';
import LoginScreen from '../LoginScreen';
import {validateUserEmail} from '../../../components/utils';

const VerifyEmailScreenWithProps = withProps({
  title: 'Адрес электронной почты',
  textField: {
    underline: true,
    name: 'enterEmail',
    keyboardType: 'email-address',
    validate: validateUserEmail,
  },
  description: 'Мы отправим вам письмо для восстановления доступа к аккаунту.',
  button: {
    title: 'отправить письмо',
    colors: ['#424DE7', '#A34889', '#CE3087'],
  },
})(LoginScreen);

export default VerifyEmailScreenWithProps;
