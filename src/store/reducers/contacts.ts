import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'

type ContactState = {
  itens: Contact[]
}

const initialState: ContactState = {
  itens: [
    {
      id: 1,
      fullName: 'Monkey D. Luffy',
      category: 'Família',
      email: 'chapeudepalha@gmail.com',
      phoneNumber: '(11) 91111-1111'
    },
    {
      id: 2,
      fullName: 'Sanji Vinsmoke',
      category: 'Favoritos',
      email: 'mrprince3@gmail.com',
      phoneNumber: '(22) 92222-2222'
    },
    {
      id: 3,
      fullName: 'William Shakespeare',
      category: 'Trabalho',
      email: 'shakezinho@gmail.com',
      phoneNumber: '(33) 93333-3333'
    },
    {
      id: 4,
      fullName: 'Amélie Poulain',
      category: 'Amigos',
      email: 'fitgirl2000@gmail.com',
      phoneNumber: '(44) 94444-4444'
    },
    {
      id: 5,
      fullName: 'Jon Snow',
      category: 'Trabalho',
      email: 'northking@gmail.com',
      phoneNumber: '(55) 95555-5555'
    },
    {
      id: 6,
      fullName: 'Alan Ferreira',
      category: 'Amigos',
      email: 'nextagex@gmail.com',
      phoneNumber: '(66) 96666-6666'
    },
    {
      id: 7,
      fullName: 'Rony Weasley',
      category: 'Amigos',
      email: 'ronron@gmail.com',
      phoneNumber: '(77) 97777-7777'
    },
    {
      id: 8,
      fullName: 'Milton Nascimento',
      category: 'Família',
      email: 'miltonmbp@gmail.com',
      phoneNumber: '(88) 98888-8888'
    },
    {
      id: 9,
      fullName: 'Lô Borges',
      category: 'Favoritos',
      email: 'loborgesmbp@gmail.com',
      phoneNumber: '(99) 99999-9999'
    }
  ]
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = [...state.itens.filter((contacts) => contacts.id !== action.payload)]
    }
  }
})

export const { remove } = contactsSlice.actions
export default contactsSlice.reducer
