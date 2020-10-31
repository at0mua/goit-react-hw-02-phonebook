import React from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

import Navigation from '../Navigation/Navigation';

import s from './AppBar.module.scss';

const AppBar = ({ title }) => {
  return (
    <CSSTransition in={true} appear timeout={500} classNames={s} unmountOnExit>
      {stage => {
        return (
          <header className={s.header}>
            <Navigation title={title} stage={stage} />
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
