import React, { useState } from 'react'
import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'
import DatePicker from 'react-datepicker'
import Select from 'react-select'
// import { getIncomeCategories } from '../../redux/transactions/incomeTransactions/operations'

import { StyledNewTransaction } from './Styled'
import 'react-datepicker/dist/react-datepicker.css'

const options = [
  // { value: 'chocolate', label: 'Chocolate' },
  // { value: 'strawberry', label: 'Strawberry' },
  // { value: 'vanilla', label: 'Vanilla' },
]
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

const NewTransactionForm = () => {
  // const dispatch = useDispatch()
  const categoriesList = useSelector(
    (state) => state.incomeTransactions.incomeCategories
  )
  categoriesList.map((category) =>
    options.push({ value: category, label: category })
  )

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
    // console.log(formData)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log({
    //   description: formData.transactionDescription,
    //   amount: +formData.transactionAmount,
    //   date: startDate.toLocaleDateString(),
    //   category: selectedOption.value,
    // })
  }

  return (
    <StyledNewTransaction>
      <label>
        <img src='' alt='' />
        <DatePicker
          className='newTransactionDate'
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </label>
      <form className='newTransactionForm' onSubmit={handleSubmit}>
        <input
          className='newTransactionDescriptionInput'
          type='text'
          placeholder='Product description'
          name='transactionDescription'
          onChange={handleInputChange}
        />
        <Select
          styles={colourStyles}
          className='newTransactionType'
          value={selectedOption}
          onChange={handleChange}
          options={options}
        />
        <input
          placeholder='0,00'
          className='newTransactionAmountInput'
          type='text'
          name='transactionAmount'
          onChange={handleInputChange}
        />
        <button className='newTransactionSubmitBtn' type='submit'>
          Input
        </button>
        <button className='newTransactionClearBtn' type='button'>
          Clear
        </button>
      </form>
    </StyledNewTransaction>
  )
}

export default NewTransactionForm
