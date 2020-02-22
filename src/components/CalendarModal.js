import React, {useState} from 'react';
import {View} from 'react-native';
import {Calendar} from 'react-native-calendars';

// const currentDate = new Date().toISOString().split('T')[0];

const CalendarModal = () => {
  const [incomingDateData, setincomingDateData] = useState({
    '2020-02-03': {textColor: 'red'},
    '2020-02-05': {startingDay: true, color: '#B93B88'},
    '2020-02-06': {startingDay: false, color: '#883B77'},
  });

  const addDayInCalendar = day => {
    setincomingDateData({
      ...incomingDateData,
      [day.dateString]: {startingDay: false, color: '#D53B77'},
    });
  };

  return (
    <View>
      <Calendar
        markedDates={incomingDateData}
        markingType={'period'}
        onDayLongPress={addDayInCalendar}
      />
    </View>
  );
};

export default CalendarModal;
