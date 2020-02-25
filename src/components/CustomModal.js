import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CustomModal = ({show, showHandler}) => (
  <>
    {show && (
      <View style={styles.container}>
        <Text>sakfsfsdfsfsn</Text>
      </View>
    )}
  </>
);

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(8, 8, 10, 0.91)',
    // position: 'absolute',
    top: 0,
    left: 0,
  },
});

export default CustomModal;
