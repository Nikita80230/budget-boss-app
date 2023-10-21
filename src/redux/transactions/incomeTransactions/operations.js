import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import { instance } from '../../auth/operations'

export const getIncomeCategories = createAsyncThunk(
  'incomeTransaction/getIncomeCategories',

  async (_, thunkAPI) => {
    try {
      const response = await instance.get('transaction/income-categories')
      toast.success('You added transaction successfully !!!')
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

// export const addNewIncomeTransaction = createAsyncThunk({
//   name: 'transactions/addNewIncomeTransaction',
// })
