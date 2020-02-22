import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function CheckboxField({
  title,
  enabled,
  onChange,
  containerStyle,
}) {
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        style={styles.radioItemContainer}
        onPress={onChange}
        activeOpacity={1}>
        {enabled && <View style={styles.radioItem} />}
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioItemContainer: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioItem: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#007AFF',
  },
  title: {
    fontFamily: 'GoogleSans-Bold',
    fontSize: 16,
    color: '#000000',
    marginLeft: 18,
  },
});
