/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'

export const instance = axios.create({
  baseURL: 'https://kapusta-backend.p.goit.global/',
})

const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const refreshUser = createAsyncThunk(
  'auth/refresh',

  async (_, { getState, rejectWithValue }) => {
    const sid = getState().auth.sid
    const refreshToken = getState().auth.refreshToken
    setToken(refreshToken)
    try {
      const response = await instance.post('/auth/refresh', { sid })

      const { newAccessToken, newRefreshToken, newSid } = response.data
      setToken(newAccessToken)

      const { data } = await instance.get('/user')

      return { userData: data, newRefreshToken, newSid }
    } catch (e) {
      toast.error('Upsss, some error occurred, please try again later')
      return rejectWithValue(e.message)
    }
  },
  {
    condition: (_, { getState }) => {
      const sid = getState().auth.sid

      if (!sid) return false
      return true
    },
  }
)

export const register = createAsyncThunk(
  'auth/register',

  async (userRegisterObject, thunkAPI) => {
    try {
      const response = await instance.post('/auth/register', userRegisterObject)
      toast.success('You was successfully registered, please login!!!')
      return response.data
    } catch (e) {
      toast.error('Upsss, some error occurred, please try again later')
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const login = createAsyncThunk(
  'auth/login',

  async (userRegisterObject, thunkAPI) => {
    try {
      const response = await instance.post('/auth/login', userRegisterObject)
      setToken(response.data.accessToken)
      toast.success('You was successfully login!!!')
      return response.data
    } catch (e) {
      toast.error('Upsss, some error occurred, please try again later')
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const logOut = createAsyncThunk(
  'auth/logOut',

  async (_, thunkAPI) => {
    try {
      const response = await instance.post('/auth/logout')
      setToken(null)
      toast.success('You was successfully logout!!!')
      return response.data
    } catch (e) {
      toast.error('Upsss, some error occurred, please try again later')
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const getIncomeCategories = createAsyncThunk(
  'auth/getIncomeCategories',

  async (_, thunkAPI) => {
    try {
      const response = await instance.get('transaction/income-categories')
      toast.success('You got Income categories successfully !!!')
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const getExpenseCategories = createAsyncThunk(
  'auth/getExpensesCategories',

  async (_, thunkAPI) => {
    try {
      const response = await instance.get('transaction/expense-categories')
      toast.success('You got Expenses categories successfully !!!')
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const addNewIncomeTransaction = createAsyncThunk(
  'transactions/addNewIncomeTransaction',
  async (newTransactionData, thunkAPI) => {
    try {
      const response = await instance.post(
        'transaction/income',
        newTransactionData
      )
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async (id, thunkAPI) => {
    try {
      const response = await instance.delete(`transaction/${id}`)
      return { ...response.data, id }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const addNewExpenseTransaction = createAsyncThunk(
  'transactions/addNewExpenseTransaction',
  async (newTransactionData, thunkAPI) => {
    try {
      const response = await instance.post(
        'transaction/expense',
        newTransactionData
      )
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const getPeriodTransactionData = createAsyncThunk(
  'auth/getPeriodTransactionData',

  async (date, thunkAPI) => {
    try {
      const response = await instance.get(
        `/transaction/period-data?date=${date}`
      )
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const updateBalance = createAsyncThunk(
  'auth/updateBalance',

  async (balance, thunkAPI) => {
    try {
      const response = await instance.patch('/user/balance', balance)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)
