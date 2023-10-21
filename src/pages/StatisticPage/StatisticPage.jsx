import React from 'react'
import { Link } from 'react-router-dom'
import Balance from '../../components/Balance/Balance'
import { routes } from '../../routes/routes'
import DateSwitcher from '../../components/DateSwitcher/DateSwitcher'
import { StyledStatisticPage } from './Styled'
import TransactionsSummary from '../../components/TransactionsSummary/TransactionsSummary'
import CategoriesList from '../../components/CategoriesList/CategoriesList'
import Statistics from '../../components/Statistics/Statistics'
import { Container } from '../../components/Container/Container'
import mainMenuArrow from '../../img/mainMenuArrow.png'

const StatisticPage = () => (
  <Container>
    <StyledStatisticPage>
      <div className='topWrapper'>
        <Link className='mainPageLink' to={routes.HOME}>
          <img src={mainMenuArrow} alt='' />
          <span>Main Page</span>
        </Link>
        <Balance />
        <DateSwitcher />
      </div>
      <TransactionsSummary />
      <CategoriesList />
      <Statistics />
    </StyledStatisticPage>
  </Container>
)

export default StatisticPage
