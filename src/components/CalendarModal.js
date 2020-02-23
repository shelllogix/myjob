import React, {useState} from 'react';
import {View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import LinearGradient from 'react-native-linear-gradient';

const currentDate = new Date().toISOString().split('T')[0];

const CalendarModal = () => {
  const [incomingDateData, setincomingDateData] = useState({});

  const addDayInCalendar = day => {
    setincomingDateData({
      ...incomingDateData,
      [day.dateString]: {
        startingDay: false,
        selected: true,
        selectedColor: '#636ECE',
      },
    });
  };
  const addEventInCalendar = day => {
    setincomingDateData({
      ...incomingDateData,
      [day.dateString]: {
        startingDay: false,
        selected: true,
        selectedColor: '#B93B88',
      },
    });
  };

  return (
    <View>
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}>
        <Calendar
          current={currentDate}
          markedDates={incomingDateData}
          onDayPress={addDayInCalendar}
          onDayLongPress={addEventInCalendar}
          markingType={'multi-dot'}
        />
      </LinearGradient>
    </View>
  );
};

export default CalendarModal;
