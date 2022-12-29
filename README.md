<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="10%" alt="Nest Logo" /></a>
</p>

<h1 align="center">Microsserviço de Notificações</h1>
<p align="center">Projeto desenvolvido durante o Ignite Lab Node.js da Rocketseat</p>

<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;  
  <a href="#-vídeo-demonstrativo">Vídeo Demonstrativo</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">Como executar</a>
</p>

## 💻 Projeto

Desenvolvimento de um microsserviço de notificações com Nest.js, testes automatizados com Jest e serviço de mensageria Kafka.

## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Nest.js](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
- [Jest](https://jestjs.io/pt-BR/)
- [Kafka](https://kafka.apache.org/)
- [Upstash](https://upstash.com/)
- [TypeScript](https://www.typescriptlang.org/)

## 🎬 Vídeo Demonstrativo

<p align="center">
    <img src=".github/notifications-services.gif" alt="Vídeo Demosntrativo do App" width="30%" />
</p>

## 🚀 Como executar
1.  Clone o repositório: `git clone git@github.com:esiammd/notifications-services.git`
2.  Acesse a pasta do projeto no seu terminal: `cd notifications-services`
3.  Instale as dependências (node_modules): `npm install`
4.  Para rodar os testes automatizados: `npm run test`
5.  Para rodar o microsserviço de notificações: `npm run start:dev`
6.  Para visualizar a base de dados Prisma: `npx prisma studio`
7.  Para executar o kafka producer:
    - Acesse: https://github.com/esiammd/kafka-producer
    - Clone o repositório: `git clone git@github.com:esiammd/kafka-producer.git`
    - Acesse a pasta do projeto: `cd kafka-producer`
    - Produza uma nova mensagem: `node producer.js`