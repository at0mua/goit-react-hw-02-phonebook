import React from 'react';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import AuthMenu from '../AuthMenu/AuthMenu';
import UserMenu from '../UserMenu/UserMenu';
import whithAuth from '../hoc/whithAuth';
import { Home, Contacts } from '../../routes/index';

import s from './Navigation.module.scss';
import logo from '../../animation/logo.module.scss';
import nav from '../../animation/nav.module.scss';

const Navigation = ({ title, stage, isAuthenticated }) => {
  return (
    <nav className={s.wrapper}>
      <CSSTransition
        in={stage === 'entered'}
        timeout={500}
        classNames={logo}
        unmountOnExit
      >
        <NavLink
          className={s.logo}
          activeClassName={s.logo_active}
          to={Home.path}
          key={Home.label}
          exact={Home.exact}
        >
          {title}
        </NavLink>
      </CSSTransition>

      <CSSTransition
        in={stage === 'entered'}
        timeout={500}
        classNames={nav}
        unmountOnExit
      >
        <div className={s.navigation}>
          <NavLink
            className={s.link}
            activeClassName={s.activeLink}
            to={Contacts.path}
            key={Contacts.label}
            exact={Contacts.exact}
          >
            {Contacts.label}
          </NavLink>
          {!isAuthenticated ? <AuthMenu /> : <UserMenu />}
        </div>
      </CSSTransition>
    </nav>
  );
};

export default whithAuth(Navigation);
