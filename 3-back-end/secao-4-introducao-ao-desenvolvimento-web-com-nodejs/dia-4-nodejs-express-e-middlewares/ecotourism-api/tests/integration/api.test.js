const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');

chai.use(chaiHttp);

const { expect } = chai;

describe('Usando o método POST em /activities', function () {
  it('Retorna a mensagem de erro caso prop nome não exista', async function () {
    const response = await chai.request(app).post('/activities').send({
      idade: 'Mint Pretty Good',
    });

    expect(response.status).to.be.equal(400);
    expect(response.body.message).to.equal('O campo name é obrigatório');
  });

  it('Retorna a mensagem de erro caso prop nome tenha menos de 4 caracteres', async function () {
    const response = await chai.request(app).post('/activities').send({
      name: 'Ana',
    });

    expect(response.status).to.be.equal(400);
    expect(response.body.message).to.equal(
      'O campo name deve ter pelo menos 4 caracteres',
    );
  });

  it('Retorna status 201 e mensagem de sucesso caso a prop name seja passada corretamente', async function () {
    const response = await chai.request(app).post('/activities').send({
      name: 'Joao',
    });

    expect(response.status).to.be.equal(201);
    expect(response.body.message).to.equal('Atividade cadastrada com sucesso!');
  });
});
