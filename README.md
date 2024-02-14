# Users API

Esta API foi desenvolvida como um projeto educacional, com base em aulas online, com o propósito de aprimorar competências na área de desenvolvimento back-end.

## Tecnologias utilizadas

- Node.js
- TypeScript
- Express
- MongoDB

## Conceitos utilizados

- SOLID
- Injeção de Dependência (Dependency Injection)
- Repository Pattern

## Entidades

<pre>
User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}</pre>

## Rotas

- GET /users - retorna os usuários salvos no banco
- POST /users - cria um usuário
- GET /users/:id - retorna apenas o usuário com o id buscado
- PATCH /users/:id - atualiza um usuário
- DELETE /users/:id - deleta um usuário

## Arquitetura

![Arquitetura](https://imgur.com/k5mXFoZ.png)
