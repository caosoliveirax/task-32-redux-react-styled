import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Category } from '@utils/Contact'

type FilterState = {
  category: Category | 'Todos'
}

const initialState: FilterState = {
  category: 'Todos'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<FilterState>) => {
      state.category = action.payload.category
    }
  }
})

export const { changeFilter } = filterSlice.actions
export default filterSlice.reducer
