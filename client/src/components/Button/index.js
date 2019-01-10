import React from 'react';
import './style.css';

export default ({
  props,
  text = '',
  type = 'button',
  className = 'red-button',
}) => (
  <button type={type} className={className} {...props}>
    {text}
  </button>
);
