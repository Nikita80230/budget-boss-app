import { createSlice } from '@reduxjs/toolkit'
import { logOut, login, refreshUser } from './operations'

const authInitialState = {
  isLoading: false,
  isLoggedIn: false,
  refreshToken: null,
  sid: null,
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
    // addTask(state, action) {},
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
      }),
})

// const { addTask, deleteTask, toggleCompleted } = authSlice.actions

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
