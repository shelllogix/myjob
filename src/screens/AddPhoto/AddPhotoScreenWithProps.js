import {withProps} from 'recompose';

import AddPhotoScreen from './AddPhotoScreen';

const AddPhotoScreenWithProps = withProps({
  title: 'Create your first album!',
  buttonTitle: 'Create',
  albums: [
    {
      id: 0,
      albumType: 'PUBLIC',
      image: require('../../assets/album1.png'),
      albumTitle: 'Me and my friends',
      albumItemsCount: '128 items',
      expairingCount: '12 expiring soon',
    },
    {
      id: 1,
      albumType: 'PRIVATE',
      image: require('../../assets/album2.png'),
      albumTitle: 'Travel',
      albumItemsCount: '128 items',
      expairingCount: '12 expiring soon',
    },
  ],
})(AddPhotoScreen);

export default AddPhotoScreenWithProps;
