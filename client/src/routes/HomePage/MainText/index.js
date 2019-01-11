import React from 'react';
import { StyleTextBlock, MarginSpan } from './styles';
import Button from '../../../components/Button';

export default () => (
  <StyleTextBlock>
    <MarginSpan>Code application</MarginSpan>
    <br />
    <MarginSpan>DEVELOPMENT</MarginSpan>
    <br />
    <MarginSpan>Quests programing</MarginSpan>
    <br />

    <Button text="Learn more now" />
  </StyleTextBlock>
);
