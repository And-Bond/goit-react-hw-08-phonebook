import { setFilter } from "./filter-action";
import { createReducer } from "@reduxjs/toolkit";


const reducer = createReducer('', {
  [setFilter.type] : (_,{payload}) =>  payload
})

export default reducer