let generateRandomNumber = require('./exercicio1');

describe('Espera o retorno da divisão do primeiro parâmetro pelo segundo', () => {
  generateRandomNumber = jest.fn();
  it('Implementa o novo código da função', () => {
      generateRandomNumber.mockImplementation((a, b) =>  a / b);
      expect(generateRandomNumber(4, 2)).toBe(2);
      expect(generateRandomNumber).toHaveBeenCalled();
      expect(generateRandomNumber).toHaveBeenCalledTimes(1);
  })
})
