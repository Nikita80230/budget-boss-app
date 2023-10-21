import React from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from '../../redux/auth/operations'
import { StyledUserAuth } from './Styled'
// import { Link } from 'react-router-dom'

const UserMenu = () => {
  const dispatch = useDispatch()
  const handleLogOut = () => {
    dispatch(logOut())
  }
  return (
    <StyledUserAuth>
      <button className='userMenuBtn' type='button' name='openUserMenuBtn'>
        m
      </button>
      <span className='userName'>User Name</span>
      <button onClick={handleLogOut} className='userLogOutBtn' type='button'>
        Exit
      </button>
    </StyledUserAuth>
  )
}

export default UserMenu
