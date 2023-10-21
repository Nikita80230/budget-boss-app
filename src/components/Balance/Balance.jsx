import React from 'react'
import { StyledBalance } from './Styled'

const Balance = () => (
  <StyledBalance>
    <form className='balanceForm'>
      <label>
        <span className='balanceLabelText'>Balance:</span>
        <div className='balanceInputContainer'>
          <input className='balanceInput' type='text' placeholder='00.00 UAH' />
        </div>
      </label>
      <button className='balanceConfirmBtn' type='submit'>
        confirm
      </button>
    </form>
  </StyledBalance>
)

export default Balance
