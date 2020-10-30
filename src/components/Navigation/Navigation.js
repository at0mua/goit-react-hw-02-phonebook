import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

import s from './Navigation.module.scss';

const Navigation = () => (
  <ul className={s.navigation}>
    {routes.map(route => (
      <li>
        <NavLink
          exact={route.exact}
          key={route.label}
          to={route.path}
          className={s.link}
          activeClassName={s.activeLink}
        >
          {route.label}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default Navigation;
