import React from 'react'
import { StyledTransactionsSummary } from './Styled'

const TransactionsSummary = () => (
  <StyledTransactionsSummary>
    <div className='expenses'>
      <span className='expensesText text'>Expenses</span>
      <span className='expensesValue'>-1111111 UAH</span>
    </div>
    <div className='income'>
      <span className='incomeText text'>Income</span>
      <span className='incomeValue'>-1111111 UAH</span>
    </div>
  </StyledTransactionsSummary>
)

export default TransactionsSummary
