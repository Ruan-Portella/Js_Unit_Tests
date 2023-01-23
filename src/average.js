/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (array) => {
  let sum = 0;

  if (array.length < 1 || !Array.isArray(array)){
    return undefined;
    } 
    
  if (Array.isArray(array)) { 
    for (let index = 0; index < array.length; index++) {
      if (typeof array[index] !== 'number') {
        return undefined;
      }
      sum += array[index]
    } 
  }
  return Math.round(sum / array.length);
};



module.exports = average;
