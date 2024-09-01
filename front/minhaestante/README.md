# Minha Estante

Minha Estante é uma aplicação web para gerenciamento de livros, construída com React. Com essa aplicação, você pode registrar, atualizar e gerenciar livros, bem como gerenciar usuários.

## Dependências

O projeto utiliza as seguintes dependências principais:

- **React:** Biblioteca principal para construção da interface de usuário.
- **Bootstrap:** Para estilização e design responsivo.
- **Axios:** Para realizar requisições HTTP.
- **Framer Motion:** Para animações.
- **React Router:** Para gerenciamento de rotas.
- **FontAwesome:** Para ícones.

## Instalação e Execução

Siga as etapas abaixo para rodar o projeto em sua máquina local:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/minha-estante.git
   ```
2. **Navegue até o diretório do projeto:**

   ```bash
   cd minha-estante
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

4. **Configure o arquivo `.env`:**

   Crie um arquivo `.env` na raiz do projeto com base no `.env.example`:

   ```bash
   cp .env.example .env
   ```

   Abra o arquivo `.env` e configure as seguintes variáveis de ambiente:

   ```env
   REACT_APP_URL_MssUser=http://localhost:PORT
   REACT_APP_URL_MssBook=http://localhost:PORT
   ```

   - `REACT_APP_URL_MssUser`: URL base para o serviço de gerenciamento de usuários.
   - `REACT_APP_URL_MssBook`: URL base para o serviço de gerenciamento de livros.

   Substitua `PORT` pelo número da porta correspondente para cada serviço.

5. **Execute o projeto:**

   ```bash
   npm start
   ```

6. **Acesse a aplicação no navegador:**
   Abra o navegador e vá para `http://localhost:3000`.

## Scripts Disponíveis

No projeto, você pode executar os seguintes scripts:

- **`npm start`:** Inicia o servidor de desenvolvimento.
- **`npm run build`:** Cria a versão de produção da aplicação.
- **`npm test`:** Executa os testes unitários.
- **`npm run eject`:** Ejeção de configurações padrão do `create-react-app`.
