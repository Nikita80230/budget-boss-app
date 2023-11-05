import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import dateSwitcherLeft from '../../img/dateSwitcherLeft.png'
import dateSwitcherRight from '../../img/dateSwitcherRight.png'

import { getFullMonthName } from '../../constants/date'
import { StyledDateSwitcher } from './Styled'
import { getPeriodTransactionData } from '../../redux/auth/operations'

const DateSwitcher = () => {
  const dispatch = useDispatch()
  // eslint-disable-next-line no-unused-vars
  const [month, setMonth] = useState(new Date().getUTCMonth() + 1)
  // eslint-disable-next-line no-unused-vars
  const [year, setYear] = useState(new Date().getFullYear())
  if (month <= 0) {
    setMonth(12)
  }
  if (month > 12) {
    setMonth(1)
  }

  const handleChangeDate = (event) => {
    const switcherName = event.target.name

    switch (switcherName) {
      case 'switcherLeft':
        setMonth(month - 1)
        break
      case 'switcherRight':
        setMonth(month + 1)
        break

      default:
        break
    }
  }

  useEffect(() => {
    dispatch(
      getPeriodTransactionData(
        month < 10 ? `${year}-0${month}` : `${year}-${month}`
      )
    )
    // if (month < 10) {
    //   dispatch(getPeriodTransactionData(`${year}-0${month}`))
    // } else {
    //   dispatch(getPeriodTransactionData(`${year}-${month}`))
    // }
  }, [month, year])

  return (
    <StyledDateSwitcher>
      <span>Current period:</span>
      <div className='switcher'>
        <button type='button' onClick={handleChangeDate}>
          <img
            className='switcherLeft'
            name='switcherLeft'
            src={dateSwitcherLeft}
            alt='dateSwitcherLeft'
          />
        </button>
        <span className='switcherDate'>{`${getFullMonthName(
          month
        )} - ${year}`}</span>
        <button type='button' onClick={handleChangeDate}>
          <img
            className='switcherRight'
            name='switcherRight'
            src={dateSwitcherRight}
            alt='dateSwitcherRight'
          />
        </button>
      </div>
    </StyledDateSwitcher>
  )
}

export default DateSwitcher
