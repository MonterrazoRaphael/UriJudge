//SUBMISSÃO:   21002558
//Problema:    1008 - Salário 
//Resposta:    Accepted 
//Linguagem:   JavaScript (nodejs 8.4.0) [+2s] {beta} 
//Tempo:       1.692s
//Tamanho:     388 Bytes 
//Submissão:   01/01/2021 14:36:18 

let input = require("fs").readFileSync("/dev/stdin", "utf8");
let lines = input.split("\n");

let numeroFuncionario = parseInt(lines.shift());
let horasTrabalhadas = parseInt(lines.shift());
let valorPorHoras = Number(lines.shift());

let salary = horasTrabalhadas * valorPorHoras; 

console.log(`NUMBER = ${numeroFuncionario}`);
console.log(`SALARY = U$ ${salary.toFixed(2)}`);