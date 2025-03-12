


import {TabelaIMC, CalcularIMC} from "./CalculadoraIMC.js"


console.log ("Calculo do IMC")  

console.table (TabelaIMC)

const peso = 80 
const altura = 1.70

const resultado = CalcularIMC(peso, altura)

console.log("Resultado do IMC ")
console.log (`IMC : ${ resultado.toFixed(2)}`)

// Importanto lib moment e usando 
import moment from"moment";

const hoje = moment().local('pt-br')
 console.log(hoje.format ('DD/mm/yyyy'))