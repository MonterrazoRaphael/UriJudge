//SUBMISSÃO:  21004148
//Problema:   1012 - Área 
//Resposta:   Accepted 
//Linguagem:  JavaScript (nodejs 8.4.0) [+2s] {beta} 
//Tempo:      0.497s
//Tamanho:    826 Bytes 
//Submissão:  01/01/2021 19:44:44 

let input = require("fs").readFileSync("/dev/stdin", "utf8");
let lines = input.split("\n");

let vect = lines.shift().split(" ").map(x => Number(x));
let [a, b, c] = vect;
let pi = 3.14159;

let areaTrianguloRetangulo = (base, altura) => (base * altura) / 2;
let areaCirculo = (raio) => pi * Math.pow(raio, 2);
let areaTrapezio = (baseMaior, baseMenor, altura) => ((baseMaior + baseMenor) * altura) / 2;
let areaQuadrado = (lado) => Math.pow(lado, 2);
let areaRetangulo = (base, altura) => base * altura;

console.log(`TRIANGULO: ${areaTrianguloRetangulo(a, c).toFixed(3)}`);
console.log(`CIRCULO: ${areaCirculo(c).toFixed(3)}`);
console.log(`TRAPEZIO: ${areaTrapezio(a, b, c).toFixed(3)}`);
console.log(`QUADRADO: ${areaQuadrado(b).toFixed(3)}`);
console.log(`RETANGULO: ${areaRetangulo(a, b).toFixed(3)}`);