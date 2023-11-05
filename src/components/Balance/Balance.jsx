// import { useSelector } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { selectBalance } from '../../redux/auth/authSlice'
import { StyledBalance } from './Styled'
import { updateBalance } from '../../redux/auth/operations'

const Balance = () => {
  const balance = useSelector(selectBalance)
  const [startBalance, setStartBalance] = useState(balance)
  const dispatch = useDispatch()

  const handleChangeBalance = (event) => {
    setStartBalance(event.target.value)
  }

  const handleSubmitBalance = (event) => {
    event.preventDefault()
    const newBalance = {
      newBalance: startBalance,
    }
    dispatch(updateBalance(newBalance))
  }

  useEffect(() => {
    setStartBalance(balance)
  }, [balance])

  return (
    <StyledBalance>
      <form className='balanceForm' onSubmit={handleSubmitBalance}>
        <label>
          <span className='balanceLabelText'>Balance: </span>
          <div className='balanceInputContainer'>
            <input
              onChange={handleChangeBalance}
              className='balanceInput'
              name='balanceInput'
              type='text'
              placeholder='00.00 UAH'
              value={startBalance}
              readOnly={balance !== 0}
            />
          </div>
        </label>
        <button
          className='balanceConfirmBtn'
          type='submit'
          disabled={balance !== 0}
        >
          confirm
        </button>
      </form>
    </StyledBalance>
  )
}

export default Balance
