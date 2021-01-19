let functions = require('./exercicio4');

describe('Testa implementações das funções criadas', () => {
  it('Testa implementação da primeira função', () => {
    const implementedFunction = jest
    .spyOn(functions, 'turnUpperCase')
    .mockImplementation(text => text.toLowerCase());
    expect(implementedFunction("UPPERCASE")).toBe("uppercase");
    expect(implementedFunction).toHaveBeenCalled();
    expect(implementedFunction).toHaveBeenCalledTimes(1);
    expect(implementedFunction).toHaveBeenCalledWith("UPPERCASE");

    functions.turnUpperCase.mockRestore();
    expect(functions.turnUpperCase("lowercase")).toBe("LOWERCASE");
  })
});