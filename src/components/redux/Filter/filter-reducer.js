import { ADD_FILTER } from "./filter-types";

const initialStore = ''


const reducer = (store = initialStore, { type, payload }) => {
    switch (type) {
        case ADD_FILTER: 
        return payload
      default:
        return store;
    }
  };
export default reducer