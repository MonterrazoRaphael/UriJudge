//SUBMISSÃO:   21002135
//Problema:    1002 - Área do Círculo 
//Resposta:    Accepted 
//Linguagem:   JavaScript (nodejs 8.4.0) [+2s] {beta} 
//Tempo:       0.883s
//Tamanho:     222 Bytes 
//Submissão:   01/01/2021 13:16:36 


let input = require("fs").readFileSync("/dev/stdin", "utf8");
let lines = input.split("\n");

let n = 3.14159;
let raio = Number(lines.shift());
let area = n * Math.pow(raio, 2)

console.log(`A=${area.toFixed(4)}`);