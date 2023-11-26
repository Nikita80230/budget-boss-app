import React from 'react'

import addNewTransactionIcon from '../../img/addTransactionIcon.png'
import { StyledAddNewTransactionButton } from './Styled'

const AddNewTransactionButton = () => (
  <StyledAddNewTransactionButton>
    <img src={addNewTransactionIcon} alt='Add Transaction' />
    <span>Add transaction</span>
  </StyledAddNewTransactionButton>
)

export default AddNewTransactionButton
