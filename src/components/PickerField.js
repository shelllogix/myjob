/* eslint-disable react/prop-types,no-plusplus,no-mixed-operators */
import React from 'react';
import {Field} from 'redux-form';
import {Dropdown} from 'react-native-material-dropdown';
import pure from 'recompose/pure';
import {isFieldValid} from './utils';

const DropdownInput = ({
  input: {value, onChange},
  values,
  label,
  meta: {valid, pristine},
  aggressive = false,
  headerTitle,
  ...rest
}) => (
  <Dropdown
    label={label}
    data={values.map(({value: x}) => ({value: x}))}
    //   containerStyle={}
    baseColor="#4d4d4d"
    labelFontSize={14}
    value={value}
    onChangeText={onChange}
    error={!isFieldValid({valid, pristine, aggressive}) ? ' ' : undefined}
    {...rest}
  />
);

function PickerField({title, name, ...rest}) {
  return (
    <Field label={title} name={name} component={DropdownInput} {...rest} />
  );
}
export default pure(PickerField);
