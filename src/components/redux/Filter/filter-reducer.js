import { setFilter } from "./filter-action";
import { createReducer } from "@reduxjs/toolkit";
const initialStore = ''

const reducer = createReducer(initialStore, {
  [setFilter.type] : (_,{payload}) =>  payload
})

export default reducer