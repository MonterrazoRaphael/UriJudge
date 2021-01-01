//SUBMISSÃO:    21002488
//Problema:     1007 - Diferença 
//Resposta:     Accepted 
//Linguagem:    JavaScript (nodejs 8.4.0) [+2s] {beta} 
//Tempo:        0.414s
//Tamanho:      310 Bytes 
//Submissão:    01/01/2021 14:21:24 


let input = require("fs").readFileSync("/dev/stdin", "utf8");
let lines = input.split("\n");

let a = parseInt(lines.shift());
let b = parseInt(lines.shift());
let c = parseInt(lines.shift());
let d = parseInt(lines.shift());

let diferenca = a * b - c * d; 

console.log(`DIFERENCA = ${diferenca}`);