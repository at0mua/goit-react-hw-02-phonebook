import { lazy } from 'react';

export default [
  {
    path: '/',
    label: 'Home',
    exact: true,
    component: lazy(() => import('../views/HomeView/HomeView')),
    private: false,
    restricted: false,
  },
  {
    path: '/contacts',
    label: 'Contacts',
    exact: true,
    component: lazy(() => import('../views/ContactsView/ContactsView')),
    private: true,
    restricted: false,
  },
  {
    path: '/register',
    label: 'Register',
    exact: true,
    component: lazy(() => import('../views/RegisterView/RegisterView')),
    private: false,
    restricted: true,
  },
  {
    path: '/login',
    label: 'Login',
    exact: true,
    component: lazy(() => import('../views/LoginView/LoginView.js')),
    private: false,
    restricted: true,
  },
];
