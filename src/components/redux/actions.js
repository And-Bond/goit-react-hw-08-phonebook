import { ADD_CONTACT, ADD_FILTER, REMOVE_CONTACT } from "./types";

export const addContact = payload => {
  return {
    type: ADD_CONTACT,
    payload,
  };
};

export const addFilter = payload => {
  return {
    type: ADD_FILTER,
    payload
  }
}

export const removeContact = payload => {
  return {
    type: REMOVE_CONTACT,
    payload
  }
}