
//SUBMISSÃO:   21004485
//Problema:    1014 - Consumo 
//Resposta:    Accepted 
//Linguagem:   JavaScript (nodejs 8.4.0) [+2s] {beta} 
//Tempo:       0.948s
//Tamanho:     209 Bytes 
//Submissão:   01/01/2021 21:09:50 


let input = require("fs").readFileSync("/dev/stdin", "utf8");
let lines = input.split("\n");

let x = parseInt(lines.shift());
let y = Number(lines.shift());
  
console.log(`${(x / y).toFixed(3)} km/l`);