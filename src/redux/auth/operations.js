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
