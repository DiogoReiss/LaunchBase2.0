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