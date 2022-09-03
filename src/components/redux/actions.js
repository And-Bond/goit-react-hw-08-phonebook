import { ADD_CONTACT } from "./types";

export const addContact = payload => {
    console.log('store.actions works')
  return {
    type: ADD_CONTACT,
    payload,
  };
};
