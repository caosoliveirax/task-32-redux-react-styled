import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Category } from '@utils/Contact'

type FilterState = {
  term?: string
  category: Category | 'Todos'
}

const initialState: FilterState = {
  term: '',
  category: 'Todos'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<FilterState>) => {
      state.category = action.payload.category
    },
    changeTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    }
  }
})

export const { changeFilter, changeTerm } = filterSlice.actions
export default filterSlice.reducer
