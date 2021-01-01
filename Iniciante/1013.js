//SUBMISSÃO:   21004365
//Problema:    1013 - O Maior 
//Resposta:    Accepted 
//Linguagem:   JavaScript (nodejs 8.4.0) [+2s] {beta} 
//Tempo:       1.500s
//Tamanho:     382 Bytes 
//Submissão:   01/01/2021 20:42:54 

let input = require("fs").readFileSync("/dev/stdin", "utf8");
let lines = input.split("\n");

let result = lines.shift()
    .split(" ")
    .map(x => Number(x))
    .reduce((acumulador, valorCorrente) => {
        if(acumulador < valorCorrente){
            acumulador = valorCorrente;
        }
        return acumulador;
    });

console.log(`${result} eh o maior`);