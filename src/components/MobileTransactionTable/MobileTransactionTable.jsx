import React from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { ReactComponent as RemoveIcon } from '../../img/removeIcon.svg'
import { deleteTransaction } from '../../redux/auth/operations'

// import removeIcon from '../../img/removeIcon.png'

import { StyledMobileTransactionTable } from './Styled'
import { routes } from '../../routes/routes'

const MobileTransactionTable = ({ transactions }) => {
  const location = useLocation()
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteTransaction(id))
  }

  return (
    <StyledMobileTransactionTable>
      <div className='tableBody'>
        {transactions &&
          transactions.map((transaction) => (
            <div
              className={`tableBodyRow ${
                location.pathname === routes.EXPENSES ? 'expenses' : ''
              }`}
              key={transaction._id}
            >
              <div className='transactionInfo'>
                <div className='description'>{transaction.description}</div>
                <div className='dateCategory'>
                  <div className='date'>{transaction.date}</div>
                  <div className='category'>{transaction.category}</div>
                </div>
              </div>

              <div className='sum'>{transaction.amount} UAH.</div>
              <div className='removeItemBtn'>
                <button
                  type='button'
                  onClick={() => handleDelete(transaction._id)}
                >
                  <RemoveIcon />
                </button>
              </div>
            </div>
          ))}
      </div>
    </StyledMobileTransactionTable>
  )
}

export default MobileTransactionTable
