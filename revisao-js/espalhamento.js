let minimo = Math.min(15, 7, -8, 14, 0, 9, 18)
let maximo = Math.max(15, 7, -8, 14, 0, 9, 18)

console.log ({minimo, maximo})

// Usando a sintaxe de espalhamento para transformar um vetor em elementos "soltos"
let numeros = [15, 7, -8, 14, 0, 9, 18]
minimo = Math.min(...numeros)
maximo = Math.max(...numeros)
console.log ({minimo, maximo})

let carro1 = {
    marca: 'Chevrolet',
    modelo: 'Opala',
    ano: 1983,
    cor: 'verde'
}

// Criando o objeto carro2, a partir de carro1
// let carro2 = carro1 // dessa forma não funciona porque sobrepõe o objeto criado anteriormente
// Para isso usamos o espalhamento
let carro2 = {...carro1}

carro2.modelo = 'Chevette'
carro2.cor = 'Bege'

console.log (carro1)
console.log (carro2)

let soma1 = somaTudo (12,1,6,11,4,2,10,3,5,13,5)
let soma2 = somaTudo (121,103,144,153)

// A sintaxe de espalhamento também é usada para receber um número arbitrário de argumentos
// dentro de um único parâmetro. Dentro desta função, esse parâmetro se comporta como um vetor.
// Esse argumento especial recebe o nome de ARGUMENTO DE RESTO.
function somaTudo (...nums){
    let result = 0
    for (let n of nums) result += n
    return result
}
console.log (soma1, soma2)

// Outro exemplo
// Assinatura de uma função é representada pela quantidade e tipo de seus argumentos e 
// pelo tipo do seu valor de retorno
// oper é um argumento obrigatório comum e nums é um argumento de resto
let resultado1 = calcular ('+', 10, 20, 30, 40, 50)
let resultado2 = calcular ('*', 10, 20, 30, 40, 50)
function calcular (oper, ...nums){
    let res
    switch (oper){
        case '+':
            res = 0
            for (let i of nums) res += i
            break
        case '*':
            res = 1
            for (let i of nums) res *= i
    }
    return res
}
console.log ({resultado1})
console.log ({resultado2})

let legumes = ['batata', 'cenoura', 'abobrinha']
let frutas = ['maçã', 'banana', 'laranja', 'pera']
let hortfruti = [...legumes, ...frutas]
console.log ({hortfruti})
// Para colocar em ordem alfabética
hortfruti.sort ((a, b) => {
    if (a == b) return 0
    else if (a > b) return 1 // se colocar (a < b) tem a ordem alfabética ao contrário
    else return -1
})
console.log ({hortfruti})