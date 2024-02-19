import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import DatePicker from 'react-datepicker'
import Select from 'react-select'
import { useLocation } from 'react-router-dom'
// import { getIncomeCategories } from '../../redux/transactions/incomeTransactions/operations'

import { StyledNewTransaction } from './Styled'
import 'react-datepicker/dist/react-datepicker.css'
import {
  addNewExpenseTransaction,
  addNewIncomeTransaction,
} from '../../redux/auth/operations'
import { routes } from '../../routes/routes'

const colourStyles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: 'transparent',
    border: '2px solid #474759',
    boxShadow: isFocused ? 'none' : 'none',
    borderRadius: 0,
    // borderBottom: isFocused ? '1px solid #ff3067' : '1px solid #424b5a',
    ':hover': {
      border: '2px solid #474759',
    },
  }),
  option: (styles, { isSelected }) => ({
    ...styles,
    fontSize: '14px',
    color: isSelected ? '#fff' : '#424b5a',
    backgroundColor: isSelected ? '#424b5a' : '#fff',
    fontFamily: 'Klein',
  }),
  input: (styles) => ({
    ...styles,
    color: 'rgba(199, 204, 220, 0.50)',
    fontSize: '12px',
    fontFamily: 'Roboto',
    fontWeight: 400,
    letterSpacing: '0.24px',
  }),
  placeholder: (styles) => ({
    ...styles,
    fontSize: '12px',
    fontFamily: 'Roboto',
    fontWeight: 400,
    letterSpacing: '0.24px',
  }),
  singleValue: (styles) => ({
    ...styles,
    fontSize: '12px',
    fontFamily: 'Roboto',
    letterSpacing: '0.24px',
    color: 'rgba(199, 204, 220, 0.50)',

    ':before': {
      display: 'none',
    },
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: '#424b5a',
    ':hover': { color: '#424b5a' },
  }),
  indicatorSeparator: () => ({ dispalay: 'none' }),
  valueContainer: (styles) => ({
    ...styles,
    paddingLeft: '13px',
    paddingTop: '12px',
    paddingBottom: '10px',
  }),
}

const NewTransactionForm = ({ categoriesList }) => {
  const location = useLocation()

  const dispatch = useDispatch()

  // console.log(location)
  const options = categoriesList?.map((category) => ({
    value: category,
    label: category,
  }))

  const [startDate, setStartDate] = useState(new Date())
  const [selectedOption, setSelectedOption] = useState(null)
  const [formData, setFormData] = useState({
    transactionDescription: '',
    transactionAmount: '',
  })

  const handleChange = (option) => {
    setSelectedOption(option)
  }

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newTransactionData = {
      description: formData.transactionDescription,
      amount: +formData.transactionAmount,
      date: startDate.toISOString().slice(0, 10),
      category: selectedOption.value,
    }

    switch (location.pathname) {
      case routes.INCOME:
        // console.log('income', location)
        dispatch(addNewIncomeTransaction(newTransactionData))
        // .unwrap()
        // .then(() => {
        //   navigate(routes.NOTFOUND)
        // })
        break
      case routes.EXPENSES:
        // console.log('expenses', location)
        dispatch(addNewExpenseTransaction(newTransactionData))
        break
      default:
        break
    }

    // dispatch(addNewIncomeTransaction(newTransactionData))

    setFormData({
      transactionDescription: '',
      transactionAmount: '',
    })
    setSelectedOption(null)
    setStartDate(new Date())
  }

  const handleClear = () => {
    setFormData({
      transactionDescription: '',
      transactionAmount: '',
    })
    setSelectedOption(null)
    setStartDate(new Date())
  }

  return (
    <StyledNewTransaction>
      <form className='newTransactionForm' onSubmit={handleSubmit}>
        <div className='newTransactionInputsContainer'>
          <label>
            <img src='' alt='' />
            <DatePicker
              className='newTransactionDate'
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              required
            />
          </label>
          <input
            className='newTransactionDescriptionInput'
            type='text'
            placeholder='Product description'
            name='transactionDescription'
            onChange={handleInputChange}
            value={formData.transactionDescription}
            required
          />
          <Select
            styles={colourStyles}
            className='newTransactionType'
            value={selectedOption}
            onChange={handleChange}
            options={options}
            required
          />
          <input
            placeholder='0,00'
            className='newTransactionAmountInput'
            type='text'
            name='transactionAmount'
            onChange={handleInputChange}
            value={formData.transactionAmount}
            required
          />
        </div>
        <div className='newTransactionButtonsContainer'>
          <button className='newTransactionSubmitBtn' type='submit'>
            Input
          </button>
          <button
            className='newTransactionClearBtn'
            type='button'
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </form>
    </StyledNewTransaction>
  )
}

export default NewTransactionForm
