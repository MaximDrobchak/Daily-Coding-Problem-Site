import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: grid;
  grid: auto-flow / 13% 1fr 13%;
  min-height: 613px;
  max-height: 100%;
  position: relative;
`;
export default ({ children, id, backgroundColor }) => (
  <Div id={id} style={{ backgroundColor: backgroundColor }}>
    <div />
    <div>{children}</div>
    <div />
  </Div>
);
