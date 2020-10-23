import React, { Component } from "react";
import PropTypes from "prop-types";

import s from "./ContactsForm.module.scss";

class ContactsForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, number } = this.state;

    this.props.onAddContact(name, number);

    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form
        type="submit"
        className={s.contactForm}
        onSubmit={this.handleSubmit}
      >
        <label className={s.contactForm_input}>
          Name
          <input
            type="name"
            name="name"
            className={s.contactForm_input__name}
            required
            value={name}
            onChange={this.handleChange}
            placeholder="Enter contact name"
          />
        </label>
        <label className={s.contactForm_input}>
          Number
          <input
            type="tel"
            name="number"
            className={s.contactForm_input__number}
            required
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            value={number}
            onChange={this.handleChange}
            placeholder="000-00-00"
          />
        </label>
        <button type="submit" className={s.contactForm_btn}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactsForm;
