import {
  fetchContactsSuccess,
  fetchContactsLoading,
  fetchContactsError,
} from './contacts-action';
import {
  postContactsSuccess,
  postContactsLoading,
  postContactsError,
} from './contacts-action';
import {
  deleteContactsSuccess,
  deleteContactsLoading,
  deleteContactsError,
} from './contacts-action';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, postContact, deleteContact } from '../../api';

export const getFetchedContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkApi) => {
    try {
      const data = await getContacts();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const postContacts = createAsyncThunk(
  'contacts/post',
  async (contact, thunkApi) => {
    try {
      const newContact = await postContact(contact);
      return newContact;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/delete',
  async (id, thunkApi) => {
    try {
      const contact = await deleteContact(id);
      return contact.id;
    } catch (error) {
        thunkApi.rejectWithValue(error)
    }
  }
);

// export const removeContact = id => {
//   const deleteFun = async (dispatch, getState) => {
//     try {
//       dispatch(deleteContactsLoading());
//       const contact = await deleteContact(id);
//       dispatch(deleteContactsSuccess(contact.id));
//     } catch (error) {
//       dispatch(deleteContactsError('error'));
//     }
//   };
//   return deleteFun;
// };

// export const getFetchedContacts = () => {
//     const fetchFun = async(dispatch, getState) => {
//         try {
//            dispatch(fetchContactsLoading())
//             const contacts = await getContacts()
//             dispatch(fetchContactsSuccess(contacts))
//         } catch (error) {
//             dispatch(fetchContactsError('error'))
//         }

//     }
//     return fetchFun;
// }

// export const postContacts = (contact) => {
//     const postFun = async(dispatch, getState) => {
//         try {
//             dispatch(postContactsLoading())
//             const newContact = await postContact(contact)
//             dispatch(postContactsSuccess(newContact))
//         } catch (error) {
//             dispatch(postContactsError('error'))
//         }
//     }
//     return postFun
// }
