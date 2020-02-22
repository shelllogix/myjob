import {withProps} from 'recompose';
import LoginScreen from '../LoginScreen';
import {validateNumber} from '../../../components/utils';

const SmsVerficationScreenWithProps = withProps({
  title: 'Введите код из СМС',
  textField: {
    name: 'enterSmsCode',
    keyboardType: 'number-pad',
    validate: validateNumber,
    style: {
      marginBottom: 24,
      marginTop: 83,
    },
  },
  button: {
    title: 'Продолжить',
    colors: ['#424DE7', '#A34889', '#CE3087'],
  },
  sendText: ' Отправить повторно',
})(LoginScreen);

export default SmsVerficationScreenWithProps;
