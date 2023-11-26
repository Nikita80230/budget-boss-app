import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useMediaQuery } from 'react-responsive'
import TransactionTable from '../../components/TransactionTable/TransactionTable'
import NewTransactionForm from '../../components/NewTransactionForm/NewTransactionForm'
import SummaryTable from '../../components/SummaryTable/SummaryTable'
import { getExpenseCategories } from '../../redux/auth/operations'
import {
  selectExpenseCategories,
  selectTransactions,
} from '../../redux/auth/authSlice'

import { StyledExpensesPage } from './Styled'
import MobileTransactionTable from '../../components/MobileTransactionTable/MobileTransactionTable'

const ExpensesPage = () => {
  const dispatch = useDispatch()
  const isMobile = useMediaQuery({ query: '(max-width: 564px)' })

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
      {isMobile ? (
        <MobileTransactionTable transactions={expenseTransactions} />
      ) : (
        <>
          <NewTransactionForm categoriesList={expenseCategoriesList} />
          <div className='tablesWrapper'>
            <TransactionTable transactions={expenseTransactions} />
            <SummaryTable />
          </div>
        </>
      )}
    </StyledExpensesPage>
  )
}

export default ExpensesPage
