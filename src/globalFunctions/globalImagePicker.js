import ImagePicker from 'react-native-image-picker';

export const globalImagePicker = (options, getimage, scrollToTop) => {
  scrollToTop();
  ImagePicker.showImagePicker(options, response => {
    if (response.didCancel) {
      // console.log('User cancelled image picker');
    } else if (response.error) {
      // console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      // console.log('User tapped custom button: ', response.customButton);
    } else {
      const source = {uri: response.uri};
      getimage(source);
    }
  });
};
