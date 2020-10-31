import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

import userAvatar from '../../images/user.png';

import s from './UserMenu.module.scss';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className={s.container}>
    <img src={userAvatar} alt="" width="32" className={s.avatar} />
    <span className={s.name}>Welcome, {name}</span>
    <button type="button" className={s.btn} onClick={onLogout}>
      Logout
    </button>
  </div>
);

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
  UserMenu,
);
