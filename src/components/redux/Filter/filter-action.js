import { ADD_FILTER } from "./filter-types";

export const addFilter = payload => {
    return {
      type: ADD_FILTER,
      payload
    }
  }