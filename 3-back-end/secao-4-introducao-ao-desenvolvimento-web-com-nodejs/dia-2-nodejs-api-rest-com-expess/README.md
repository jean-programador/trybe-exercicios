# Trybe Exercícos - Módulo de Backend

> **Seção 4 - Introdução ao desenvolvimento Web com Node.js**  
>  **Dia 2 - Node.js: API REST com Express**

# Exercícios Realizados:

## Exercício 1

**Qual é a função do código de status `400` e `422`?**
`400 (Bad Request)` - Erro do cliente, servidor não entendeu a requisição por causa de sintaxe inválida
`422 (Unprocessable Entity)` - Sintaxe correta, mas não possível prosseguir com a requisição, por erro de semântica

## Exercício 2

**Qual é a função do código de status `401`?**
`422 Unauthorized)` - Significa que o cliente não está autenticado no sistema, e precisa se autenticar (logar) para continuar.

---

Crie o diretório `src` e dentro dele um arquivo `movies.json` com o os filmes da nossa locadora:

    [
      {
        "id": 1,
        "movie": "Avatar",
        "price": 5
      },
       {
        "id": 2,
        "movie": "Gente Grande",
        "price": 2
      },
      {
        "id": 3,
        "movie": "O Jogo",
        "price": 3
      },
      {
        "id": 4,
        "movie": "Quebrando a Banca",
        "price": 5
      },
      {
        "id": 5,
        "movie": "Lilo & Stitch",
        "price": 2
      },
      {
        "id": 6,
        "movie": "Os Fantasmas se Divertem",
        "price": 2
      },
      {
        "id": 7,
        "movie": "Meninas Malvadas",
        "price": 3
      }
    ]

Agora, faça os exercícios a seguir:

## 🚀 Exercício 3

Crie um servidor Node.js utilizando o framework Express.

## 🚀 Exercício 4

Crie uma função de leitura do JSON com o modulo _fs_.

## 🚀 Exercício 5

Crie um endpoint do tipo `GET` com a rota `/movies/:id`, que possa listar um filme do JSON por `id`.

## 🚀 Exercício 6

Crie um endpoint do tipo `GET` com a rota `/movies`, que possa listar todos os filmes do JSON.

## 🚀 Exercício 7

Crie um endpoint do tipo `POST` com a rota `/movies`, para cadastrar um novo filme no JSON.

O corpo da requisição deve receber o seguinte formato:

```json
{
  "movie": "Vingadores",
  "price": 5
}
```

## 🚀 Exercício 8

Crie um endpoint do tipo `PUT` com a rota `/movies/:id`, que possa editar informações de um filme do JSON.

O corpo da requisição deve receber o seguinte formato:

```json
{
  "movie": "Vingadores Ultimato",
  "price": 5
}
```

## 🚀 Exercício 9

Crie um endpoint do tipo `DELETE` com a rota `/movies/:id` que possa deletar um filme do JSON.
