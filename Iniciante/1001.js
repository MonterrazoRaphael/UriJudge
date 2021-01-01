//Problema:  1001 - Extremamente Básico 
//Resposta:    Accepted 
//Linguagem:   JavaScript (nodejs 8.4.0) [+2s] {beta} 
//Tempo:       0.303s
//Tamanho:     207 Bytes 
//Submissão:   01/01/2021 12:57:44 

let input = require("fs").readFileSync("/dev/stdin", "utf8");
let lines = input.split("\n");

let a = parseInt(lines.shift());
let b = parseInt(lines.shift());
let x = a + b;

console.log(`X = ${x}`);