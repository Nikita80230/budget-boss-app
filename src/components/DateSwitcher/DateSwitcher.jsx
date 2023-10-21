import React from 'react'
import dateSwitcherLeft from '../../img/dateSwitcherLeft.png'
import dateSwitcherRight from '../../img/dateSwitcherRight.png'

import { StyledDateSwitcher } from './Styled'

const DateSwitcher = () => (
  <StyledDateSwitcher>
    <span>Current period:</span>
    <div className='switcher'>
      <img
        className='switcherLeft'
        src={dateSwitcherLeft}
        alt='dateSwitcherLeft'
      />
      <span className='switcherDate'>November 2023</span>
      <img
        className='switcherRight'
        src={dateSwitcherRight}
        alt='dateSwitcherRight'
      />
    </div>
  </StyledDateSwitcher>
)

export default DateSwitcher
