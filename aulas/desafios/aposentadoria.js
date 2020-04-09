// Cálculo de aposentadoria

const nome2 = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

const aposentadoriaM = sexo == "M" && contribuicao >= 35 && idade + contribuicao >= 95
const aposentadoriaF = sexo == "F" && contribuicao >= 30 && idade + contribuicao >= 85

if ( aposentadoriaF || aposentadoriaM) {
   console.log(`${nome2}, você pode se aposentar!`)
} else {
   console.log(`${nome2}, você ainda não pode se aposentar!`)
};