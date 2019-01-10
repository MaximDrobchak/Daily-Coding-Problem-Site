import React from 'react';
import { Layout, ContainerPage, Typed } from '../';
import BackGroundIcon from './img/background-header.png';

import Splinters from './Splinters';
import MainText from './MainText';
export default () => (
  <Layout backgroundImage={BackGroundIcon}>
    <ContainerPage>
      <Typed />
      <MainText />
      <Splinters />
    </ContainerPage>
  </Layout>
);
