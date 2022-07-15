/* ForEach

Task: Pegue um array com esse números: 65, 44, 12, 4 e exiba no console.log o resultado da multiplicação de cada um deles por 10 usando forEach */

const numeros = [65, 44, 12, 4];
numeros.forEach(minhaNovaFuncao);

function minhaNovaFuncao(item) {
    console.log(item * 10);
}