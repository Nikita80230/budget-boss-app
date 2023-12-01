import React from 'react'
import { createPortal } from 'react-dom'

import { ReactComponent as CloseModalBtn } from '../../img/closeModalIcon.svg'

import { StyledModal } from './Styled'

const Modal = ({ text, onOk, onCancel }) => {
  const handleOverlayClick = (event) => {
    if (event.currentTarget === event.target) {
      onCancel()
    }
  }
  return createPortal(
    <StyledModal onClick={handleOverlayClick}>
      <div className='modal'>
        <button type='button' className='closeBtn' onClick={onCancel}>
          <CloseModalBtn />
        </button>
        <p className='text'>{text}</p>
        <div className='buttonsWrapper'>
          <button type='button' className='btn acceptBtn' onClick={onOk}>
            Yes
          </button>
          <button type='button' className='btn cancelBtn' onClick={onCancel}>
            No
          </button>
        </div>
      </div>
    </StyledModal>,
    document.querySelector('#portal')
  )
}

export default Modal
