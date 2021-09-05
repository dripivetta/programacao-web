const frutas = ['banana','maça','uva','pera','mamão','morango','laranja']

// Gere um novo vetor que contenha todos os elementos do vetor frutas, mas
// em MAIÚSCULAS

let frutas2 = []
for (let f of frutas){
    frutas2.push(f.toUpperCase())
}
console.log(frutas2)

let frutas3 = frutas.map(elemento => elemento.toUpperCase())
console.log (frutas3)