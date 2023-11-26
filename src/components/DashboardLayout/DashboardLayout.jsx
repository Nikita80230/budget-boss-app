import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import AddNewTransactionButton from '../AddNewTransactionButton/AddNewTransactionButton'
import Balance from '../Balance/Balance'
import Report from '../Report/Report'
import { routes } from '../../routes/routes'
import { StyledDashboardLayout } from './Styled'

export const DashboardLayout = ({ children }) => {
  const location = useLocation()
  const isMobile = useMediaQuery({ query: '(max-width: 564px)' })

  // const addTransactionPath =
  //   location.pathname === '/income'
  //     ? routes.INCOME_MOBILE
  //     : routes.EXPENSES_MOBILE

  return (
    <StyledDashboardLayout>
      <div className='dashboardNavigation'>
        <Balance />
        <Link className='reportLink' to={routes.STATISTICS}>
          <Report />
        </Link>
        {isMobile && (
          <Link
            to={routes.MOBILE_ADD_TRANSACTION_FORM}
            state={{ from: location.pathname }}
          >
            <AddNewTransactionButton />
          </Link>
        )}
      </div>
      <div className='dashboardLinks'>
        <NavLink className='dashboardLink' to={routes.INCOME}>
          Income
        </NavLink>
        <NavLink className='dashboardLink' to={routes.EXPENSES}>
          Expenses
        </NavLink>
      </div>
      <div className='dashboard'>{children}</div>
    </StyledDashboardLayout>
  )
}

// export default DashboardLayout
