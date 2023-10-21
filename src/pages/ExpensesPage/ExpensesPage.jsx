import React from 'react'
import TransactionTable from '../../components/TransactionTable/TransactionTable'
import NewTransactionForm from '../../components/NewTransactionForm/NewTransactionForm'
import { StyledExpensesPage } from './Styled'
import SummaryTable from '../../components/SummaryTable/SummaryTable'

const ExpensesPage = () => (
  <StyledExpensesPage>
    <NewTransactionForm />
    <div className='tablesWrapper'>
      <TransactionTable />
      <SummaryTable />
    </div>
  </StyledExpensesPage>
)

export default ExpensesPage
