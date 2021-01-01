//SUBMISSÃO:   21003469
//Problema:    1010 - Cálculo Simples 
//Resposta:    Accepted 
//Linguagem:   JavaScript (nodejs 8.4.0) [+2s] {beta} 
//Tempo:       0.438s
//Tamanho:     314 Bytes 
//Submissão:   01/01/2021 17:13:25 

let input = require("fs").readFileSync("/dev/stdin", "utf8");
let lines = input.split("\n");

let produto1 = lines.shift().split(' ');
let produto2 = lines.shift().split(' ');

let total = Number(produto1[1] * produto1[2] + produto2[1] * produto2[2]);

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);