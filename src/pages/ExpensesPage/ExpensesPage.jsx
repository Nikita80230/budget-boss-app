import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import TransactionTable from '../../components/TransactionTable/TransactionTable'
import NewTransactionForm from '../../components/NewTransactionForm/NewTransactionForm'
import { StyledExpensesPage } from './Styled'
import SummaryTable from '../../components/SummaryTable/SummaryTable'
import { getExpenseCategories } from '../../redux/auth/operations'
import {
  selectExpenseCategories,
  selectTransactions,
} from '../../redux/auth/authSlice'

const ExpensesPage = () => {
  const dispatch = useDispatch()
  const location = useLocation()

  const transactions = useSelector(selectTransactions)
  const expenseCategoriesList = useSelector(selectExpenseCategories)

  const expenseTransactions = transactions.filter(
    (transaction) =>
      transaction.category !== 'Salary' &&
      transaction.category !== 'Additional income'
  )

  useEffect(() => {
    dispatch(getExpenseCategories())
  }, [dispatch])

  return (
    <StyledExpensesPage>
      <NewTransactionForm
        location={location}
        categoriesList={expenseCategoriesList}
      />
      <div className='tablesWrapper'>
        <TransactionTable
          transactions={expenseTransactions}
          location={location}
        />
        <SummaryTable />
      </div>
    </StyledExpensesPage>
  )
}

export default ExpensesPage
