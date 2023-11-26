import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../redux/auth/operations'
import { StyledUserAuth } from './Styled'
import { selectEmail } from '../../redux/auth/authSlice'
// import { Link } from 'react-router-dom'

const UserMenu = () => {
  const userEmail = useSelector(selectEmail)
  const dispatch = useDispatch()
  const handleLogOut = () => {
    dispatch(logOut())
  }
  return (
    <StyledUserAuth>
      <button className='userMenuBtn' type='button' name='openUserMenuBtn'>
        {userEmail.slice(0, 1)}
      </button>
      <span className='userName'>{userEmail}</span>
      <button onClick={handleLogOut} className='userLogOutBtn' type='button'>
        Exit
      </button>
    </StyledUserAuth>
  )
}

export default UserMenu
