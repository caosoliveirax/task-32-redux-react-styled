import { configureStore } from '@reduxjs/toolkit'
import contactsReducers from './reducers/contacts'
import filterReducers from './reducers/filter'

const store = configureStore({
  reducer: {
    contacts: contactsReducers,
    filter: filterReducers
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
