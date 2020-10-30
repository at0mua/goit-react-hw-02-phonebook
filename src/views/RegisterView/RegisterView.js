import React, { Compopnent } from 'react';
import { connect } from 'react-redux';

import authOperation from '../../redux/auth/authOperation';

import s from './RegisterView.module.scss';

class RegisterView extends Compopnent {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister({ ...this.state });
  };
  render() {
    const { name, email, password } = this.state;

    return (
      <div className={s.register_form_container}>
        <h1>Login page</h1>

        <form onSubmit={this.handleSubmit} className={s.register_form}>
          <lable className={s.register_form_lable}>
            Email
            <input
              type="name"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </lable>

          <lable className={s.register_form_lable}>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </lable>

          <lable className={s.register_form_lable}>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </lable>
        </form>
      </div>
    );
  }
}

export default connect(null, { onRegister: authOperation.register })(
  RegisterView,
);
