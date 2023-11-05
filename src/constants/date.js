// date obj
// export const numberToMonthName = {
//   1: 'January',
//   2: 'February',
//   3: 'March',
//   4: 'April',
//   5: 'May',
//   6: 'June',
//   7: 'July',
//   8: 'August',
//   9: 'September',
//   10: 'October',
//   11: 'November',
//   12: 'December',
// }

export const monthsArray = [
  { monthName: 'January', monthNumber: 1 },
  { monthName: 'February', monthNumber: 2 },
  { monthName: 'March', monthNumber: 3 },
  { monthName: 'April', monthNumber: 4 },
  { monthName: 'May', monthNumber: 5 },
  { monthName: 'June', monthNumber: 6 },
  { monthName: 'July', monthNumber: 7 },
  { monthName: 'August', monthNumber: 8 },
  { monthName: 'September', monthNumber: 9 },
  { monthName: 'October', monthNumber: 10 },
  { monthName: 'November', monthNumber: 11 },
  { monthName: 'December', monthNumber: 12 },
]

export function getFullMonthName(monthNumber) {
  let monthName

  monthsArray.forEach((month) => {
    if (month.monthNumber === monthNumber) {
      monthName = month.monthName
    }
  })
  return monthName
}
