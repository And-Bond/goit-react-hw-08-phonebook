import { configureStore  } from '@reduxjs/toolkit';

import {
  successReducer,
  loadingReducer,
  errorReducer,
} from './Contacts/contacts-reducer';
import * as slicer from './Contacts/contacts-slicer'
import filterReducer from './Filter/filter-reducer';





export const store = configureStore({
  reducer: {
    items: slicer.itemsSlice.reducer,
    loading: slicer.loadingSlice.reducer,
    error: slicer.errorSlice.reducer,
    filter: filterReducer,
  },
});

