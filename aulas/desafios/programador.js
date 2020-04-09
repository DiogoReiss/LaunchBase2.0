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