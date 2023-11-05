import { useSelector } from 'react-redux'
import { selectPeriodTransactionsData } from '../../redux/auth/authSlice'
import { StyledTransactionsSummary } from './Styled'

const TransactionsSummary = () => {
  const transactionsPeriodData = useSelector(selectPeriodTransactionsData)

  // let expenseTransaction = 0
  // let incomeTransaction = 0

  // transactions.forEach((transaction) => {
  //   if (
  //     transaction.category !== 'Salary' &&
  //     transaction.category !== 'Additional income'
  //   ) {
  //     expenseTransaction += transaction.amount
  //   }
  //   incomeTransaction += transaction.amount
  // })

  return (
    <StyledTransactionsSummary>
      <div className='expenses'>
        <span className='expensesText text'>Expenses</span>
        <span className='expensesValue'>
          -{transactionsPeriodData?.expenses?.expenseTotal} UAH
        </span>
      </div>
      <div className='income'>
        <span className='incomeText text'>Income</span>
        <span className='incomeValue'>
          +{transactionsPeriodData?.incomes?.incomeTotal} UAH
        </span>
      </div>
    </StyledTransactionsSummary>
  )
}

export default TransactionsSummary

// const transactions = useSelector(selectTransactions)

// const [expenseTransactionsSum, setExpenseTransactionsSum] = useState(1)
// const [incomeTransactionsSum, setIncomeTransactionsSum] = useState(1)
// // const expensesTransactions = []
// // const incomeTransactions = []

// transactions.filter(
//   // eslint-disable-next-line array-callback-return
//   (transaction) => {
//     if (
//       transaction.category !== 'Salary' &&
//       transaction.category !== 'Additional income'
//     ) {
//       setExpenseTransactionsSum(expenseTransactionsSum + transaction.amount)
//     }

//     setIncomeTransactionsSum(incomeTransactionsSum + transaction.amount)
//   }
// )
//

//  const [expenseTransactions, setExpenseTransactions] = useState([])
//  const [incomeTransactions, setIncomeTransactions] = useState([])

//  // eslint-disable-next-line array-callback-return
//  transactions.filter((transaction) => {
//    if (
//      transaction.category !== 'Salary' &&
//      transaction.category !== 'Additional income'
//    ) {
//      setExpenseTransactions(...expenseTransactions, transaction)
//    }
//    setIncomeTransactions(...incomeTransactions, transaction)
//  })
