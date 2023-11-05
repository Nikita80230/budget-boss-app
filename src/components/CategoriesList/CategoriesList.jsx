import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import dateSwitcherLeft from '../../img/dateSwitcherLeft.png'
import dateSwitcherRight from '../../img/dateSwitcherRight.png'
import imgSalary from '../../img/incomesImg/salary.png'
import imgAdditionalIncome from '../../img/incomesImg/additionalTrans.png'
import alco from '../../img/expensesImg/alco.png'
import bills from '../../img/expensesImg/bills.png'
import education from '../../img/expensesImg/education.png'
import entertainment from '../../img/expensesImg/entertainment.png'
import health from '../../img/expensesImg/health.png'
import housing from '../../img/expensesImg/housing.png'
import others from '../../img/expensesImg/others.png'
import products from '../../img/expensesImg/products.png'
import sport from '../../img/expensesImg/sport.png'
import tech from '../../img/expensesImg/tech.png'
import transport from '../../img/expensesImg/transport.png'

import {
  selectPeriodTransactionsData,
  setSelectedCategoryForDetails,
} from '../../redux/auth/authSlice'

import { StyledCategoriesList } from './Styled'

const incomesImagesByCategory = {
  Salary: imgSalary,
  'Additional income': imgAdditionalIncome,
}
const expensesImagesByCategory = {
  Products: products,
  Alcohol: alco,
  Entertainment: entertainment,
  Health: health,
  Transport: transport,
  'For home': housing,
  Technics: tech,
  Utilities: bills,
  'Sports and hobby': sport,
  Education: education,
  Other: others,
}

const CategoriesList = () => {
  const periodTransactionsData = useSelector(selectPeriodTransactionsData)
  const [transactionType, setTransactionType] = useState('expenses') // 'expenses' | 'income'
  const dispatch = useDispatch()
  // console.log('periodTransactionsData: ', periodTransactionsData)

  const toggleTransactionType = () => {
    setTransactionType(transactionType === 'expenses' ? 'income' : 'expenses')
  }

  const onSelectTransactionCategory = (category) => {
    dispatch(setSelectedCategoryForDetails(category))
  }

  const expenses = periodTransactionsData?.expenses
  const incomes = periodTransactionsData?.incomes

  const showIncomes = transactionType === 'income' && incomes
  const showExpenses = transactionType === 'expenses' && expenses

  return (
    <StyledCategoriesList>
      <div className='transactionSwitcher'>
        <button
          onClick={toggleTransactionType}
          className='transactionSwitcherLeft'
          type='button'
        >
          <img src={dateSwitcherLeft} alt='transactionSwitcherLeft' />
        </button>
        <span className='transactionSwitcherTitle'>
          {transactionType === 'expenses' ? 'Expenses' : 'Incomes'}
        </span>
        <button
          onClick={toggleTransactionType}
          className='transactionSwitcherRight'
          type='button'
        >
          <img src={dateSwitcherRight} alt='transactionSwitcherRight' />
        </button>
      </div>
      <div className='categoryList'>
        {showIncomes &&
          Object.entries(incomes.incomesData).map(([key, value]) => {
            const getTransactionImg = incomesImagesByCategory[key]
            return (
              <button
                type='button'
                onClick={() => onSelectTransactionCategory(key)}
                className='categoryItem'
              >
                <span className='categoryItemValue'>{value.total} UAH</span>
                <div className='categoryItemImgThumb'>
                  <img
                    className='categoryItemImg'
                    src={getTransactionImg}
                    alt={key}
                  />
                </div>

                <span className='categoryItemText'>{key}</span>
              </button>
            )
          })}
        {showExpenses &&
          Object.entries(expenses.expensesData).map(([key, value]) => {
            const getTransactionImg = expensesImagesByCategory[key]
            return (
              <button
                type='button'
                onClick={() => onSelectTransactionCategory(key)}
                className='categoryItem'
              >
                <span className='categoryItemValue'>{value.total} UAH</span>
                <div className='categoryItemImgThumb'>
                  <img
                    className='categoryItemImg'
                    src={getTransactionImg}
                    alt={key}
                  />
                </div>

                <span className='categoryItemText'>{key}</span>
              </button>
            )
          })}
      </div>
    </StyledCategoriesList>
  )
}

export default CategoriesList
