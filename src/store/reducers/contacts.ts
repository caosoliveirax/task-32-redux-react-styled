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
      phoneNumber: '(11) 91111-1111',
      isFavorite: false
    },
    {
      id: 2,
      fullName: 'Sanji Vinsmoke',
      category: 'Favoritos',
      email: 'mrprince3@gmail.com',
      phoneNumber: '(22) 92222-2222',
      isFavorite: true
    },
    {
      id: 3,
      fullName: 'William Shakespeare',
      category: 'Trabalho',
      email: 'shakezinho@gmail.com',
      phoneNumber: '(33) 93333-3333',
      isFavorite: false
    },
    {
      id: 4,
      fullName: 'Amélie Poulain',
      category: 'Amigos',
      email: 'fitgirl2000@gmail.com',
      phoneNumber: '(44) 94444-4444',
      isFavorite: false
    },
    {
      id: 5,
      fullName: 'Jon Snow',
      category: 'Trabalho',
      email: 'northking@gmail.com',
      phoneNumber: '(55) 95555-5555',
      isFavorite: false
    },
    {
      id: 6,
      fullName: 'Alan Ferreira',
      category: 'Amigos',
      email: 'nextagex@gmail.com',
      phoneNumber: '(66) 96666-6666',
      isFavorite: false
    },
    {
      id: 7,
      fullName: 'Rony Weasley',
      category: 'Amigos',
      email: 'ronron@gmail.com',
      phoneNumber: '(77) 97777-7777',
      isFavorite: false
    },
    {
      id: 8,
      fullName: 'Milton Nascimento',
      category: 'Família',
      email: 'miltonmbp@gmail.com',
      phoneNumber: '(88) 98888-8888',
      isFavorite: false
    },
    {
      id: 9,
      fullName: 'Lô Borges',
      category: 'Favoritos',
      email: 'loborgesmbp@gmail.com',
      phoneNumber: '(99) 99999-9999',
      isFavorite: true
    }
  ]
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Contact>) => {
      const newFullName = action.payload.fullName.toLowerCase()
      const newEmail = action.payload.email.toLowerCase()
      const newPhone = action.payload.phoneNumber

      const contactIsExist = state.itens.find(
        (contact) =>
          contact.fullName.toLowerCase() === newFullName ||
          contact.email.toLowerCase() === newEmail ||
          contact.phoneNumber.toLowerCase() === newPhone
      )

      if (contactIsExist) {
        alert('Já existe um contato com este nome, e-mail ou telefone')
      } else {
        const lastContact = state.itens[state.itens.length - 1]
        const newContact = new Contact(
          action.payload.fullName,
          action.payload.category,
          action.payload.email,
          action.payload.phoneNumber,
          lastContact ? lastContact.id + 1 : 1
        )
        state.itens.push(newContact)
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.itens = [...state.itens.filter((contacts) => contacts.id !== action.payload)]
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.itens.findIndex((c) => c.id === action.payload.id)

      if (contactIndex >= 0) {
        state.itens[contactIndex] = action.payload
      }
    },
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const contactIndex = state.itens.findIndex((c) => c.id === action.payload)

      if (contactIndex >= 0) {
        const contact = state.itens[contactIndex]
        contact.isFavorite = !contact.isFavorite
      }
    }
  }
})

export const { add, remove, edit, toggleFavorite } = contactsSlice.actions
export default contactsSlice.reducer
