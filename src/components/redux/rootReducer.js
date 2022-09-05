import { combineReducers } from 'redux'

import contactsReducer from './Contacts/contacts-reducer'
import filterReducer from './Filter/filter-reducer'

const rootReducer = combineReducers({
        items: contactsReducer,
        filter: filterReducer
})

export default rootReducer