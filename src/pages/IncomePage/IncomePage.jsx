import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import TransactionTable from '../../components/TransactionTable/TransactionTable'
import NewTransactionForm from '../../components/NewTransactionForm/NewTransactionForm'
import SummaryTable from '../../components/SummaryTable/SummaryTable'
import { getIncomeCategories } from '../../redux/auth/operations'
import {
  selectIncomeCategories,
  selectTransactions,
} from '../../redux/auth/authSlice'

import { StyledIncomePage } from './Styled'
import MobileTransactionTable from '../../components/MobileTransactionTable/MobileTransactionTable'

const IncomePage = () => {
  const transactions = useSelector(selectTransactions)
  const incomeCategoriesList = useSelector(selectIncomeCategories)
  const isMobile = useMediaQuery({ query: '(max-width: 564px)' })

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
    <StyledIncomePage>
      {isMobile ? (
        <MobileTransactionTable transactions={incomeTransactions} />
      ) : (
        <>
          <NewTransactionForm
            location={location}
            categoriesList={incomeCategoriesList}
          />
          <div className='tablesWrapper'>
            <TransactionTable
              transactions={incomeTransactions}
              location={location}
            />
            <SummaryTable />
          </div>
        </>
      )}
    </StyledIncomePage>
  )
}

export default IncomePage
