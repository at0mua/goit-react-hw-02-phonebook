import React from 'react';
import { NavLink } from 'react-router-dom';

import { Register, Login } from '../../routes/index';

import s from './AuthMenu.module.scss';

const AuthMenu = () => (
  <ul className={s.auth_list}>
    <li>
      <NavLink
        exact={Register.exact}
        key={Register.label}
        to={Register.path}
        className={s.link}
        activeClassName={s.activeLink}
      >
        {Register.label}
      </NavLink>
    </li>
    <li>
      <NavLink
        exact={Login.exact}
        key={Login.label}
        to={Login.path}
        className={s.link}
        activeClassName={s.activeLink}
      >
        {Login.label}
      </NavLink>
    </li>
  </ul>
);

export default AuthMenu;
