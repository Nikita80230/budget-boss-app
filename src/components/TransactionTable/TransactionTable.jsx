import React from 'react'
import { useDispatch } from 'react-redux'
import removeIcon from '../../img/removeIcon.png'
import { StyledTransactionTable } from './Styled'
import { deleteTransaction } from '../../redux/auth/operations'

const TransactionTable = ({ transactions }) => {
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteTransaction(id))
  }

  return (
    <StyledTransactionTable>
      <div className='table'>
        <div className='tableHead'>
          <div className='tableHeadBox date'>Date</div>
          <div className='tableHeadBox description'>Description</div>
          <div className='tableHeadBox category'>Category</div>
          <div className='tableHeadBox sum'>Sum</div>
          <div className='tableHeadBox removeItemBtn' />
        </div>
        <div className='tableBody'>
          {transactions &&
            transactions.map((transaction) => (
              <div className='tableBodyRow' key={transaction._id}>
                <div className='tableBodyBox date'>{transaction.date}</div>
                <div className='tableBodyBox description'>
                  {transaction.description}
                </div>
                <div className='tableBodyBox category'>
                  {transaction.category}
                </div>
                <div className='tableBodyBox sum'>{transaction.amount}</div>
                <div className='tableBodyBox removeItemBtn'>
                  <button
                    type='button'
                    onClick={() => handleDelete(transaction._id)}
                  >
                    <img src={removeIcon} alt='removeIcon' />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </StyledTransactionTable>
  )
}

export default TransactionTable
