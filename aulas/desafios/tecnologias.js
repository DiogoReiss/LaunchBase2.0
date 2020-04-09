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
]

for (let i = 0; i < usuarios.length; i++) {
   console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias.join(', ')}`)
}

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