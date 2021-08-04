let nota = 7.3
let situacao 
/* if (nota >=6){
    situacao = 'APROVADO'
}
else {
    situacao = 'REPROVADO'
}*/

// Usando o operador ternário
// Condição (nota mais ou igual a 6)
// Depois condição ponto de interrogação ( ? )
// Resultado se verdadeiro
// : Resultado se falso
// Ternário porque primeiro tem a condição, depois tem se é verdadeiro, depois se é falso
// Requisito para usar, se pode colocar na mesma linha duas resposta
situacao = nota >=6 ? 'APROVADO' : 'REPROVADO'

console.log (`Nota ${nota}, situação: ${situacao}.`)

let user = 'guest'
let msg = user === 'admin' ? 'Pode logar' : 'Não pode logar' // criar a variável e já dar o valor condicional
console.log (msg)