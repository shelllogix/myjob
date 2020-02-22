/* eslint-disable react/prop-types */
import React from 'react';
import {Field} from 'redux-form';
import pure from 'recompose/pure';
import {Switch} from 'react-native';

const InnerComponent = ({input: {value, onChange}, values}) => (
  <Switch
    value={value || 0}
    onValueChange={onChange}
    values={values}
    trackColor={{true: '#bb3f8b', false: 'grey'}}
  />
);

function SwitchField({name, values}) {
  return <Field component={InnerComponent} name={name} values={values} />;
}

export default pure(SwitchField);
