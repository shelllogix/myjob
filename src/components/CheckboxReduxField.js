import PropTypes from 'prop-types';
import React from 'react';
import {Field} from 'redux-form';
import CheckboxField from './CheckboxField';

const CheckboxReduxField = ({name, containerStyle}) => (
  <Field
    component={({input: {value, onChange}}) => (
      <CheckboxField
        enabled={!!value}
        onChange={() => onChange(!value)}
        containerStyle={containerStyle}
      />
    )}
    name={name}
  />
);

CheckboxReduxField.defaultProps = {
  containerStyle: undefined,
};

CheckboxReduxField.propTypes = {
  name: PropTypes.string.isRequired,
  containerStyle: PropTypes.object,
};

export default CheckboxReduxField;
