import React from 'react';
import styled from 'styled-components';

const DevGrid = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  grid: auto-flow / repeat(12, 1fr);
  column-gap: 1rem;
  border: 2px solid tomato;
`;
const Conteiner = styled.div`
  position: absolute;
  z-index: 1000;
  width: 74%;
  height: 100%;
`;
const Column = styled.div`background: rgba(22, 158, 255, 0.25);`;

const cols = [];
let i = 0;

while (i < 12) {
  cols.push({ id: i });
  i++;
}

export default () => (
  <Conteiner>
    <DevGrid>{cols.map(el => <Column key={el.id} />)}</DevGrid>
  </Conteiner>
);
