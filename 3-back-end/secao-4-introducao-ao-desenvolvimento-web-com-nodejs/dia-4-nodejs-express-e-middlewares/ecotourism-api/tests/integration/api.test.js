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

  it('Retorna status 400 e mensagem de erro caso a prop price não exista', async function () {
    const response = await chai.request(app).post('/activities').send({
      name: 'Joao',
    });

    expect(response.status).to.be.equal(400);
    expect(response.body.message).to.equal('O campo price é obrigatório');
  });

  it('Retorna status 400 e mensagem de erro caso a prop price seja menor que zero', async function () {
    const response = await chai.request(app).post('/activities').send({
      name: 'Joao',
      price: -1,
    });

    expect(response.status).to.be.equal(400);
    expect(response.body.message).to.equal(
      'O campo price deve ser um número maior ou igual a zero',
    );
  });

  it('Retorna status 400 e mensagem de erro caso a prop description não exista', async function () {
    const response = await chai.request(app).post('/activities').send({
      name: 'Joao',
      price: 5,
    });

    expect(response.status).to.be.equal(400);
    expect(response.body.message).to.equal('O campo description é obrigatório');
  });

  it('Retorna status 400 e mensagem de erro caso a chave createdAt da prop description não exista', async function () {
    const response = await chai
      .request(app)
      .post('/activities')
      .send({
        name: 'Joao',
        price: 5,
        description: {
          rating: 5,
          difficulty: 'Fácil',
        },
      });

    expect(response.status).to.be.equal(400);
    expect(response.body.message).to.equal('O campo createdAt é obrigatório');
  });

  it('Retorna status 400 e mensagem de erro caso a chave rating da prop description não exista', async function () {
    const response = await chai
      .request(app)
      .post('/activities')
      .send({
        name: 'Joao',
        price: 5,
        description: {
          difficulty: 'Fácil',
          createdAt: '10/08/2022',
        },
      });

    expect(response.status).to.be.equal(400);
    expect(response.body.message).to.equal('O campo rating é obrigatório');
  });

  it('Retorna status 400 e mensagem de erro caso a chave difficulty da prop description não exista', async function () {
    const response = await chai
      .request(app)
      .post('/activities')
      .send({
        name: 'Joao',
        price: 5,
        description: {
          rating: 5,
          createdAt: '10/08/2022',
        },
      });

    expect(response.status).to.be.equal(400);
    expect(response.body.message).to.equal('O campo difficulty é obrigatório');
  });

  it('Retorna status 201 e mensagem de sucesso quando o body é passado corretamente', async function () {
    const response = await chai
      .request(app)
      .post('/activities')
      .send({
        name: 'Joao',
        price: 5,
        description: {
          rating: 5,
          difficulty: 'Fácil',
          createdAt: '10/08/2022',
        },
      });

    expect(response.status).to.be.equal(201);
    expect(response.body.message).to.equal('Atividade cadastrada com sucesso!');
  });
});
