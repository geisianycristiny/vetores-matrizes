/* 
Questão 7: Crie uma matriz 3x3 e escreva uma função para verificar se a matriz é
simétrica em relação à sua diagonal principal
*/

// Função para verificar se a matriz é simétrica em relação à sua diagonal principal
function verificarSimetriaDiagonal(matriz) {
    // Verificar se a matriz é quadrada
    if (matriz.length !== matriz[0].length) {
        return false; // Se não for quadrada, não pode ser simétrica
    }

    // Iterar sobre a matriz e verificar elementos em relação à diagonal principal
    for (var i = 0; i < matriz.length; i++) {
        for (var j = 0; j < matriz[i].length; j++) {
            // Comparar o elemento atual com o elemento correspondente espelhado em relação à diagonal principal
            if (matriz[i][j] !== matriz[j][i]) {
                return false; // Se os elementos não forem iguais, a matriz não é simétrica
            }
        }
    }

    // Se chegou até aqui, significa que a matriz é simétrica em relação à sua diagonal principal
    return true;
}

// Criar uma matriz 3x3
var matriz = [
    [1, 2, 3],
    [2, 4, 5],
    [3, 5, 6]
];

// Chamar a função para verificar a simetria em relação à diagonal principal e imprimir o resultado
console.log("A matriz é simétrica em relação à sua diagonal principal?", verificarSimetriaDiagonal(matriz));
