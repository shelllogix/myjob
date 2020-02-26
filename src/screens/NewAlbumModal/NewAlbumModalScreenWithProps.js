import {withProps} from 'recompose';

import NewAlbumModalScreen from './NewAlbumModalScreen';

const NewAlbumModalScreenWithProps = withProps({
  title: 'New ALbum',
  subTitle: 'let a name to this album',
  inputText: {
    name: 'albumName',
    placeholder: 'Placeholder',
    underline: true,
    placeHolderColor: 'rgba(255, 255, 255, 0.3)',
  },
  buttons: [
    {
      id: 0,
      title: 'Cancel',
      containerStyle: {
        borderRadius: 0,
        borderBottomLeftRadius: 14,
        borderTopWidth: 1,
        borderColor: 'rgba(60, 60, 67, 0.29)',
        width: '50%',
      },
    },
    {
      id: 1,
      title: 'Save',
      containerStyle: {
        borderRadius: 0,
        borderBottomRightRadius: 14,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderColor: 'rgba(60, 60, 67, 0.29)',
        width: '50%',
      },
    },
  ],
})(NewAlbumModalScreen);

export default NewAlbumModalScreenWithProps;
