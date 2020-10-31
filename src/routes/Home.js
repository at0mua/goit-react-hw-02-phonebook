import { lazy } from 'react';

export default {
  path: '/',
  label: 'Home',
  exact: true,
  component: lazy(() => import('../views/HomeView/HomeView')),
  private: false,
  restricted: false,
};
