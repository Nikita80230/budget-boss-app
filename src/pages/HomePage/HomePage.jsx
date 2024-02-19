import React from 'react'
import homePageImg from '../../img/homePageImg.png'
import backgroundImgForTablet from '../../img/backgroundImgForTablet.png'
import { StyledHomePage } from './Styled'
import AuthForm from '../../components/AuthForm/AuthForm'
import { Container } from '../../components/Container/Container'

const HomePage = () => (
  <Container>
    <StyledHomePage>
      <img className='homePageImg' src={homePageImg} alt='wallet with money' />
      <img
        className='backgroundImgForTablet'
        src={backgroundImgForTablet}
        alt='wallet with money'
      />
      <AuthForm />
    </StyledHomePage>
  </Container>
)

export default HomePage
