import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import TransactionTable from '../../components/TransactionTable/TransactionTable'
import NewTransactionForm from '../../components/NewTransactionForm/NewTransactionForm'
import SummaryTable from '../../components/SummaryTable/SummaryTable'
import { getIncomeCategories } from '../../redux/auth/operations'
import {
  selectIncomeCategories,
  selectTransactions,
} from '../../redux/auth/authSlice'

import { StyledEIncomePage } from './Styled'

const IncomePage = () => {
  const transactions = useSelector(selectTransactions)
  const incomeCategoriesList = useSelector(selectIncomeCategories)

  const dispatch = useDispatch()
  const location = useLocation()

  const incomeTransactions = transactions.filter(
    (transaction) =>
      transaction.category === 'Salary' ||
      transaction.category === 'Additional income'
  )

  useEffect(() => {
    dispatch(getIncomeCategories())
  }, [dispatch])

  return (
    <StyledEIncomePage>
      <NewTransactionForm
        location={location}
        categoriesList={incomeCategoriesList}
      />
      <div className='tablesWrapper'>
        <TransactionTable transactions={incomeTransactions} />
        <SummaryTable />
      </div>
    </StyledEIncomePage>
  )
}

export default IncomePage
