import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FlexButton from '../../components/FlexButton';

const CustomModalScreen = ({buttons, goBackHandler}) => (
  <View style={styles.container}>
    {buttons.map(button => {
      return (
        <FlexButton
          containerStyle={button.containerStyle}
          textStyle={button.textStyle}
          key={button.id}
          title={button.title}
          onPress={goBackHandler}
        />
      );
    })}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(8, 8, 10, 0.91)',
    justifyContent: 'flex-end',
    paddingHorizontal: 8,
  },
});

export default CustomModalScreen;
