import { lazy } from 'react';

export default {
  path: '/register',
  label: 'Register',
  exact: true,
  component: lazy(() => import('../views/RegisterView/RegisterView')),
  private: false,
  restricted: true,
};
