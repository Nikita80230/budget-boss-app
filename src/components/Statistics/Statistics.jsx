import React from 'react'
import { Bar } from 'react-chartjs-2'
import { useSelector } from 'react-redux'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

import { StyledStatistics } from './Styled'
import {
  selectPeriodTransactionsData,
  selectSelectedCategoryForDetails,
} from '../../redux/auth/authSlice'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: 'top',
      labels: {
        // This more specific font property overrides the global property
        fontSize: 34,
        fontColor: '#fff',
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: '#fff',
        font: {
          size: 12,
          lineHeight: 1.2,
        },
      },
    },
    y: {
      borderRadius: 12,
      ticks: {
        color: '#fff',
        font: {
          size: 12,
          lineHeight: 1.2,
        },
      },
    },
  },
  elements: {
    bar: {
      borderRadius: 8,
    },
  },
}

const Statistics = () => {
  const periodTransactionsData = useSelector(selectPeriodTransactionsData)
  const selectedCategoryForDetails = useSelector(
    selectSelectedCategoryForDetails
  )

  const expenses = periodTransactionsData?.expenses?.expensesData
  const incomes = periodTransactionsData?.incomes?.incomesData

  const allTransactions =
    incomes === undefined || expenses === undefined
      ? []
      : [...Object.entries(incomes), ...Object.entries(expenses)]

  const {
    total,
    ...restTransactionData
  } = // { total: 200, meat: 100, soup: 100 }
    allTransactions?.find(
      ([category]) => category === selectedCategoryForDetails
    )?.[1] ?? []

  const filteredTransactionData = Object.entries({
    ...restTransactionData,
  }).sort((a, b) => b[1] - a[1]) // { meat: 100, soup: 100, rice: 234 }
  const labels = filteredTransactionData.map((item) => item[0])
  const values = filteredTransactionData.map((item) => item[1])

  const data = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: values.map((_, index) =>
          index === 0 || index % 3 === 0 ? '#60C470' : '#5B5B6D'
        ),
      },
    ],
  }

  return (
    <StyledStatistics>
      <Bar options={options} data={data} />
    </StyledStatistics>
  )
}

export default Statistics
