import React, { Compopnent } from 'react';

import s from './LoginView.module.scss';

class LoginView extends Compopnent {
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
  };
  render() {
    const { email, password } = this.state;

    return (
      <div className={s.login_form_container}>
        <h1>Login page</h1>

        <form onSubmit={this.handleSubmit} className={s.login_form}>
          <lable className={s.login_form_lable}>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </lable>

          <lable className={s.login_form_lable}>
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

export default LoginView;
