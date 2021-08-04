// Vetor
let carros = ['Celta', 'Uno', 'Gol']

// Desestruturação total do vetor
let [a, b, c] = carros

console.log (a)
console.log (b)
console.log (c)

// Pular linha no console
console.log ('----------------------------------------')

// Desestruturação parcial
let [m,n] = carros
console.log (m)
console.log (n)
console.log ('----------------------------------------')
let [x, ,z] = carros
console.log (x)
console.log (z)
console.log ('----------------------------------------')
let [ ,i,j] = carros
console.log (i)
console.log (j)

console.log (carros)
console.log ('----------------------------------------')

// A desestruturação também pode acontecer com objetos
let veiculo = {
    marca: 'Volkswagen',
    modelo: 'Fusca',
    cor: 'Preto',
    ano: 1969
}
// A ordem é muito importante na desestruturação do vetor mas já na desestruturação do obejeto tem 2 regras
// 1º regra: as variáveis devem ter o mesmo nome das propriedades 
// 2º regra: a ordem não importa

// Desestruturação total de um objeto
let {cor, modelo, ano, marca} = veiculo
console.log({marca}) //reconstitui o objeto de novo { }
console.log(modelo)
console.log(cor)
console.log(ano)

// Para fazer a desestruturação parcial, basta criar variáveis correspondentes às propriedades de interesse.
// EX: let {modelo, marca}
// console.log (modelo)
// console.log (marca)


