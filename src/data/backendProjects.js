import BlogsAPI from '../images/projects_images/blogs-api.png';
import Trybesmith from '../images/projects_images/trybesmith.png';
import TrybersAndDragons from '../images/projects_images/trybers-and-dragons.png';
import TFC from '../images/projects_images/tfc.png';
import StoreManager from '../images/projects_images/store-manager.png';
import TodoList from '../images/projects_images/todo-list.png';
import AllForOne from '../images/projects_images/all-for-one.png';
import OneForAll from '../images/projects_images/one-for-all.png';
import TalkerManager from '../images/projects_images/talker-manager.png';

export const projectsBack = [
  {
    title: 'Docker Todo List',
    descriptionENG: 'The project aimed to build containers using Docker for an existing application. This was achieved by creating Dockerfile files and a docker-compose file.',
    description: 'O objetivo do projeto foi dockerizar a aplicação Todo App que já estava pronta. Para isso desenvolvemos arquivos Dockerfile e um arquivo docker-compose.',
    image: TodoList,
    page: null,
    repo: 'https://github.com/joanamds/projeto-docker-todo-list',
  },
  {
    title: 'All For One',
    descriptionENG: 'We have 27 challenges to complete to practice SQL queries. The first set of challenges involve using SELECT and create data. The next set of challenges involve filtering data and the final set of challenges involve manipulating tables.',
    description: 'Para praticarmos as queries de SQL que aprendemos nos foi proposto 27 desafios. Primeiro foram desafios para fazer SELECT e criar dados. Em seguida foram desafios para filtrar dados. Por último fizemos desafios para manipular tabelas.',
    image: AllForOne,
    page: null,
    repo: 'https://github.com/joanamds/projeto-all-for-one',
  },
  {
    title: 'One For All',
    descriptionENG: 'For this project, we received a non-normalized table and we need to normalize it to the third normal form. Then we need to create the normalized tables and interact with them by creating queries to join the information from the tables using the JOIN method.',
    description: 'Para este projeto recebemos uma tabela não normalizada e precisamos normalizá-la na terceira forma normal. Em seguida precisamos criar as tabelas normalizadas e interagir com elas criando queries para juntar as informações das tabelas utilizando o método JOIN.',
    image: OneForAll,
    page: null,
    repo: 'https://github.com/joanamds/projeto-one-for-all',
  },
  {
    title: 'Talker Manager',
    descriptionENG: 'For this project, we were tasked with utilizing Node.js to develop an API with CRUD (create, read, update, delete) functionality for talkers. Additionally, we needed to create endpoints that allow for reading and writing to a file using the "fs" module.',
    description: 'Este projeto foi o primeiro projeto utilizando Node.js em que foi preciso construir uma API com CRUD(Create Read Update Delete) de palestrantes. Foi preciso desenvolver endpoints para ler e escrever em um arquivo utilizando o módulo "fs".',
    image: TalkerManager,
    page: null,
    repo: 'https://github.com/joanamds/projeto-talker-manager',
  },
  {
    title: 'Store Manager',
    descriptionENG: 'For this application we have to create an API that emulates  a stores inventory management system, including the storage and tracking of products and sales data.',
    description: 'Nesse projeto foi preciso criar uma API que simulasse o funcionamento de uma loja, armazenando dados de produtos e de vendas.',
    image: StoreManager,
    page: null,
    repo: 'https://github.com/joanamds/store-manager',
  },
  {
    title: 'Blogs API',
    descriptionENG: 'In this project, it was necessary to develop an API to manage blog posts and associated users. It is possible to create, edit, and delete posts and users, as well as search for posts by name or content.',
    description: 'Neste projeto foi preciso desenvolver uma API para gerenciar postagens de blog e usuários associados. É possível criar, editar e excluir postagens e usuários, além de buscar postagens por nome ou conteúdo.',
    image: BlogsAPI,
    page: null,
    repo: 'https://github.com/joanamds/blogs_api',
  },
  {
    title: 'Trybesmith',
    descriptionENG: 'First project using TypeScript! For this project, it was necessary to simulate a medieval products store by creating an API with endpoints to read and write to the database using MySQL.',
    description: 'Primeiro projeto utilizando TypeScript! Para este projeto foi preciso simular uma loja de produtos medievais criando uma API com endpoints para ler e escrever no banco de dados utilizando MySQL.',
    image: Trybesmith,
    page: null,
    repo: 'https://github.com/joanamds/trybesmith',
  },
  {
    title: 'Trybers And Dragons',
    descriptionENG: 'In this project, we were challenged to create an RPG game simulation using Object-Oriented Programming and SOLID principles.',
    description: 'Neste projeto fomos desafiados a criar uma simulação de jogo de RPG utilizando Programação Orientada a Objetos e SOLID.',
    image: TrybersAndDragons,
    page: null,
    repo: 'https://github.com/joanamds/trybers-and-dragons',
  },
  {
    title: 'TFC',
    descriptionENG: 'In this project, an API was created to be consumed by the front-end of a page that displays the ranking of soccer teams in a championship.',
    description: 'Neste projeto foi criada uma API para ser consumida pelo front end de uma página que renderiza a classificação dos times de um campeonato de futebol.',
    image: TFC,
    page: null,
    repo: 'https://github.com/joanamds/projeto-tfc',
  },
];
