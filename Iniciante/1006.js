//SUBMISSÃO:   21002446
//Problema:    1006 - Média 2 
//Resposta:    Accepted 
//Linguagem:   JavaScript (nodejs 8.4.0) [+2s] {beta} 
//Tempo:       0.426s 
//Tamanho:     373 Bytes 
//Submissão:   01/01/2021 14:14:48 

let input = require("fs").readFileSync("/dev/stdin", "utf8");
let lines = input.split("\n");

let a = Number(lines.shift());
let b = Number(lines.shift());
let c = Number(lines.shift());

let pesoA = 2.0;
let pesoB = 3.0;
let pesoC = 5.0;

let media = (a * pesoA + b * pesoB + c * pesoC) / (pesoA + pesoB + pesoC); 

console.log(`MEDIA = ${media.toFixed(1)}`);