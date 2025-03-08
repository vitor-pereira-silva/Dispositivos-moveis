
//Ex 1


function MAIUSCULA(nome) {
  nome.toUpperCase()
  console.log(nome)


}

function minuscula(nome) {

  nome.toLowerCase()
  console.log(nome)



}


function inverter(nome) {
  nome.split('').reverse().join()
  console.log(nome)


}

MAIUSCULA("vitor")
minuscula("VITOR")
inverter("vitor")


//Ex 2

function somar(numero1, numero2) {
  const resultado = numero1 + numero2
  console.log(resultado)
}

function subtrair(numero1, numero2) {
  const resultado = numero1 - numero2
  console.log(resultado)
}

function multiplicar(numero1, numero2) {
  const resultado = numero1 * numero2
  console.log(resultado)
}

function dividir(numero1, numero2) {
  const resultado = numero1 / numero2
  console.log(resultado)
}

function verificar(numero1, numero2) {

  if (numero1 > numero2) {
      return console.log(`o ${numero1} é maior que o ${numero2}`)
  }

  if (numero1 < numero2) {
      return console.log(`o ${numero2} é maior que o ${numero1}`)

  }

  else {
      console.log("numero invalido")
  }

}

somar(15, 5)
subtrair(15, 5)
multiplicar(15, 5)
dividir(15, 5)
verificar(15, 5)


//Ex 3

function validador(idade) {
  if (idade < 0) {
      return console.log("Idade inválida")
  }


  else if (idade < 18) {
      return console.log("É de menor")
  }

  else if (idade <= 64) {
      return console.log("É de maior")
  }
  else {
      console.log("idosa")
  }

}

validador(65)


//Ex 4

function imprecao() {
  for (let i = 1; i < 101; i++) {
      console.log(i)

  }
}

imprecao()

//Ex 5
function posicao(numero) {
  dobro = numero * 2
  console.log(numero)
  triplo = numero * 3
  console.log(triplo)
  quadruplo = numero * 4
  console.log(quadruplo)

}

posicao(5)

//Ex 06
function array() {
  let numeros = [10, 20, 30, 40, 50]
  numeros.push(51)
  console.log(numeros)

  numeros.shift()
  console.log(numeros)

  console.log(Math.max(...numeros))
  
}

array()

//Ex 07
function tranformar(){
  let frutas = ["Maçã", "Banana", "Abacaxi", "Laranja"]
  let frutasMaiusculas = frutas.map( fruta => fruta.toUpperCase())
  console.log(frutasMaiusculas)

  let frutaA = frutas.filter(fruta => fruta.includes("A"))
  console.log(frutaA)
    
}

tranformar()

//Ex 08

let pessoa = { 
  nome: "Carlos", 
  idade: 28, 
  cidade: "São Paulo" }

pessoa.mae = "Maria"

console.log(pessoa)
delete pessoa.idade
console.log(pessoa)
console.log(Object.keys(pessoa))

//Ex 09

let livro = { titulo: "O Senhor dos Anéis", 
  autor: "J.R. Tolkien", 
  ano: 1954 }

let {titulo, autor, ano} = livro

console.log(livro)

function tituloNome(){
  console.log(`Título: ${titulo}, Autor: ${autor}`)

}

tituloNome()

//Ex 10

function num (numeros) {
  
  let numerosPares = numeros.filter(num => num % 2 === 0)
  console.log("Números pares:", numerosPares)

  
  let dobrados = numerosPares.map(num => num * 2)
  console.log("Números multiplicados por 2:", dobrados)

 
  let somaTotal = dobrados.reduce((acumulador, num) => acumulador + num, 0)
  console.log("Soma total:", somaTotal)
}

num([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])


