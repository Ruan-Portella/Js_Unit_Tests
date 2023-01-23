/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const numbers = require('../src/numbers');

/*
  A função `numbers` recebe um array de tamanho variável e retorna `true` se todos os parâmetros forem do tipo 'number' e `false` caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false

*/

describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  it('Verifica se a função `numbers` retorna `true` quando o array contém apenas números e falso caso contrário', () => {
    // Escreva um teste em que a função recebe [1, 2, 3, 4, 5] e retorna true
    expect(numbers([1, 2, 3, 4, 5])).toBe(true)
    // Escreva um teste em que a função recebe [1, 2, '3', 4, 5] e retorna false
    expect(numbers([1, 2, '3', 4, 5])).toBe(false)
    // Escreva um teste em que a função recebe [1, 'a', 3] e retorna false
    expect(numbers([1, 'a', 3])).toBe(false)
    // Escreva um teste em que a função recebe [' '] e retorna false
    expect(numbers([' '])).toBe(false)
  });
});
