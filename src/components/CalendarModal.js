import React from 'react';
import {View, Text} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const currentDate = new Date().toISOString().split('T')[0];

const CalendarModal = () => (
  <View>
    <CalendarList
      horizontal={true}
      onVisibleMonthsChange={months => {
        console.log('now these months are visible', months);
      }}
      current={currentDate}
      // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
      minDate={'2020-02-01'}
      // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
      maxDate={'2020-02-29'}
      // Handler which gets executed on day press. Default = undefined
      onDayPress={day => {
        console.log('selected day', day);
      }}
      // Handler which gets executed on day long press. Default = undefined
      onDayLongPress={day => {
        console.log('LongPress', day);
      }}
      // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
      monthFormat={'yyyy MM'}
      // Handler which gets executed when visible month changes in calendar. Default = undefined
      onMonthChange={month => {
        console.log('month changed', month);
      }}
      // Hide month navigation arrows. Default = false
      hideArrows={true}
      // Replace default arrows with custom ones (direction can be 'left' or 'right')
      // renderArrow={direction => <Arrow />}
      // Do not show days of other months in month page. Default = false
      hideExtraDays={true}
      // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
      // day from another month that is visible in calendar page. Default = false
      disableMonthChange={true}
      // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
      firstDay={1}
      // Hide day names. Default = false
      hideDayNames={true}
      // Show week numbers to the left. Default = false
      showWeekNumbers={true}
      // Handler which gets executed when press arrow icon left. It receive a callback can go back month
      onPressArrowLeft={substractMonth => substractMonth()}
      // Handler which gets executed when press arrow icon right. It receive a callback can go next month
      onPressArrowRight={addMonth => addMonth()}
      // Disable left arrow. Default = false
      disableArrowLeft={true}
      // Disable right arrow. Default = false
      disableArrowRight={true}
      markedDates={{
        '2020-02-10': {
          periods: [
            {startingDay: true, endingDay: true, color: '#5f9ea0'},
            {startingDay: false, endingDay: true, color: '#ffa500'},
            {startingDay: true, endingDay: false, color: '#f0e68c'},
          ],
        },
        '2020-02-20': {
          periods: [
            {startingDay: true, endingDay: false, color: '#ffa500'},
            {color: 'transparent'},
            {endingDay: true, color: '#f0e68c'},
          ],
        },
      }}
      markingType="multi-period"
    />
  </View>
);

export default CalendarModal;
