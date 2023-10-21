import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { StyledDashboardLayout } from './Styled'
import Balance from '../Balance/Balance'
import Report from '../Report/Report'
import { routes } from '../../routes/routes'

export const DashboardLayout = ({ children }) => (
  <StyledDashboardLayout>
    <div className='dashboardNavigation'>
      <Balance />
      <Link className='reportLink' to={routes.STATISTICS}>
        <Report />
      </Link>
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

// export default DashboardLayout
