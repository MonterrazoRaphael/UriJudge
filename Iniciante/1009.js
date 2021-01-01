//SUBMISSÃO:   21002725
//Problema:    1009 - Salário com Bônus 
//Resposta:    Accepted 
//Linguagem:   JavaScript (nodejs 8.4.0) [+2s] {beta} 
//Tempo:       2.065s
//Tamanho:     351 Bytes 
//Submissão:   01/01/2021 15:02:59 

let input = require("fs").readFileSync("/dev/stdin", "utf8");
let lines = input.split("\n");

let nomeVendedor = lines.shift();
let salarioFixo = Number(lines.shift());
let totalVendas = Number(lines.shift());

let percentual = 15

let total = salarioFixo + (totalVendas * (percentual / 100))

console.log(`TOTAL = R$ ${total.toFixed(2)}`);