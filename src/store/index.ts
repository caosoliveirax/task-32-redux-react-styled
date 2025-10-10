import { configureStore } from '@reduxjs/toolkit'
import contactsReducers from './reducers/contacts'

const store = configureStore({
  reducer: {
    contacts: contactsReducers
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
