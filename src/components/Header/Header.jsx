import React from 'react'
import { useSelector } from 'react-redux'
import { StyledHeader, StyledLogo } from './Styled'
import logo from '../../img/BudgetLogo.png'
import coin from '../../img/coin.png'
import UserMenu from '../UserMenu/UserMenu'
import { selectIsLoggedIn } from '../../redux/auth/authSlice'
// import StyledContainer from '../app/Styled'

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)

  return (
    <StyledHeader>
      <StyledLogo>
        <img className='logo' src={logo} alt='logo' />
        <img className='logoCoin' src={coin} alt='coin' />
      </StyledLogo>
      {isLoggedIn && <UserMenu />}
    </StyledHeader>
  )
}

export default Header
