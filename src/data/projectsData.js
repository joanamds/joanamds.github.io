import SolarSystem from '../images/projects_images/solar-system.png';
import Trybetunes from '../images/projects_images/trybetunes.png';
import OnlineStore from '../images/projects_images/online-store.png';
import TrybeWallet from '../images/projects_images/trybewallet.png';
import ZooFunctions from '../images/projects_images/zoo-functions.png';
import TodoList from '../images/projects_images/todo-list.png';
import AllForOne from '../images/projects_images/all-for-one.png';
import OneForAll from '../images/projects_images/one-for-all.png';
import TalkerManager from '../images/projects_images/talker-manager.png';
import BestBollywood from '../images/projects_images/best-bollywood.png';
import DisneyCharacters from '../images/projects_images/disney-characters.png';
import StoreManager from '../images/projects_images/store-manager.png';

export const projectsFront = [
  {
    title: 'Solar System',
    descriptionENG: 'This is a page that renders the solar system planets and highlights notable space missions.',
    description: 'É uma página que renderiza os planetas do sistema solar e algumas missões espaciais famosas.',
    image: SolarSystem,
    page: 'https://joanamds.github.io/projeto-solar-system/',
    repo: 'https://github.com/joanamds/projeto-solar-system',
  },
  {
    title: 'TrybeTunes',
    description: 'É uma aplicação para pesquisar e listar álbuns e músicas de várias bandas e artistas. É possível ouvir uma prévia das músicas do álbum e adicionar as músicas favoritas em uma lista.',
    descriptionENG: 'This application allows users to search and browse albums and songs from various bands and artists. It features a preview option for songs in an album and the ability to create a list of favorite songs.',
    image: Trybetunes,
    page: 'https://joanamds.github.io/projeto-trybetunes/',
    repo: 'https://github.com/joanamds/projeto-trybetunes',
  },
  {
    title: 'Online Store',
    description: 'Foi um projeto realizado em grupo, precisamos fazer uma loja online alimentada pela API do mercado livre. No app é possível filtrar os produtos por categoria, pesquisar na barra de pesquisa, adicionar, remover e alterar a quantidade do produto no carrinho e em seguida finalizar a compra em uma página de checkout.',
    descriptionENG: 'This group project involved creating an online store utilizing the Mercado Livre API. The app allows users to filter products by category, search using a search bar, add, remove, and adjust the quantity of items in their cart, and complete purchases on a checkout page.',
    image: OnlineStore,
    page: 'https://joanamds.github.io/projeto-frontend-online-store/',
    repo: 'https://github.com/joanamds/projeto-frontend-online-store',
  },
  {
    title: 'TrybeWallet',
    description: 'É uma aplicação que salva os gastos do usuário e converte tudo para uma única moeda. Para obter as informações da cotação, nomes de moedas e outros dados sobre as moedas utilizamos a API de Cotações de Moedas.',
    descriptionENG: 'The application is developed to track and manage user expenses, converting them to a single currency. It utilizes an API to obtain current exchange rates, coin names, and other relevant information.',
    image: TrybeWallet,
    page: 'https://joanamds.github.io/projeto-trybewallet/',
    repo: 'https://github.com/joanamds/projeto-trybewallet',
  },
];

export const projectsBack = [
  {
    title: 'Docker Todo List',
    descriptionENG: 'The project aimed to build containers using Docker for an existing application. This was achieved by creating Dockerfile files and a docker-compose file.',
    description: 'O objetivo do projeto foi dockerizar a aplicação Todo App que já estava pronta. Para isso desenvolvemos arquivos Dockerfile e um arquivo docker-compose.',
    image: TodoList,
    page: null,
    repo: 'https://github.com/joanamds/projeto-solar-system',
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
    description: 'Para esta aplicação precisamos criar uma API que simulasse o funcionamento de uma loja, armazenando dados de produtos e de vendas.',
    image: StoreManager,
    page: null,
    repo: 'https://github.com/joanamds/store-manager',
  },
];

export const projectsFundamentals = [
  {
    title: 'Zoo Functions',
    descriptionENG: 'To gain a deeper understanding of Higher Order Functions we needed to create functions to simulate a zoo reporting system, collaborators, opening hours and a price list that varies according to the age of the visitors',
    description: 'Para fixar o conteúdo de Higher Order Functions desenvolvemos funções para simular um sistema de relatório de um zoológico, colaboradores, horários de funcionamento e uma tabela de preços que varia de acordo com a idade das pessoas que o visitam.',
    image: ZooFunctions,
    page: null,
    repo: 'https://github.com/joanamds/projeto-zoo-functions',
  },
];

export const personalProjects = [
  {
    title: 'Best Bollywood',
    descriptionENG: 'Although Bollywood films may not be widely recognized in Brazil, I have developed a love for them after watching many of them. To showcase my favorites, I created a simple application using foundational concepts in React, which displays a list of my favorite Bollywood movies.',
    description: 'Os filmes de Bollywood não são muito conhecidos aqui no Brasil, mas eu já assisti vários e adoro! Então, criei uma aplicação bem simples utilizando conceitos básicos de React para renderizar uma lista de filmes que estão na minha lista de favoritos!',
    image: BestBollywood,
    page: 'https://joanamds.github.io/best-bollywood/',
    repo: 'https://github.com/joanamds/best-bollywood',
  },
  {
    title: 'Disney Characters',
    descriptionENG: 'This webpage displays a list of Disney characters, and allows you to search for characters using the search bar.',
    description: 'É uma aplicação que renderiza os personagens da Disney, também é possível procurar personagens na barra de busca.',
    image: DisneyCharacters,
    page: 'https://joanamds.github.io/disney-characters/',
    repo: 'https://github.com/joanamds/disney-characters',
  },
];

