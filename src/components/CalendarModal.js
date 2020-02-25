import React, {useState} from 'react';
import {View} from 'react-native';
import {Calendar} from 'react-native-calendars';

const currentDate = new Date().toISOString().split('T')[0];

const CalendarModal = () => {
  const [incomingDateData, setincomingDateData] = useState({});

  const addDayInCalendar = day => {
    setincomingDateData({
      ...incomingDateData,
      [day.dateString]: {
        startingDay: true,
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
      <Calendar
        current={currentDate}
        markedDates={incomingDateData}
        onDayPress={addDayInCalendar}
        onDayLongPress={addEventInCalendar}
        markingType={'multi-dot'}
      />
    </View>
  );
};

export default CalendarModal;
