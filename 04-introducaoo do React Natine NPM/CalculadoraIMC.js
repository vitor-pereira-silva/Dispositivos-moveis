// Sistema de Modulo (es6) -> Exportando
 export const TabelaIMC = 
[
{limite: 18.5, classificacao: "magreza"},
{limite: 18.5, classificacao: "Normal"},
{limite: 18.5, classificacao: "Sobrepeso"},
{limite: 18.5, classificacao: "Obsidade Grau 1"},
{limite: 18.5, classificacao: "Obesidade grau 2"},
{limite: 18.5, classificacao: "Obesidade grau 3"}

]

 export const CalcularIMC = (peso, altura)=> {
    return peso / (altura * altura) }