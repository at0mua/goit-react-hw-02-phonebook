import { v4 as uuidv4 } from "uuid";

const addContact = (name, number) => {
  return {
    type: "contacts/addContact",
    payload: { id: uuidv4(), name, number },
  };
};

const deleteContact = () => {
  return {
    type: "contacts/deleteContact",
  };
};

const fromLocalSorage = (contacts) => {
  return {
    type: "contacts/fromLocalSorage",
    payload: { contacts },
  };
};

const changeFilter = (value) => {
  return {
    type: "contacs/change-filter",
    payload: {
      value,
    },
  };
};

export default { addContact, deleteContact, fromLocalSorage, changeFilter };
