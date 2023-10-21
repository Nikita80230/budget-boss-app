import React from 'react'
import { StyledHeader, StyledLogo } from './Styled'
import logo from '../../img/BudgetLogo.png'
import coin from '../../img/coin.png'
import UserMenu from '../UserMenu/UserMenu'
// import StyledContainer from '../app/Styled'

const Header = () => (
  <StyledHeader>
    <StyledLogo>
      <img className='logo' src={logo} alt='logo' />
      <img className='logoCoin' src={coin} alt='coin' />
    </StyledLogo>
    <UserMenu />
  </StyledHeader>
)

export default Header
