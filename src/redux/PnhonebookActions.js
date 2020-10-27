import { createAction } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from "uuid";

const addContact = createAction("contacts/addContact", (name, number) => ({
  payload: { id: uuidv4(), name, number },
}));

const deleteContact = createAction("contacts/deleteContact");
const fromLocalSorage = createAction("contacts/fromLocalSorage");
const changeFilter = createAction("contacs/change-filter");

// const addContact = (name, number) => {
//   return {
//     type: "contacts/addContact",
//     payload: { id: uuidv4(), name, number },
//   };
// };

// const deleteContact = (contactId) => {
//   return {
//     type: "contacts/deleteContact",
//     payload: {
//       contactId,
//     },
//   };
// };

// const fromLocalSorage = (contacts) => {
//   return {
//     type: "contacts/fromLocalSorage",
//     payload: { contacts },
//   };
// };

// const changeFilter = (value) => {
//   return {
//     type: "contacs/change-filter",
//     payload: {
//       value,
//     },
//   };
// };

export default {
  addContact,
  deleteContact,
  fromLocalSorage,
  changeFilter,
};
