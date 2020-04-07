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