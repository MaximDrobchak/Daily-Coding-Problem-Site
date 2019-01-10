import React from 'react';
import { Link } from 'react-router-dom';
import StyleLink from './styles';
export default ({ to, title }) => (
  <StyleLink>
    <Link to={to}>{title}</Link>
  </StyleLink>
);
