//SUBMISSÃO:   21002308
//Problema:    1005 - Média 1 
//Resposta:    Accepted 
//Linguagem:   JavaScript (nodejs 8.4.0) [+2s] {beta} 
//Tempo:       1.417s
//Tamanho:     305 Bytes 
//Submissão:   01/01/2021 13:56:14 


let input = require("fs").readFileSync("/dev/stdin", "utf8");
let lines = input.split("\n");

let a = Number(lines.shift());
let b = Number(lines.shift());

let pesoA = 3.5;
let pesoB = 7.5;

let media = (a * pesoA + b * pesoB) / (pesoA + pesoB); 


console.log(`MEDIA = ${media.toFixed(5)}`);