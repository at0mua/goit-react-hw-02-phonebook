import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";

import PhonebookActions from "../../redux/PnhonebookActions";
import Message from "../Message/Message";

import s from "./ContactsForm.module.scss";
import translateR from "../../animation/translateRight.module.scss";

class ContactsForm extends Component {
  state = {
    name: "",
    number: "",
    message: false,
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
    const { contacts, onSubmit } = this.props;

    if (this.checkContactName(contacts, name)) {
      this.setState({ message: true });
      setTimeout(() => {
        this.resetMessageStatus();
      }, 1500);
    } else {
      onSubmit(name, number);
    }

    this.setState({ name: "", number: "" });
  };

  checkContactName = (contacts, name) => {
    return contacts.some((contact) =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );
  };

  resetMessageStatus = () => {
    this.setState({
      message: false,
    });
  };

  render() {
    const { name, number, message } = this.state;

    return (
      <>
        <CSSTransition
          in={message}
          classNames={translateR}
          timeout={250}
          unmountOnExit
        >
          <Message />
        </CSSTransition>

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
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.phonebook.contacts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (name, number) =>
      dispatch(PhonebookActions.addContact(name, number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsForm);
