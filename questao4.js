/* 
Questão 4: Crie uma matriz 3x3 em JavaScript e imprima-a na tela.
*/

// Criando uma matriz 3x3
var matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Imprimindo a matriz na tela
for (var i = 0; i < matriz.length; i++) {
    for (var j = 0; j < matriz[i].length; j++) {
        document.write(matriz[i][j] + " ");
    }
    document.write("<br>");
}