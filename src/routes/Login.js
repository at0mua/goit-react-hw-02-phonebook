import { lazy } from 'react';

export default {
  path: '/login',
  label: 'Login',
  exact: true,
  component: lazy(() => import('../views/LoginView/LoginView.js')),
  private: false,
  restricted: true,
};
