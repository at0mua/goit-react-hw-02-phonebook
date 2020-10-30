import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Navigation from '../Navigation/Navigation';

import s from './AppBar.module.scss';
import logo from '../../animation/logo.module.scss';
import nav from '../../animation/nav.module.scss';

const AppBar = ({ title }) => {
  return (
    <CSSTransition in={true} appear timeout={500} classNames={s} unmountOnExit>
      {stage => {
        return (
          <header className={s.header}>
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
                  to={'/'}
                  key={'Home'}
                  exact
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
                <Navigation />
              </CSSTransition>
            </nav>
          </header>
        );
      }}
    </CSSTransition>
  );
};

AppBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AppBar;
