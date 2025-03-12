
import { soma, subtracao, multiplicacao, divisao, calcularIdade } from "./calculadora.js";

console.log("soma", soma(10, 5 )),
console.log("subtracao", subtracao(10, 5 )),
console.log("multiplicacao", multiplicacao(10, 5 )),
console.log("divisao", divisao(10, 5 ))

const dataNasimento ='1997-03-25'
console.log(`Idade para a data de nascimento  ${dataNasimento}:`,
    calcularIdade(dataNasimento)
)