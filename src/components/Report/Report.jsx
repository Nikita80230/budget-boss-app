import React from 'react'
import { StyledReports } from './Styled'
import reportImg from '../../img/reportImg.png'

const Report = () => (
  <StyledReports>
    <span className='reportText'>Reports</span>
    <img className='reportImg' src={reportImg} alt='reports' />
  </StyledReports>
)

export default Report
