# CRUD Docinho da Dona Lourdes

Aplicação web desenvolvida para o gerenciamento de doces da padaria Dona Lourdes.

## Tecnologias Utilizadas
- **Node.js** & **Express**
- **EJS** (View Engine)
- **Prisma ORM** (v5)
- **SQLite** (Banco de dados)

## Pré-requisitos
- Node.js instalado na máquina.

## Como Executar o Projeto

1. **Instale as dependências:**
   ```bash
   npm install

2. **Execute as migrações do banco de dados (SQLite):**

   npx prisma migrate dev

3. **Inicie o servidor:**

   node index.js

4. **Acesse a aplicação no navegador em: http://localhost:3000**

5. **Estrutura do Projeto**

   prisma/: Configuração do banco de dados e arquivo de schema SQLite (dev.db).

   routes/: Definição das rotas das operações de CRUD (doces.js).

   views/: Telas da aplicação renderizadas via EJS (listagem.ejs, cadastro.ejs, alterar.ejs).