//SUBMISSÃO:   21002191
//Problema:    1003 - Soma Simples 
//Resposta:    Accepted 
//Linguagem:   JavaScript (nodejs 8.4.0) [+2s] {beta} 
//Tempo:       0.771s
//Tamanho:     218 Bytes 
//Submissão:   01/01/2021 13:32:10 


let input = require("fs").readFileSync("/dev/stdin", "utf8");
let lines = input.split("\n");

let a = parseInt(lines.shift());
let b = parseInt(lines.shift());

let soma = a + b;

console.log(`SOMA = ${soma}`);