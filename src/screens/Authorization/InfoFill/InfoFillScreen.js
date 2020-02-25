import React, {useState} from 'react';
import {reduxForm} from 'redux-form';
import {
  View,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import SwitchField from '../../../components/SwitchField';
import RadioReduxSwitch from '../../../components/RadioReduxSwitch';
import FlexButton from '../../../components/FlexButton';
import FlexWritableFieldItem from '../../../components/FlexWritableFieldItem';
import PickerField from '../../../components/PickerField';
import CalendarModal from '../../../components/CalendarModal';
import {globalImagePicker} from '../../../globalFunctions/globalImagePicker';

const InfoFillScreen = ({
  noop,
  icons,
  avatar,
  secondoryIcons,
  userInfo,
  activeInfo,
  videoInfo,
  jobTypes,
  jobTypeTitle,
  startDate,
  calendarButton,
  wishedPosition,
  jobPositionPicker,
  addPosition,
  mainInfo,
  birthInfo,
  mainLocationTitle,
  sex,
  mainLocations,
  aboutUser,
  photoInfo,
  getImageHandler,
  workExperience,
  button,
  infoFillRef,
  scrollToTop,
  calendarSave,
}) => {
  const [calendar, setcalendar] = useState(false);
  const toggleCalendar = () => setcalendar(!calendar);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView ref={infoFillRef}>
        <View style={styles.topContainer}>
          <ImageBackground
            resizeMode="stretch"
            style={styles.background}
            source={require('../../../assets/navBackground.png')}>
            <View style={styles.backgroundContentContainer}>
              <View style={styles.barNavigationContainer}>
                {icons.map(icon => (
                  <Image source={icon.src} key={icon.id} />
                ))}
              </View>
              <View style={styles.userInfoContainer}>
                {secondoryIcons.map((icon, i) => (
                  <View style={icon.containerStyle} key={icon.id}>
                    {avatar && i === 1 ? (
                      <Image source={{uri: avatar.uri}} style={styles.avatar} />
                    ) : (
                      <Image source={icon.src} />
                    )}
                  </View>
                ))}
              </View>
              <Text style={styles.userInfo}>{userInfo}</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.switchContainer}>
            <Text style={styles.switchLabel}>{activeInfo.label}</Text>
            <SwitchField name={activeInfo.name} />
          </View>
          <View style={styles.infoMediaContainer}>
            <View style={styles.InfoItemContentContainer}>
              <Text style={styles.label}>{videoInfo.title}</Text>
              <Image style={styles.addImage} source={videoInfo.addImage} />
            </View>
            <View style={styles.InfoItemContentContainer}>
              <Text style={styles.videoInfoText}>{videoInfo.text}</Text>
              <Image source={videoInfo.image} />
            </View>
          </View>
          <View style={[styles.jobItemContainer, styles.serchJobContainer]}>
            <Text style={[styles.label, styles.searchText]}>
              {jobTypeTitle}
            </Text>
            {jobTypes.map(jobType => (
              <RadioReduxSwitch
                containerStyle={styles.searchJobItemContainer}
                key={jobType.id}
                name={jobType.name}
                title={jobType.title}
              />
            ))}
            <Text style={styles.startDateText}>{startDate}</Text>
            <FlexButton
              containerStyle={styles.openCalendarButton}
              textStyle={styles.calendarButton}
              title={
                calendar
                  ? calendarButton.closeCalendar
                  : calendarButton.openCalendar
              }
              icon={calendarButton.image}
              onPress={toggleCalendar}
            />
            {calendar && <CalendarModal />}
            {calendar && (
              <FlexButton
                containerStyle={styles.saveCalendarButton}
                textStyle={styles.calendarSaveButton}
                title={calendarSave.title}
                onPress={noop}
              />
            )}
            <FlexWritableFieldItem
              underline={wishedPosition.underline}
              containerStyle={styles.inputContainer}
              name={wishedPosition.name}
              placeholder={wishedPosition.placeholder}
              placeholderTextColor={wishedPosition.placeholderTextColor}
              title={wishedPosition.title}
              textInputStyle={styles.textInputStyle}
              textStyle={styles.positionText}
            />
            <PickerField
              placeholder={jobPositionPicker.placeholder}
              label={jobPositionPicker.label}
              values={jobPositionPicker.values}
            />
            <TouchableOpacity onPress={noop}>
              <View style={styles.addPositionButtonContainer}>
                <Image source={addPosition.addPositionImage} />
                <Text style={styles.addPositionText}>
                  {addPosition.addPositionText}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={[styles.jobItemContainer, styles.serchJobContainer]}>
            <Text style={[styles.label, styles.searchText]}>{mainInfo}</Text>
            <FlexWritableFieldItem
              underline={birthInfo.underline}
              containerStyle={styles.inputContainer}
              name={birthInfo.name}
              placeholder={birthInfo.placeholder}
              placeholderTextColor={birthInfo.placeholderTextColor}
              title={birthInfo.title}
              textInputStyle={styles.textInputStyle}
              textStyle={styles.positionText}
            />
            <Text style={styles.mainLocationTitle}>{mainLocationTitle}</Text>
            {sex.map(jobType => (
              <RadioReduxSwitch
                containerStyle={styles.searchJobItemContainer}
                key={jobType.id}
                name={jobType.name}
                title={jobType.title}
              />
            ))}
            {mainLocations.map(mainLocation => (
              <PickerField
                placeholder={mainLocation.placeholder}
                label={mainLocation.label}
                values={mainLocation.values}
                key={mainLocation.id}
              />
            ))}
            <FlexWritableFieldItem
              underline={aboutUser.underline}
              containerStyle={[styles.about]}
              name={aboutUser.name}
              placeholder={aboutUser.placeholder}
              placeholderTextColor={aboutUser.placeholderTextColor}
              title={aboutUser.title}
              textStyle={styles.positionText}
              multiline={aboutUser.multiline}
              titleContainer={styles.aboutTitleContainer}
              inputContainer={styles.aboutInputContainer}
              textInputStyle={styles.aboutInputContainer}
            />
            <Text style={styles.numbers}>0/60</Text>
          </View>

          <View style={styles.infoMediaContainer}>
            <View style={styles.InfoItemContentContainer}>
              <Text style={styles.label}>{photoInfo.title}</Text>
              <TouchableOpacity
                onPress={() =>
                  globalImagePicker(
                    photoInfo.options,
                    getImageHandler,
                    scrollToTop,
                  )
                }>
                <Image style={styles.addImage} source={photoInfo.addImage} />
              </TouchableOpacity>
            </View>
            <View style={styles.InfoItemContentContainer}>
              <Text style={styles.videoInfoText}>{photoInfo.text}</Text>
              <Image source={photoInfo.image} />
            </View>
          </View>
          <View style={styles.infoMediaContainer}>
            <Text style={styles.label}>{workExperience.title}</Text>
            <PickerField
              placeholder={workExperience.experience.placeholder}
              label={workExperience.experience.label}
              values={workExperience.experience.values}
            />

            {workExperience.company.map(companyFields => (
              <FlexWritableFieldItem
                underline={companyFields.underline}
                containerStyle={styles.inputContainer}
                titleContainer={styles.fildsTitle}
                name={companyFields.name}
                placeholder={companyFields.placeholder}
                placeholderTextColor={companyFields.placeholderTextColor}
                title={companyFields.title}
                textInputStyle={styles.textInputStyle}
                textStyle={styles.positionText}
                key={companyFields.id}
              />
            ))}

            <Text style={styles.mainLocationTitle}>
              {workExperience.dateTitle}
            </Text>

            <View style={styles.dateContainer}>
              {workExperience.date.map(dateFields => (
                <View key={dateFields.id} style={styles.dataItem}>
                  <FlexWritableFieldItem
                    underline={dateFields.underline}
                    containerStyle={styles.inputContainer}
                    name={dateFields.name}
                    placeholder={dateFields.placeholder}
                    placeholderTextColor={dateFields.placeholderTextColor}
                    title={dateFields.title}
                    textInputStyle={styles.textInputStyle}
                    textStyle={styles.positionText}
                  />
                </View>
              ))}
            </View>
            <FlexWritableFieldItem
              underline={workExperience.jobDescription.underline}
              containerStyle={[
                styles.inputContainer,
                styles.about,
                styles.workexpirienceContainer,
              ]}
              name={workExperience.jobDescription.name}
              placeholder={workExperience.jobDescription.placeholder}
              placeholderTextColor={
                workExperience.jobDescription.placeholderTextColor
              }
              title={workExperience.jobDescription.title}
              textStyle={styles.positionText}
              multiline={workExperience.jobDescription.multiline}
              titleContainer={styles.aboutTitleContainer}
              inputContainer={styles.aboutInputContainer}
              textInputStyle={styles.aboutInputContainer}
            />
            <Text style={styles.numbers}>0/60</Text>
            <TouchableOpacity onPress={noop}>
              <View style={styles.addPositionButtonContainer}>
                <Image source={workExperience.addPosition.addPositionImage} />
                <Text style={styles.addPositionText}>
                  {workExperience.addPosition.addPositionText}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <FlexButton
              colors={button.colors}
              title={button.title}
              styles={styles.backgroundContentContainer}
              onPress={noop}
            />
          </View>
          <Text style={styles.cancelText}>Отменить</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: '100%',
  },
  topContainer: {
    backgroundColor: '#F5F6FA',
    marginTop: 10,
  },
  backgroundContentContainer: {
    marginHorizontal: 8,
  },
  barNavigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 45,
  },
  userInfo: {
    fontFamily: 'GoogleSans-Medium',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 32,
  },
  mainContainer: {
    backgroundColor: '#F5F6FA',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 37,
    marginBottom: 28,
  },
  switchLabel: {
    fontFamily: 'GoogleSans-Medium',
    fontSize: 18,
    color: '#1C1F4A',
  },
  infoMediaContainer: {
    backgroundColor: '#ffffff',
    marginHorizontal: 8,
    marginBottom: 8,
    paddingVertical: 16,
    paddingLeft: 16,
    paddingRight: 4,
    borderRadius: 7,
  },
  jobItemContainer: {
    backgroundColor: '#ffffff',
    marginHorizontal: 8,
    paddingHorizontal: 16,
    marginBottom: 8,
    borderRadius: 7,
  },
  InfoItemContentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'GoogleSans-Medium',
    fontSize: 18,
    color: '#424DE7',
  },
  addImage: {
    marginRight: 10,
  },
  avatar: {
    height: '100%',
    width: '100%',
    borderRadius: 59,
  },
  videoInfoText: {
    fontFamily: 'GoogleSans-Medium',
    fontSize: 16,
    color: '#757575',
    maxWidth: 223,
    marginTop: 15,
  },
  serchJobContainer: {
    paddingTop: 22,
    paddingBottom: 18,
  },
  searchText: {
    marginBottom: 39,
  },
  searchJobItemContainer: {
    marginBottom: 24,
  },
  startDateText: {
    fontFamily: 'GoogleSans-Medium',
    fontSize: 14,
    color: '#757575',
  },
  openCalendarButton: {
    borderRadius: 7,
    backgroundColor: '#dddff0',
    marginTop: 12,
    marginBottom: 16,
  },
  calendarButton: {
    marginLeft: 9,
    fontFamily: 'GoogleSans-Medium',
    fontSize: 14,
    color: '#424DE7',
  },
  positionText: {
    fontFamily: 'GoogleSans-Bold',
    fontSize: 16,
  },
  textInputStyle: {
    marginLeft: 0,
  },
  inputContainer: {
    height: 60,
  },
  addPositionButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
  },
  addPositionText: {
    fontFamily: 'GoogleSans-Medium',
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.54)',
    marginLeft: 21,
  },
  mainLocationTitle: {
    fontFamily: 'GoogleSans-Medium',
    fontSize: 14,
    color: '#757575',
    marginTop: 31,
    marginBottom: 27,
  },
  about: {
    height: 80,
  },
  aboutInputContainer: {
    height: 40,
  },
  aboutTitleContainer: {
    marginBottom: 10,
  },
  aboutText: {
    color: '#757575',
  },
  numbers: {
    textAlign: 'right',
    marginTop: 4,
  },
  cancelText: {
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 15,
    marginBottom: 24,
  },
  buttonContainer: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  workexpirienceContainer: {
    marginTop: 10,
  },
  dataItem: {
    width: '49%',
  },
  fildsTitle: {
    paddingTop: 16,
  },
  saveCalendarButton: {
    backgroundColor: '#424DE7',
    borderRadius: 0,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    marginTop: 12,
    marginBottom: 16,
  },
  calendarSaveButton: {
    marginLeft: 9,
    fontFamily: 'GoogleSans-Medium',
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default reduxForm({
  form: 'infoFillScreen',
})(InfoFillScreen);
