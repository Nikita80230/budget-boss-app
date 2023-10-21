import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { routes } from '../../routes/routes'

const ProtectedRoute = ({ children, redirectTo = routes.HOME }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  return isLoggedIn ? children : <Navigate to={redirectTo} replace />
}

export default ProtectedRoute
