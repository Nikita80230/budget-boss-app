import { createSlice } from '@reduxjs/toolkit'
import { getIncomeCategories } from './operations'

const incomeTransactionsInitialState = {
  isLoading: false,
  error: null,
  incomeCategories: [],
}

const incomeTransactionSlice = createSlice({
  name: 'incomeTransactions',
  initialState: incomeTransactionsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getIncomeCategories.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getIncomeCategories.fulfilled, (state, action) => {
        state.isLoading = false
        state.incomeCategories = action.payload
      })
      .addCase(getIncomeCategories.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error
      })
  },
})

export const incomeTransactionsReducer = incomeTransactionSlice.reducer
