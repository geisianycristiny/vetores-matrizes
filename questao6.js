/* 
Questão 6: Escreva um código para calcular a soma de todos os elementos de uma
matriz em JavaScript.
*/

// Definindo a matriz
var matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Inicializando a variável para armazenar a soma
var soma = 0;

// Iterando sobre cada linha da matriz
for (var i = 0; i < matriz.length; i++) {
    // Iterando sobre cada elemento da linha
    for (var j = 0; j < matriz[i].length; j++) {
        // Adicionando o valor do elemento à soma
        soma += matriz[i][j];
    }
}

// Imprimindo a soma dos elementos da matriz
console.log("A soma de todos os elementos da matriz é:", soma);