import { ProjectTypes } from '../types/DataTypes';
const SolarSystem = require('../images/projects_images/solar-system.png');
const Trybetunes = require('../images/projects_images/trybetunes.png');
const OnlineStore = require('../images/projects_images/online-store.png');
const TrybeWallet = require('../images/projects_images/trybewallet.png');
const ZooFunctions = require('../images/projects_images/zoo-functions.png');
const BestIndianMovies = require('../images/projects_images/best-indian-movies.png');
const DisneyCharacters = require('../images/projects_images/disney-characters.png');
const EscolasDeSamba = require('../images/projects_images/escolas-de-samba.png');

export const projectsFront: ProjectTypes[] = [
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
    title: 'Best Indian Movies',
    descriptionENG: 'Although indian films may not be widely recognized in Brazil, I have developed a love for them after watching many of them. To showcase my favorites, I created a simple application using foundational concepts in React, which displays a list of my favorite Bollywood movies.',
    description: 'Os filmes indianos não são muito conhecidos aqui no Brasil, mas eu já assisti vários e adoro! Então, criei uma aplicação bem simples utilizando conceitos básicos de React para renderizar uma lista de filmes que estão na minha lista de favoritos!',
    image: BestIndianMovies,
    page: 'https://joanamds.github.io/best-indian-movies/',
    repo: 'https://github.com/joanamds/best-indian-movies',
  },
  {
    title: 'Disney Characters',
    descriptionENG: 'This webpage displays a list of Disney characters, and allows you to search for characters using the search bar.',
    description: 'É uma aplicação que renderiza os personagens da Disney, também é possível procurar personagens na barra de busca.',
    image: DisneyCharacters,
    page: 'https://joanamds.github.io/disney-characters/',
    repo: 'https://github.com/joanamds/disney-characters',
  },
  {
    title: 'Escolas de Samba',
    descriptionENG: 'This API collects information on Samba schools from two distinct groups in São Paulo and Rio de Janeiro, providing details such as the name, year of establishment, city, and group affiliation for each school.',
    description: 'Aqui está uma API que junta as informações das escolas de samba de São Paulo(Grupo Especial e Grupo de Acesso 1) e do Rio de Janeiro (Grupo Especial e Série Ouro) incluindo: Nome, fundação, cidade e grupo de cada uma.',
    image: EscolasDeSamba,
    page: null,
    repo: 'https://github.com/joanamds/escolas-de-samba',
  },
];

