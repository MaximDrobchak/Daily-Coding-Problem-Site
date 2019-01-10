import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './../components/Layout';
import Header from './../components/Header';
import Input from './../components/Input';
import Typed from './../components/Typed';
import Authorization from './Authorization';
import HomePage from './HomePage';

import ContainerPage from '../components/ContainerPage';
import Button from '../components/Button';
// grid from dev
import DevGrid from '../components/DevGrid';

export { ContainerPage, DevGrid, Button, Layout, Header, Typed, Input };

export default () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/authorization' component={Authorization} />
  </Switch>
);
