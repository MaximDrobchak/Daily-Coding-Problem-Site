import React from 'react';
import MenuLink from '../MenuLink';
import { Link } from 'react-router-dom';
import { Navigation, AgileNixLinkImage } from './style';
import social from './img/Group 113.svg';
import agileNixIcon from './img/Agilenix_logo_darkblue-blue.svg';

const links = [ { linkID: 0, title: 'Sign In', to: 'authorization' } ];

export default () => (
  <Navigation>
    <Link to='/'>
      <AgileNixLinkImage src={agileNixIcon} alt='AgileNix' />
    </Link>
    <div>
      {links.map(link => <MenuLink key={link.linkID} {...link} />)}
      <img src={social} alt='' />
    </div>
  </Navigation>
);
