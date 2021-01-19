let fetchDogPictures = require("./exercicio6");

describe('Verificar se teve sucesso na requisição de API', () => {
  it('Retorno do sucesso na resquisição', async () => {
    fetchDogPictures = jest.fn();
    fetchDogPictures.mockResolvedValue('request sucess');
    expect(fetchDogPictures()).resolves.toBe('request sucess');
  })
  it('Retorno da falha na resquisição', async () => {
    fetchDogPictures = jest.fn();
    fetchDogPictures.mockRejectedValue('request failed');
    expect(fetchDogPictures()).rejects.toBe('request failed');
  })
})