import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import TransactionTable from '../../components/TransactionTable/TransactionTable'
import NewTransactionForm from '../../components/NewTransactionForm/NewTransactionForm'
import SummaryTable from '../../components/SummaryTable/SummaryTable'
import { getIncomeCategories } from '../../redux/transactions/incomeTransactions/operations'

import { StyledEIncomePage } from './Styled'

const IncomePage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getIncomeCategories())
  }, [dispatch])

  return (
    <StyledEIncomePage>
      <NewTransactionForm />
      <div className='tablesWrapper'>
        <TransactionTable />
        <SummaryTable />
      </div>
    </StyledEIncomePage>
  )
}

export default IncomePage
