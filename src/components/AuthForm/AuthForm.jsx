import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { StyledBtnWrapper, StyledAuthForm } from './Styled'
import googleSymbol from '../../img/googleSymbol.png'
import { authWithGoogle, login, register } from '../../redux/auth/operations'

const AuthForm = () => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleRegister = () => {
    dispatch(register(formData))
  }
  const handleLogin = () => {
    dispatch(login(formData))
  }

  const handleGoogleAuth = () => {
    dispatch(authWithGoogle())
  }

  return (
    <StyledAuthForm>
      <div className='googleWrapper'>
        <p className='googleWrapper-topText'>
          You can log in with your Google Account:
        </p>
        <button
          className='googleWrapper-btn'
          type='button'
          onClick={handleGoogleAuth}
        >
          <img className='googleWrapper-img' src={googleSymbol} alt='' />
          Google
        </button>
        <p className='googleWrapper-bottomText'>
          Or log in using an email and password, after registering:
        </p>
      </div>
      <form className='authForm'>
        <label>
          <span className='labelText'>email</span>
          <input
            onChange={handleChange}
            type='text'
            placeholder='your@email.com'
            name='email'
            value={formData.email}
          />
        </label>
        <label>
          <span className='labelText'>password</span>
          <input
            onChange={handleChange}
            type='password'
            name='password'
            value={formData.password}
          />
        </label>
        <StyledBtnWrapper>
          <button onClick={handleLogin} className='login' type='button'>
            Log in
          </button>
          <button onClick={handleRegister} type='button'>
            Register
          </button>
        </StyledBtnWrapper>
      </form>
    </StyledAuthForm>
  )
}

export default AuthForm
