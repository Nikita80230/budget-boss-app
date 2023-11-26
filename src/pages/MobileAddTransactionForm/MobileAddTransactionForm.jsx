import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { Link, Navigate, useLocation } from 'react-router-dom'

import { ReactComponent as IconArrowLeft } from '../../img/arrow-left.svg'

import { routes } from '../../routes/routes'
import {
  selectExpenseCategories,
  selectIncomeCategories,
} from '../../redux/auth/authSlice'

import MobileFormContainer from '../../components/MobileFormContainer/MobileFormContainer'

import { StyledMobileAddTransactionLink } from './Styled'

const MobileAddTransactionForm = () => {
  const location = useLocation()
  const backLinkHref = useRef(location.state?.from ?? routes.INCOME)
  const expenseCategoriesList = useSelector(selectExpenseCategories)
  const incomeCategoriesList = useSelector(selectIncomeCategories)

  const categories =
    location.state?.from === routes.EXPENSES
      ? expenseCategoriesList
      : incomeCategoriesList

  if (!location.state?.from) {
    return <Navigate to={routes.INCOME} replace />
  }

  return (
    <StyledMobileAddTransactionLink>
      <Link className='backLink' to={backLinkHref.current}>
        <IconArrowLeft />
        <span className='linkText'>to transaction</span>
      </Link>
      <MobileFormContainer categoriesList={categories} />
    </StyledMobileAddTransactionLink>
  )
}

export default MobileAddTransactionForm
