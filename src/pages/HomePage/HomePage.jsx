import React from 'react'
import homePageImg from '../../img/homePageImg.png'
import {
  StyledHomePage,
  StyledHomePageContainer,
  StyledHomePageImg,
} from './Styled'
// import StyledContainer from '../../components/app/Styled'
import AuthForm from '../../components/AuthForm/AuthForm'

const HomePage = () => (
  <StyledHomePage>
    {/* <StyledContainer> */}
    <StyledHomePageContainer>
      <StyledHomePageImg>
        <img src={homePageImg} alt='' />
      </StyledHomePageImg>
      <AuthForm />
    </StyledHomePageContainer>
    {/* </StyledContainer> */}
  </StyledHomePage>
)

export default HomePage
