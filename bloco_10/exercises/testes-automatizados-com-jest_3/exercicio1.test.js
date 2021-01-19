let generateRandomNumber = require("./exercicio1");

describe('Testa retorno da generateRandomNumber', () => {
    generateRandomNumber = jest.fn()
      .mockReturnValue(10);
    it('Definindo retorno como 10', () => {
        expect(generateRandomNumber()).toBe(10);
        expect(generateRandomNumber).toHaveBeenCalled();
        expect(generateRandomNumber).toHaveBeenCalledTimes(1);
    });
})