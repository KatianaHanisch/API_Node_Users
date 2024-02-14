# Users API

  ##  :pushpin: Índice 
  
* [Descrição do Projeto](#pencil-Descrição-do-Projeto)
* [Como rodar a aplicação](#arrow_forward-Como-rodar-a-aplicação)
* [Variáveis de Ambiente](#clipboard-Variáveis-de-Ambiente)
* [Tecnologias utilizadas](#heavy_check_mark-Tecnologias-utilizadas)
* [Conceitos utilizados](#rocket-Conceitos-utilizados)
* [Entidades](#wrench-Entidades)
* [Rotas](#round_pushpin-rotas)
* [Arquitetura](#office-Arquitetura)

## :pencil: Descrição do Projeto
Esta API foi desenvolvida como um projeto educacional, com base em aulas online, com o propósito de aprimorar competências na área de desenvolvimento back-end.

## :arrow_forward: Como rodar a aplicação

No terminal, clone o projeto: 

```
git clone https://github.com/KatianaHanisch/API_Node_Users
```

Depois abra a pasta e instale as dependências do projeto, executando no terminal:

```sh
 yarn install
```

Após instalar as dependências, inicie a aplicação com:
```sh
 yarn start:dev
```

## :clipboard: Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`MONGODB_URL`

`MONGODB_USERNAME`

`MONGODB_PASSWORD`


## :heavy_check_mark: Tecnologias utilizadas

- ``Node.js``
- ``TypeScript``
- ``Express``
- ``MongoDB``

## :rocket: Conceitos utilizados

- [``SOLID``](https://www.alura.com.br/artigos/solid)
- [``Injeção de Dependência (Dependency Injection)``](https://medium.com/@eduardolanfredi/inje%C3%A7%C3%A3o-de-depend%C3%AAncia-ff0372a1672)
- [``Repository Pattern``](https://renicius-pagotto.medium.com/entendendo-o-repository-pattern-fcdd0c36b63b)

  
## :wrench: Entidades

<pre>
User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}</pre>

## :round_pushpin: Rotas

- GET /users - retorna os usuários salvos no banco
- POST /users - cria um usuário
- GET /users/:id - retorna apenas o usuário com o id buscado
- PATCH /users/:id - atualiza um usuário
- DELETE /users/:id - deleta um usuário


##  :office: Arquitetura

![Arquitetura](https://imgur.com/k5mXFoZ.png)
