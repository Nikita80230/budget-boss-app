import React from 'react'
// import { useDispatch } from 'react-redux'

import { useSelector } from 'react-redux'
import { selectTransactions } from '../../redux/auth/authSlice'

import { monthsArray } from '../../constants/date'

import { StyledSummaryTable } from './Styled'

const SummaryTable = () => {
  const transactions = useSelector(selectTransactions)
  return (
    // const dispatch = useDispatch()
    <StyledSummaryTable>
      <div className='summaryTable'>
        <div className='summaryTableHead'>
          <div className='summaryTableHeadBox'>Summary</div>
        </div>
        <div className='summaryTableBody'>
          {monthsArray.map(({ monthName, monthNumber }) => {
            let monthSum = 0

            transactions.forEach((transaction) => {
              // "2023-10-27" -> ['2023', '10', '27']
              // 01 - 2bit
              // 0123456789 - 10bit
              // 0123456789ABCDEF - 16bit

              const formattedMonth = Number.parseInt(
                transaction.date.split('-')[1],
                10
              )
              if (formattedMonth === monthNumber) {
                monthSum += transaction.amount
              }
            })

            return (
              monthSum !== 0 && (
                <div className='summaryTableBodyRow'>
                  <div className='summaryTableBodyBox date'>{monthName}</div>
                  <div className='summaryTableBodyBox sum'>{monthSum}</div>
                </div>
              )
            )
          })}
          {/* <div className='summaryTableBodyRow'>
            <div className='summaryTableBodyBox date'>October</div>
            <div className='summaryTableBodyBox sum'>1000000</div>
          </div>
          <div className='summaryTableBodyRow'>
            <div className='summaryTableBodyBox date'>October</div>
            <div className='summaryTableBodyBox sum'>1000000</div>
          </div>
          <div className='summaryTableBodyRow'>
            <div className='summaryTableBodyBox date'>October</div>
            <div className='summaryTableBodyBox sum'>1000000</div>
          </div>
          <div className='summaryTableBodyRow'>
            <div className='summaryTableBodyBox date'>October</div>
            <div className='summaryTableBodyBox sum'>1000000</div>
          </div>
          <div className='summaryTableBodyRow'>
            <div className='summaryTableBodyBox date'>October</div>
            <div className='summaryTableBodyBox sum'>1000000</div>
          </div>
          <div className='summaryTableBodyRow'>
            <div className='summaryTableBodyBox date'>October</div>
            <div className='summaryTableBodyBox sum'>1000000</div>
          </div>
          <div className='summaryTableBodyRow'>
            <div className='summaryTableBodyBox date'>October</div>
            <div className='summaryTableBodyBox sum'>1000000</div>
          </div>
          <div className='summaryTableBodyRow'>
            <div className='summaryTableBodyBox date'>October</div>
            <div className='summaryTableBodyBox sum'>1000000</div>
          </div>
          <div className='summaryTableBodyRow'>
            <div className='summaryTableBodyBox date'>October</div>
            <div className='summaryTableBodyBox sum'>1000000</div>
          </div>
          <div className='summaryTableBodyRow'>
            <div className='summaryTableBodyBox date'>October</div>
            <div className='summaryTableBodyBox sum'>1000000</div>
          </div>
          <div className='summaryTableBodyRow'>
            <div className='summaryTableBodyBox date'>October</div>
            <div className='summaryTableBodyBox sum'>1000000</div>
          </div>
          <div className='summaryTableBodyRow'>
            <div className='summaryTableBodyBox date'>October</div>
            <div className='summaryTableBodyBox sum'>1000000</div>
          </div>
          <div className='summaryTableBodyRow'>
            <div className='summaryTableBodyBox date'>October</div>
            <div className='summaryTableBodyBox sum'>1000000</div>
          </div> */}
        </div>
      </div>
    </StyledSummaryTable>
  )
}

export default SummaryTable
