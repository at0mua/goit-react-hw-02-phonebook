import React, { Component } from 'react';
import { connect } from 'react-redux';

import { authOperations } from '../../redux/auth';

import s from './RegisterView.module.scss';

class RegisterView extends Component {
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
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div className={s.register_form_container}>
        <h1 className={s.register_title}>Register page</h1>

        <form onSubmit={this.handleSubmit} className={s.register_form}>
          <label className={s.register_form_label}>
            Name
            <input
              className={s.register_form_input}
              type="name"
              name="name"
              value={name}
              onChange={this.handleChange}
              required
              placeholder="Enter your name"
            />
          </label>

          <label className={s.register_form_label}>
            Email
            <input
              className={s.register_form_input}
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              required
              placeholder="Enter your email"
            />
          </label>

          <label className={s.register_form_label}>
            Password
            <input
              className={s.register_form_input}
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              required
              placeholder="Enter new password"
            />
          </label>

          <button type="submit" className={s.register_form_btn}>
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { onRegister: authOperations.register })(
  RegisterView,
);
