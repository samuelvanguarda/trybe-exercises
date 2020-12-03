//Parte 1
const { strictEqual } = require('assert');
const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
//PARTE 1
    //1. Teste se o retorno de sum(4, 5) é 9
    assert.strictEqual(sum(4,5), 9, '4 + 5 = 9');

    //2. Teste se o retorno de sum(0, 0) é 0
    assert.strictEqual(sum(0,0), 0, '0 + 0 = 0');

    //3. Teste se a função sum lança um erro quando os parametros são 4 e "5" (string 5)
    //4. Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
    assert.strictEqual(sum(4,'5'), 9, '4 + 5 = 9');
//------------------------------------------------------------------------------------------------------------------------------------------------

//PARTE 2. A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
    //1. Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
    assert.strictEqual(myRemove([1, 2, 3, 4], 3));
    
    //2. Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
    assert.strictEqual(myRemove([1, 2, 3, 4], 3));

    //3. Verifique se o array passado por parâmetro não sofreu alterações
    assert.strictEqual(myRemove([1, 2, 3, 4], 3));

    //4. Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
    assert.strictEqual(myRemove([1, 2, 3, 4], 5));
//-----------------------------------------------------------------------------------------------------------------------------------------------------

//PARTE 3. A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }
  return arr;
}

    //1. Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
    assert.strictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3));

    //2. Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
    assert.strictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5));
//-----------------------------------------------------------------------------------------------------------------------------------------------------------

//PARTE 4. A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
    //1. Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
    assert.strictEqual(myFizzBuzz(30), 'fizzbuzz');
    
    //2. Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
    assert.strictEqual(myFizzBuzz(9), 'fizz');

    //3. Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
    assert.strictEqual(myFizzBuzz(10), 'buzz');

    //4. Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
    assert.strictEqual(myFizzBuzz(13), 'fizzbuzz');

    //5. Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
    assert.strictEqual(myFizzBuzz('10'), 'fizzbuzz');