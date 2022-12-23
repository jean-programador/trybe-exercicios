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

  it('Retorna status 400 e mensagem de erro caso a chave createdAt não esteja no formato válido de data', async function () {
    const response = await chai
      .request(app)
      .post('/activities')
      .send({
        name: 'Joao',
        price: 5,
        description: {
          rating: 5,
          createdAt: '08/20/2022',
          difficulty: 'Fácil',
        },
      });

    expect(response.status).to.be.equal(400);
    expect(response.body.message).to.equal(
      "O campo createdAt deve ter o formato 'dd/mm/aaaa'\"",
    );
  });

  it('Retorna status 400 e mensagem de erro caso a chave rating não seja um número inteiro', async function () {
    const response = await chai
      .request(app)
      .post('/activities')
      .send({
        name: 'Joao',
        price: 5,
        description: {
          rating: 4.7,
          createdAt: '10/08/2022',
          difficulty: 'Fácil',
        },
      });

    expect(response.status).to.be.equal(400);
    expect(response.body.message).to.equal(
      'O campo rating deve ser um número inteiro entre 1 e 5',
    );
  });

  it('Retorna status 400 e mensagem de erro caso a chave rating não seja um número entre 1 e 5', async function () {
    const response = await chai
      .request(app)
      .post('/activities')
      .send({
        name: 'Joao',
        price: 5,
        description: {
          rating: 6,
          createdAt: '10/08/2022',
          difficulty: 'Fácil',
        },
      });

    expect(response.status).to.be.equal(400);
    expect(response.body.message).to.equal(
      'O campo rating deve ser um número inteiro entre 1 e 5',
    );
  });

  it('Retorna status 400 e mensagem de erro caso a chave difficulty não seja dos valores válidos', async function () {
    const response = await chai
      .request(app)
      .post('/activities')
      .send({
        name: 'Joao',
        price: 5,
        description: {
          rating: 5,
          createdAt: '10/08/2022',
          difficulty: 'Intermediário',
        },
      });

    expect(response.status).to.be.equal(400);
    expect(response.body.message).to.equal(
      "O campo difficulty deve ser 'Fácil', 'Médio' ou 'Difícil'\"",
    );
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
          difficulty: 'Difícil',
          createdAt: '10/08/2022',
        },
      });

    expect(response.status).to.be.equal(201);
    expect(response.body.message).to.equal('Atividade cadastrada com sucesso!');
  });
});

describe('Usando o método POST em /signup', function () {
  it('Retorna status 401 - Unauthorized se algum dos campos obrigatórios não estiver preenchido', async function () {
    const response = await chai.request(app).post('/signup').send({
      email: 'Joao@email.com',
      password: '123456',
      firstName: 'Joao',
    });

    expect(response.status).to.be.equal(401);
    expect(response.body.message).to.equal('Campos obrigatórios ausentes');
  });

  it('Retorna status 200 e um json contendo um token aleatório, se todos os campos forem preenchidos corretamente', async function () {
    const response = await chai.request(app).post('/signup').send({
      email: 'Joao@email.com',
      password: '123456',
      firstName: 'Joao',
      phone: '(47)-99738-1273',
    });

    expect(response.status).to.be.equal(200);
    expect(response.body.message).to.equal('Campos obrigatórios ausentes');
  });
});
