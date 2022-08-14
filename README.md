# Backend de um Blog de Notícias

# Sobre o projeto

Blog é uma aplicação Backend, construída por mim para estudos.

A aplicação consiste em um cadastro de matérias, onde podermos criar notícias , deletar, editar , se quisermos mostrar público ou não e listar por categorias.

# Tecnologias utilizadas
## Back End
- nodejs
- expressjs
- postgresql
- typescript
- prisma

## Implantação em produção
- Back end: heroku
- Banco de dados: heroku
- OBS: Ainda falta deploy da aplicação

# Como executar o projeto

Pré-requisitos:
- nodejs
- typescript
- prisma

```bash
# clonar repositório
git clone https://github.com/DevNetoSantos/blog-backend

# entrar na pasta do projeto
cd blog-backend

# instalar dependências
npm install

# adicionar a estrutura do banco de dados
criar um banco de dados com nome blog
npx prisma db push

# executar o projeto
npm run dev

# Autor

Raimundo Alves dos Santos Neto