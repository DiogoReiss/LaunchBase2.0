
function createTransaction(typeOfTransaction, value) {
   if(typeOfTransaction == "credit") {
      user.balance = user.balance + value
      user.transactions.credit.push(+value)
   } else {
      user.balance = user.balance - value
      user.transactions.debit.push(-value)
   }
   return user.balance
}

function getHigherTransactionByType(typeOfTransaction) {
   var higherTransaction
   var higherValue = 0
   
   if ( typeOfTransaction === 'debit') {   
      for(let transaction of user.transactions.debit) {
         if (transaction < higherValue) {
            higherValue = transaction
            higherTransaction = transaction
         }   
      }
   } else {
      for(let transaction of user.transactions.credit) {
         if (transaction > higherValue) {
            higherValue = transaction
            higherTransaction = transaction
         }
      }
   }

   return higherTransaction
}

function getAverageTransactionValue(user) {
   let debitvalue = 0
   let creditvalue = 0
 

   for ( let numbers of user.transactions.debit) {
      debitvalue = numbers + debitvalue
   }
   
   for ( let numbers of user.transactions.credit) {
      creditvalue = numbers + creditvalue
   }
   
   return (creditvalue - debitvalue) / (user.transactions.debit.length + user.transactions.credit.length)
} 

function getTransactionsCount(user) {
   let count = {
      credit: user.transactions.credit.length,
      debit: user.transactions.debit.length
   }

   return count
}

const user = {
   name: "Mariana",
   transactions: {
      credit: [],
      debit: []
   },
   balance: 0
}
createTransaction("credit", 50)
createTransaction("credit", 120)
createTransaction("debit", 80)
createTransaction("debit", 30)
console.log(user.balance)
console.log(getHigherTransactionByType('debit'))
console.log(getHigherTransactionByType('credit'))
console.log(getAverageTransactionValue(user))
console.log(getTransactionsCount(user))