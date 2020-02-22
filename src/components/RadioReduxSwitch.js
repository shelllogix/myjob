import React from 'react';
import {Field} from 'redux-form';
import RadioSwitch from './RadioSwitch';

const RadioReduxSwitch = ({title, name, containerStyle}) => (
  <Field
    component={({input: {value, onChange}}) => (
      <RadioSwitch
        title={title}
        enabled={!!value}
        onChange={() => onChange(!value)}
        containerStyle={containerStyle}
      />
    )}
    name={name}
  />
);

export default RadioReduxSwitch;
