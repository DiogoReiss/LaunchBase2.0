/*
const aluno = 'Diogo'
const na1 = 13.5
const na2 = 14.7
const na3 = 15.9

var media = (na1 + na2 + na3) / 3

// se a media for maior que 10 o aluno está aprovado!
// se a média for menor que 10 o aluno está reprovado!

if (media >= 10) {
   console.log(`Parabéns ${aluno}, sua nota é igual à ${media}, você está aprovado!`)
} else {
   console.log(`Caro aluno ${aluno}, sua media foi de ${media}, infelizmente você esta reprovado, boa sorte!`)
};
*/
/*
// Cálculo de IMC 

const nome = "Carlos";
const peso = 84;
const altura = 1.88;

// lógica IMC -> peso / (altura * altura) = IMC
var imc = peso/(altura*altura)
if (imc >= 30) {
   console.log(`${nome}, você está acima do peso ideal!`)
} else {
   console.log(`${nome}, você não está acima do peso ideal, continue assim!`)
}
*/
/*
// Cálculo de aposentadoria

const nome2 = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

// DUAS REGRAS DE NEGOCIO -> contri >= 35M ou 30F;
// idadeM + contri >= 95; idadeF + contri >= 85

const aposentadoriaM = sexo == "M" && contribuicao >= 35 && idade + contribuicao >= 95
const aposentadoriaF = sexo == "F" && contribuicao >= 30 && idade + contribuicao >= 85

if ( aposentadoriaF || aposentadoriaM) {
   console.log(`${nome2}, você pode se aposentar!`)
} else {
   console.log(`${nome2}, você ainda não pode se aposentar!`)
};
*/
/*
const empresa = {
   nome: "Rocketseat",
   cor: "Roxo",
   foco: "Programação",
   endereço: {
      rua: "Rua Guilherme Gembala",
      numero: 260,
   }
};
console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereço.rua}, ${empresa.endereço.numero}`);

const programador = {
   nome: "Diogo Reis",
   idade: 17,
   tecnologias: [
      {
         nomeT: "Python",
         especialidade: "back-end"
      },
      {
         nomeT2: "JavaScript",
         especialidade2: "Web/Mobile"
      }
   ],
};

console.log(`O programador ${programador.nome} tem ${+programador.idade} anos e usa a tecnologia ${programador.tecnologias[1].nomeT2} com a especialidade em ${programador.tecnologias[1].especialidade2}.`)
*/
/*
 const usuarios = [
   { nome: "Carlos",
      tecnologias: ["HTML", "CSS"]
   },
   { nome: "Jasmine", 
     tecnologias: ["JavaScript", "CSS"]
   },
   { nome: "Diogo",
     tecnologias:["Python", "JavaScript"]
   }
];

for (let i = 0; i < usuarios.length; i++) {
   console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias.join(', ')}`)
};

function checkCSS(usuario) {
   for ( let tecnologia of usuario.tecnologias) {
      if (tecnologia == 'CSS') return true
   }
   return false
}

for ( let i = 0; i < usuarios.length; i++) {
   const usuarioTrabalhaComCSS = checkCSS(usuarios[i]);

   if (usuarioTrabalhaComCSS) {
      console.log(`O usuário ${usuarios[i].nome} trabalha com CSS!`)
   } else {
      console.log(`O usuário ${usuarios[i].nome} não trabalha com CSS!`)
   }
}
*/
// Soma de despesas e receitas 
/*
const usuarios = [
   {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.4, 13.5, 19.9]
   },
   {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
   },
   {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
   }
];

function calculaSaldo( receitas, despesas ) {
   const somaReceitas = somaNumeros(receitas)
   const somaDespesas = somaNumeros(despesas)

   return somaReceitas - somaDespesas
}

function somaNumeros(numeros) {
   let soma = 0

   for (let numero of numeros) {
      soma = soma + numero
   }
   return soma
}

for (let usuario of usuarios) {
   const saldo = calculaSaldo(usuario.receitas, usuario.despesas)

   if (saldo > 0) {
      console.log(`${usuario.nome} possui saldo POSITIVO de R$${saldo.toFixed(2)}`)
   } else {
      console.log(`${usuario.nome} possui saldo NEGATIVO de R$${saldo.toFixed(2)}`)
   }
}
*/
// Operações bancárias 

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
   //console.log(debitvalue)
   for ( let numbers of user.transactions.credit) {
      creditvalue = numbers + creditvalue
   }
   //console.log(creditvalue)

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