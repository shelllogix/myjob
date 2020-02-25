import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MainScreen = () => (
  <View style={styles.container}>
    <Text>MainScreen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainScreen;
