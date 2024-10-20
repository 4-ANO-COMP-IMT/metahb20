# MinhaEstante

A MinhaEstante é uma aplicação desenvolvida para facilitar e auxiliar seus usuários a terem fácil acesso e controle de seus livros e leituras. Funcionando como uma estante virtual, de forma rápida, intuitiva e em qualquer lugar, a qualquer momento.

O usuário pode adicionar novos livros, escolher a lista mais adequada para sua necessidade e atribuir avalições para os livros que leu, auxiliando outros usuários da comunidade a escolherem seu próximo livro.

## Sumário

1. [MinhaEstante](#minhaestante)
2. [Sumário](#sumário)
3. [Introdução](#introdução)
   - [O que é?](#o-que-é)
   - [Motivação](#motivação)
4. [Utilizando](#utilizando-link-pro-site-explicação-de-como-usar)
5. [Features da Aplicação](#features-da-aplicação)
6. [Folders](#folders)
7. [Deploys](#deploys)
8. [Backend Modules](#backend-modules)
   - [MSS](#mss)
   - [Barramento](#barramento)
   - [Testes](#testes)
9. [Frontend Modules](#frontend-modules)
10. [Infraestrutura](#infraestrutura)
11. [Como rodar](#como-rodar)
    - [Backend](#backend)
    - [Frontend](#frontend)
12. [Contribuidores](#contribuidores)

## Introdução

### O que é?

A MinhaEstante é uma forma de acompanhar suas leituras de forma rápida, fácil e interativa. A plataforma permite ao usuário colocar seus livros em diferentes listas, de acordo com sua necessidade, dando liberdade para acompanhar cada um de seus estilos de leitura. O usuário pode cadastrar livros novos ou utilizar livros anteriormente cadastrados na comunidade. A aplicação pode ser acessada em qualquer lugar, o que é uma boa forma para ter sua lista de leitura ou sugestões de amigos sempre à disposição.

A aplicação pode ser encontrada em: [https://d2cw3g3xt7y8lw.cloudfront.net/](https://d2cw3g3xt7y8lw.cloudfront.net/).

### Motivação

O desenvolvimento desse projeto foi possível graças às disciplinas ECM252 - Linguagens de Programação II, ECM516 - Arquitetura de Sistemas Computacionais e ECM231- Engenharia de Software do 4° ano do curso de Engenharia de Computação do Instituto Mauá de Tecnologia. A proposta foi a construção de uma aplicação _fullstack_, através das linguagens e conceitos abordados durante as disciplinas.

## Utilizando (link pro site, explicação de como usar)

[Veja o vídeo explicativo no YouTube](https://youtu.be/VOmlbopKEFA)

## Features da Aplicação

- **Criação de Livros**: Os usuários podem adicionar livros a suas estantes, criando novos caso queiram adicionar um livro que não tenha sido criado antes por outro usuário. Atributos como título, autor, edição, quantidade de páginas etc estão disponíveis nessa _feature_.

- **Adicionar Livros em Diferentes Listas**: O livro então pode ser adicionado em diversas listas presentes na estante de cada usuário, de modo a acompanhar suas leituras. Dentre as opções de listas, temos "Quero Ler", "Lendo", "Já Li", "Abandonados" e "Favoritos".

- **Deixar uma Avaliação no Livro**: Cada um dos usuários pode atribuir uma nota para o livro que leu, tanto de modo a deixar registrado para possíveis releituras ou recomendações, mas também para contribuir para o _rating_ daquele livro, auxiliando demais usuários a entenderem se gostariam ou não de ler aquele livro. [Essa parte da aplicação está em fase de construção e implementação.]

- **Ver Avaliações do Livro**: Conforme as avaliações de cada livro são fornecidas, é fornecido um _rating_ para aquele livro, calculado através das avaliações de cada um dos usuários. [Essa parte da aplicação está em fase de construção e implementação.]

## Folders

- **back**: Back-end folder | Node.js com Express
- **front/minhaestante**: Front-end folder | React.js

**O projeto MinhaEstante foi desenvolvido em JavaScript.**

## Backend Modules

A parte de Backend da aplicação foi desenvolvida em Node.js com a utilização do Express, utilizando conceitos de arquitetura limpa de microsserviços, similarmente à utilizada pela entidade Dev Community Mauá. Dessa forma, o código foi estruturado em camadas, dividido em módulos com cada funcionalidade específica, de forma a facilitar a reutilização e manutenção do código em manutenções e versões posteriores.

### MSS

Os microsserviços da aplicação são:

- `Book` - responsável pela criação dos livros e suas relações.
- `User` - responsável pela criação do do usuário e suas relações.

### Barramento

A pasta `Barramento` é responsável pela entrega dos eventos da aplicação.

### Testes

Os testes de cada um dos microsserviços foi realizado em seu próprio módulo.

## Frontend Modules

A parte de Frontend do projeto foi desenvolvido com React.js (html, JavaScript e CSS). O frontend foi desenvolvido tendo em mente os mesmos conceitos utilziados anteriormente no backend.

## Infraestrutura

### Front-end

O Front-end está hospedado em um bucket S3 da aws utilizando o serviço de CDN CloudFront. O deploy é feito automaticamente através do GitHub Actions utilizado o CloudFormation.

### Back-end

Os microsserviços estão hospedados em Eco-dynos da plataforma Heroku. O deploy é feito automaticamente através do GitHub.

## Como rodar localmente

### Backend

Clone o repositório em sua máquina, entre na pasta "back" e rode os seguintes comandos:

```bash
npm install
```

Para rodar cada microsserviço, utilize o comando:

```bash
npm dev:<nome do microsserviço>
```

### Frontend

Clone o repositório em sua máquina, entre na pasta "front" e rode os seguintes comandos:

```bash
npm install
```

Para buildar o frontend, utilize o comando:

```bash
npm run build
```

Para rodar o frontend, utilize o comando:

```bash
npm run dev
```

## Contribuidores

- Antonio Macedo Ferrite 21.00663-6 - Frontend
- Maria Fernanda Pinho Garcia - 21.00256-8 - Backend
- Nicole Martins Fragnan - 21.00368-8 - Frontend
- Raphael Fernandes Raymundo - 21.00334-3 - Frontend
- Rafael Rubio Carnes - 20.00611-0 - Backend e Infraestrutura
