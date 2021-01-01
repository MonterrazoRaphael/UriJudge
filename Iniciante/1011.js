//SUBMISSÃO:   21003727
//Problema:    1011 - Esfera 
//Resposta:    Accepted 
//Linguagem:   JavaScript (nodejs 8.4.0) [+2s] {beta} 
//Tempo:       1.476s
//Tamanho:     262 Bytes 
//Submissão:   01/01/2021 18:09:00 

let input = require("fs").readFileSync("/dev/stdin", "utf8");
let lines = input.split("\n");

let raio = Number(lines.shift());
let pi = 3.14159;

let volumeEsfera = (4 / 3.0) * pi * Math.pow(raio, 3);

console.log(`VOLUME = ${volumeEsfera.toFixed(3)}`);
