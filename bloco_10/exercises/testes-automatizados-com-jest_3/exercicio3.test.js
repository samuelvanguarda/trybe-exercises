let generateRandomNumber  = require("./exercicio1");

describe('Testa implementação da função', () => {
    it('Recebe três parâmetros e os multiplica', () => {
        generateRandomNumber = jest.fn()
        generateRandomNumber.mockImplementation((a, b, c) => a * b * c);
        expect(generateRandomNumber(1, 2, 4)).toBe(8);
        expect(generateRandomNumber).toHaveBeenCalled();
        expect(generateRandomNumber).toHaveBeenCalledTimes(1);
        generateRandomNumber.mockReset();
        generateRandomNumber.mockImplementation(a => a * 2);
        expect(generateRandomNumber(2)).toBe(4);
        expect(generateRandomNumber).toHaveBeenCalled();
        expect(generateRandomNumber).toHaveBeenCalledTimes(1);
    })
})