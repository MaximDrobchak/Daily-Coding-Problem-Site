import React from 'react';
import { Link } from 'react-router-dom';
import StyleLink from './styles';
export default ({ to, title, color }) => (
  <StyleLink color={color}>
    <Link to={to}>{title}</Link>
  </StyleLink>
);
