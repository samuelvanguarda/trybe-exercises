let  {turnUpperCase, firstCharacter, concatenateTwoStrings} = require('./exercicio4');

jest.mock('./exercicio4');
describe('Testa implementações das funções criadas', () => {
  it('Testa implementação da primeira função', () => {
    turnUpperCase.mockImplementation(text => text.toLowerCase());
    expect(turnUpperCase('TESTE')).toBe('teste');
  })
  it('Testa implementação da segunda função', () => {
    firstCharacter.mockImplementation(text => text.substr(text.length - 1));
    expect(firstCharacter('TESTE')).toBe('E');
  })
  it('Testa implementação da terceira função', () => {
    concatenateTwoStrings.mockImplementation((firstString, secondString, thirdString) => `${firstString}${secondString}${thirdString}`);
    expect(concatenateTwoStrings('primeira', 'segunda', 'terceira')).toBe('primeirasegundaterceira');
  })
})


