import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { routes } from '../../routes/routes'

const RestrictedRoute = ({ children, redirectTo = routes.INCOME }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  return isLoggedIn ? <Navigate to={redirectTo} replace /> : children
}

export default RestrictedRoute
