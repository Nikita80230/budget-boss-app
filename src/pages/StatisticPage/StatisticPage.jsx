import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Balance from '../../components/Balance/Balance'
import { routes } from '../../routes/routes'
import DateSwitcher from '../../components/DateSwitcher/DateSwitcher'
import { StyledStatisticPage } from './Styled'
import TransactionsSummary from '../../components/TransactionsSummary/TransactionsSummary'
import CategoriesList from '../../components/CategoriesList/CategoriesList'
import Statistics from '../../components/Statistics/Statistics'
import { Container } from '../../components/Container/Container'
import { selectTransactions } from '../../redux/auth/authSlice'

import mainMenuArrow from '../../img/mainMenuArrow.png'

const StatisticPage = () => {
  const transactions = useSelector(selectTransactions)

  return (
    <Container>
      <StyledStatisticPage>
        <div className='topWrapper'>
          <Link className='mainPageLink' to={routes.HOME}>
            <img src={mainMenuArrow} alt='' />
            <span>Main Page</span>
          </Link>
          <Balance className='balance' />
          <DateSwitcher />
        </div>
        <TransactionsSummary transactions={transactions} />
        <CategoriesList />
        <Statistics />
      </StyledStatisticPage>
    </Container>
  )
}

export default StatisticPage
