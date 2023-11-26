import React, { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { StyledIncomeMobilePage } from './Styled'
import { routes } from '../../routes/routes'

const IncomeMobilePage = () => {
  const location = useLocation()
  const backLinkHref = useRef(location.state ?? routes.HOME)
  console.log(backLinkHref)

  return (
    <StyledIncomeMobilePage>
      <Link to={backLinkHref.current}>To transactions</Link>
      IncomeMobilePage
    </StyledIncomeMobilePage>
  )
}

export default IncomeMobilePage
