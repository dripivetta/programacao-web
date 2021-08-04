/*
let infoUsuario = {
    usuario: 'Jucicleison',
    nomeCompleto: 'Jucicleison da Silva Souza',
    grupo: 'alunos',
    senha: '12345678'
}
*/

let usuario = 'Jucicleison'
let nome = 'Jucicleison da Silva Souza'
let grupo = 'alunos'
let password = '12345678'

let infoUsuario = {
    usuario, // quando a variável possui o mesmo nome do objeto não precisa repetir
    nomeCompleto: nome,
    grupo: grupo, // não precisa repitir desta forma (usar somente: grupo,)
    senha: password
}

console.log (infoUsuario)

// Exibindo o conteúdo da vairável 'password' e 'grupo' para fins de depuração
console.log ({password})
console.log ({grupo})
console.log ({password, grupo})