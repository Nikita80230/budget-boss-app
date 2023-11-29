import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useMediaQuery } from 'react-responsive'
import { logOut } from '../../redux/auth/operations'
import { selectEmail } from '../../redux/auth/authSlice'

import { ReactComponent as Logout } from '../../img/logoutIcon.svg'

import { StyledUserAuth } from './Styled'
// import { Link } from 'react-router-dom'

const UserMenu = () => {
  const userEmail = useSelector(selectEmail)
  const dispatch = useDispatch()
  const isMobile = useMediaQuery({ query: '(max-width: 564px)' })

  const handleLogOut = () => {
    dispatch(logOut())
  }
  return (
    <StyledUserAuth>
      <button className='userMenuBtn' type='button' name='openUserMenuBtn'>
        {userEmail.slice(0, 1)}
      </button>
      {!isMobile && <span className='userName'>{userEmail}</span>}
      <button onClick={handleLogOut} className='userLogOutBtn' type='button'>
        {isMobile ? <Logout /> : 'Exit'}
      </button>
    </StyledUserAuth>
  )
}

export default UserMenu
