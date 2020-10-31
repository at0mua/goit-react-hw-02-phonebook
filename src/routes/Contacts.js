import { lazy } from 'react';

export default {
  path: '/contacts',
  label: 'Contacts',
  exact: true,
  component: lazy(() => import('../views/ContactsView/ContactsView')),
  private: true,
  restricted: false,
};
