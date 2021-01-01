//SUBMISSÃO:    21002258
//Problema:     1004 - Produto Simples 
//Resposta:     Accepted 
//Linguagem:    JavaScript (nodejs 8.4.0) [+2s] {beta} 
//Tempo:        1.017s
//Tamanho:      218 Bytes 
//Submissão:    01/01/2021 13:46:07 


let input = require("fs").readFileSync("/dev/stdin", "utf8");
let lines = input.split("\n");

let a = parseInt(lines.shift());
let b = parseInt(lines.shift());

let prod = a * b;

console.log(`PROD = ${prod}`);