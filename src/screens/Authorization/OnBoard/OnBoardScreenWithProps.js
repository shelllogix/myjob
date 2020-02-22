import {withProps} from 'recompose';
import OnBoardScreen from './OnBoardScreen';

const OnBoardScreenWithProps = withProps({
  title: 'Ваша цель',
  jobTypes: [
    {
      id: 0,
      title: 'Ищу работу',
      img: require('../../../assets/searchJob.png'),
    },
    {
      id: 1,
      title: 'Предлагаю работу',
      img: require('../../../assets/offerJob.png'),
    },
  ],
  button: {
    title: 'начать',
    colors: ['#424DE7', '#A34889', '#CE3087'],
  },
})(OnBoardScreen);

export default OnBoardScreenWithProps;
