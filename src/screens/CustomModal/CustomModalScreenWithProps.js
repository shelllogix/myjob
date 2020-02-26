import {withProps} from 'recompose';

import CustomModalScreen from './CustomModalScreen';

const CustomModalScreenWithProps = withProps({
  buttons: [
    {
      title: 'Delete',
      textStyle: {
        color: '#FF6767',
        fontFamily: 'Poppins-Medium',
      },
      id: 0,
      containerStyle: {
        borderRadius: 0,
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        backgroundColor: '#000000',
      },
    },
    {
      title: 'Edit',
      textStyle: {
        color: '#ffffff',
        fontFamily: 'Poppins-Medium',
      },
      id: 1,
      containerStyle: {
        borderRadius: 0,
        backgroundColor: '#000000',
        marginTop: 1,
      },
    },
    {
      title: 'Copy link',
      textStyle: {
        color: '#ffffff',
        fontFamily: 'Poppins-Medium',
      },
      id: 2,
      containerStyle: {
        borderRadius: 0,
        borderBottomLeftRadius: 14,
        borderBottomRightRadius: 14,
        backgroundColor: '#000000',
        marginTop: 1,
      },
    },
    {
      title: 'Cancel',
      textStyle: {
        color: '#ffffff',
        fontFamily: 'Poppins-Medium',
      },
      id: 3,
      containerStyle: {
        borderRadius: 14,
        backgroundColor: '#000000',
        marginTop: 8,
        marginBottom: 49,
      },
    },
  ],
})(CustomModalScreen);

export default CustomModalScreenWithProps;
