import { createSlice } from '@reduxjs/toolkit'
import {
  addNewExpenseTransaction,
  addNewIncomeTransaction,
  deleteTransaction,
  getExpenseCategories,
  getIncomeCategories,
  getPeriodTransactionData,
  logOut,
  login,
  refreshUser,
  updateBalance,
} from './operations'

const authInitialState = {
  isLoading: false,
  isLoggedIn: false,
  refreshToken: null,
  sid: null,
  incomeCategories: null,
  expenseCategories: null,
  periodTransactionsData: null,
  selectedCategoryForDetails: null,
  userData: {
    email: null,
    balance: null,
    id: null,
    transactions: null,
  },
}

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    setSelectedCategoryForDetails(state, action) {
      state.selectedCategoryForDetails = action.payload
    },
    // deleteTask(state, action) {},
    // toggleCompleted(state, action) {},
  },
  extraReducers: (builder) =>
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isLoggedIn = true
        state.userData = action.payload.userData
        state.refreshToken = action.payload.refreshToken
        state.sid = action.payload.sid
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false
      })
      .addCase(refreshUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isLoggedIn = true
        state.userData = action.payload.userData
        state.refreshToken = action.payload.newRefreshToken
        state.sid = action.payload.newSid
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isLoading = false
      })
      .addCase(logOut.pending, (state) => {
        state.isLoading = true
      })
      .addCase(logOut.fulfilled, (state) => {
        state.isLoading = false
        state.isLoggedIn = false
        state.userData = {
          email: null,
          balance: null,
          id: null,
          transactions: null,
        }
        state.refreshToken = null
        state.sid = null
      })
      .addCase(logOut.rejected, (state) => {
        state.isLoading = false
      })
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
      .addCase(getExpenseCategories.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getExpenseCategories.fulfilled, (state, action) => {
        state.isLoading = false
        state.expenseCategories = action.payload
      })
      .addCase(getExpenseCategories.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error
      })
      .addCase(addNewIncomeTransaction.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addNewIncomeTransaction.fulfilled, (state, action) => {
        state.isLoading = false
        state.userData.balance = action.payload.newBalance
        state.userData.transactions.push(action.payload.transaction)
      })
      .addCase(addNewIncomeTransaction.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error
      })
      .addCase(deleteTransaction.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.isLoading = false
        state.userData.balance = action.payload.newBalance
        state.userData.transactions = state.userData.transactions.filter(
          (transaction) => transaction._id !== action.payload.id
        )
      })
      .addCase(deleteTransaction.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error
      })
      .addCase(addNewExpenseTransaction.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addNewExpenseTransaction.fulfilled, (state, action) => {
        state.isLoading = false
        state.userData.balance = action.payload.newBalance
        state.userData.transactions.push(action.payload.transaction)
      })
      .addCase(addNewExpenseTransaction.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error
      })
      .addCase(getPeriodTransactionData.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPeriodTransactionData.fulfilled, (state, action) => {
        state.isLoading = false
        state.periodTransactionsData = action.payload
        // state.userData.transactions.push(action.payload.transaction)
      })
      .addCase(getPeriodTransactionData.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error
      })
      .addCase(updateBalance.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateBalance.fulfilled, (state, action) => {
        state.isLoading = false
        state.userData.balance = action.payload.newBalance
        // state.userData.transactions.push(action.payload.transaction)
      })
      .addCase(updateBalance.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error
      }),
})

// const { addTask, deleteTask, toggleCompleted } = authSlice.actions

export const selectIncomeCategories = (state) => state.auth.incomeCategories
export const selectExpenseCategories = (state) => state.auth.expenseCategories
export const selectTransactions = (state) => state.auth.userData.transactions
export const selectBalance = (state) => state.auth.userData.balance
export const selectPeriodTransactionsData = (state) =>
  state.auth.periodTransactionsData
export const selectSelectedCategoryForDetails = (state) =>
  state.auth.selectedCategoryForDetails
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn

export const { setSelectedCategoryForDetails } = authSlice.actions
export const authReducer = authSlice.reducer

// transactions
// [
//       {
//         description: null,
//         category: null,
//         amount: null,
//         date: null,
//         _id: null,
//       },
//     ]
