import {withProps} from 'recompose';
import WelcomeScreen from './WelcomeScreen';

const WelcomeScreenWithProps = withProps({
  buttons: [
    {
      title: 'Войти с помощью номера телефона',
      style: {
        backgroundColor: '#B93B88',
      },
      id: 0,
    },
    {
      title: 'создать новый аккаунт',
      style: {
        backgroundColor: '#424DE7',
        marginTop: 15,
      },
      id: 1,
    },
  ],
  checkboxText: 'Нажимая “Войти”, вы подтверждаете, что принимаете',
  checkboxUnderlineText:
    'Пользовательское соглашение и Политику обработки и защиты персональных',
})(WelcomeScreen);

export default WelcomeScreenWithProps;
