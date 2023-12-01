import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useMediaQuery } from 'react-responsive'
import { logOut } from '../../redux/auth/operations'
import { selectEmail } from '../../redux/auth/authSlice'

import { ReactComponent as Logout } from '../../img/logoutIcon.svg'

import { StyledUserAuth } from './Styled'
import Modal from '../Modal/Modal'
// import { Link } from 'react-router-dom'

const UserMenu = () => {
  const userEmail = useSelector(selectEmail)
  const dispatch = useDispatch()
  const isMobile = useMediaQuery({ query: '(max-width: 564px)' })

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleLogOut = () => {
    dispatch(logOut())
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <StyledUserAuth>
      <button className='userMenuBtn' type='button' name='openUserMenuBtn'>
        {userEmail.slice(0, 1)}
      </button>
      {!isMobile && <span className='userName'>{userEmail}</span>}
      <button onClick={handleOpenModal} className='userLogOutBtn' type='button'>
        {isMobile ? <Logout /> : 'Exit'}
      </button>
      {isModalOpen && (
        <Modal
          onOk={handleLogOut}
          onCancel={handleCancel}
          text='Do you really want to leave?'
        />
      )}
    </StyledUserAuth>
  )
}

export default UserMenu
