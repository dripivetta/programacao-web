// Função tradicional com 1 parâmetro e 1 linha de código no corpo, com return
function quadrado (x){
    return x*x
}
console.log(quadrado(9))
// Arrow function equivalente
// 1) A função deve ser atribuída a uma variável (ou, melhor, a uma constante)
// 2) Desaparece a palavra-chave 'function'
// 3) Desaparecem os parênteses em torno do parâmetro
// 4) Após o parâmetro, aparece o símbolo => (flecha, arrow)
// 5) Desaparecem as chaves em torno do corpo da função
// 6) Desaparece a palavra-chave 'return'
const quadrado2 = x => x*x
console.log(quadrado2(9))

console.log('----------------------------')

// Função tradicional com 2 argumentos, e 1 linha de corpo com return
function potencia (base, expoente){
    return base ** expoente
}
console.log (potencia(3, 4))
// Arrow function equivalente
// Retornam os parênteses em torno dos argumentos
let potencia2 = (base, expoente) => base ** expoente
console.log(potencia2(3, 4))

console.log('----------------------------')

// Função tradicional sem parâmetro, 1 linha de corpo com return
function horaAtual (){
    return new Date ()
}
console.log (horaAtual())
// Arrow fuction correspondente
// Os parênteses vazios marcam a posição do argumento
const horaAtual2 = () => new Date ()
console.log (horaAtual2().toLocaleString('pt-br', {timeZone: 'America/Sao_Paulo'})) // ao inves de pegar o
// horário do servidor pega o horário local
// se colocar somente .toLocaleDateString vai pegar somente a Data do Brasil
console.log('----------------------------')

// Função tradicional com 1 parâmetro e múltiplas linhas de corpo
function fatorial (n){
    let res = 1
    for (let i = n; i > 1; i--) res *= i
    return res
}
console.log(fatorial(5))
// Arrow function correspondente
// Retornam as chaves do corpo da função
const fatorial2 = n => {
    let res = 1
    for (let i = n; i > 1; i--) res *= i
    return res
}
console.log(fatorial2(5))
// Arrow function fatorial recursivo
const fatorial3 = n => (n <= 1 ? 1 : n*fatorial3 (n-1))
console.log(fatorial3(5))