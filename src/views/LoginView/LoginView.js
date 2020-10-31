import React, { Component } from 'react';
import { connect } from 'react-redux';

import { authOperations } from '../../redux/auth';

import s from './LoginView.module.scss';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin({ ...this.state });
    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className={s.login_form_container}>
        <h1 className={s.login_title}>Login page</h1>

        <form onSubmit={this.handleSubmit} className={s.login_form}>
          <label className={s.login_form_label}>
            Email
            <input
              className={s.login_form_input}
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              required
              placeholder="Enter your email"
            />
          </label>

          <label className={s.login_form_label}>
            Password
            <input
              className={s.login_form_input}
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              required
              placeholder="Enter your password"
            />
          </label>

          <button type="submit" className={s.login_form_btn}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { onLogin: authOperations.login })(LoginView);
