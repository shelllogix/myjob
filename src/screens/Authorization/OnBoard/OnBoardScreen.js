import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import FlexButton from '../../../components/FlexButton';

const OnBoardScreen = ({
  title,
  jobTypes,
  button,
  selectedIndex,
  onJobTypeSelectHandler,
  onPress,
}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.jobTypeContainer}>
      {jobTypes.map(jobType => (
        <TouchableWithoutFeedback
          key={jobType.id}
          onPress={() => onJobTypeSelectHandler(jobType.id)}>
          <View
            style={[
              styles.jobItemContainer,
              selectedIndex === jobType.id && styles.selectedJobType,
            ]}>
            <Text style={styles.jobTitle}>{jobType.title}</Text>
            <Image source={jobType.img} />
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>
    <FlexButton
      colors={button.colors}
      title={button.title}
      disabled={selectedIndex === null}
      onPress={onPress}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    paddingBottom: '3%',
  },
  title: {
    fontFamily: 'GoogleSans-Medium',
    fontSize: 24,
    color: '#1C1F4A',
    textAlign: 'center',
  },
  jobTypeContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  jobItemContainer: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    marginTop: '5%',
    paddingTop: 18,
    paddingBottom: '4%',
    borderRadius: 7,
  },
  selectedJobType: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  jobTitle: {
    fontFamily: 'GoogleSans-Bold',
    fontSize: 18,
    color: '#424DE7',
    marginBottom: 24,
  },
});

export default OnBoardScreen;
