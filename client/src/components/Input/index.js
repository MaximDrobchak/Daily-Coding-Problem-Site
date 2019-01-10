import React from 'react';
import StyleInput from './styles';

export default ({ type = 'text', props }) => (
  <StyleInput type={type} {...props} />
);
