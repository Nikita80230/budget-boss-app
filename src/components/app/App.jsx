import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Header from '../Header/Header'
import HomePage from '../../pages/HomePage/HomePage'
import { routes } from '../../routes/routes'
import IncomePage from '../../pages/IncomePage/IncomePage'
import ExpensesPage from '../../pages/ExpensesPage/ExpensesPage'
import StatisticPage from '../../pages/StatisticPage/StatisticPage'
import NotFound from '../../pages/NotFound/NotFound'
import { DashboardLayout } from '../DashboardLayout/DashboardLayout'
import { StyledApp } from './Styled'
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import { refreshUser } from '../../redux/auth/operations'
// import StyledContainer from './Styled'

// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: ${(props) => props.theme.colors.primary};
//   background-color: #bf4f74;
//   @media (max-width: ${breakpoint('lg')}) {
//     color: ${(props) => props.theme.colors.secondary};
//     background-color: ${(props) => props.theme.colors.accentGreen};
//   }
// `

export const appRoutes = [
  {
    path: routes.HOME,
    element: (
      <RestrictedRoute>
        <HomePage />
      </RestrictedRoute>
    ),
  },
  {
    path: routes.INCOME,
    element: (
      <ProtectedRoute>
        <DashboardLayout>
          <IncomePage />
        </DashboardLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: routes.EXPENSES,
    element: (
      <ProtectedRoute>
        <DashboardLayout>
          <ExpensesPage />
        </DashboardLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: routes.STATISTICS,
    element: (
      <ProtectedRoute>
        <StatisticPage />
      </ProtectedRoute>
    ),
  },
  {
    path: routes.NOTFOUND,
    element: <NotFound />,
  },
]

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return (
    <StyledApp>
      <Header />
      <main>
        <Routes>
          {appRoutes.map((route) => (
            <Route path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>

      {/* <Title>hello</Title> */}
    </StyledApp>
  )
}

export default App
